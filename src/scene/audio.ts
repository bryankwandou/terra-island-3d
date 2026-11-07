export class TerraSoundscape {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private surfFilter: BiquadFilterNode | null = null;
  private waterfallGain: GainNode | null = null;
  private isPlaying = false;
  private waveTimer: number | null = null;

  public toggle(): boolean {
    if (!this.ctx) {
      this.initAudio();
    }
    if (!this.ctx || !this.masterGain) {
      return false;
    }

    if (this.isPlaying) {
      this.masterGain.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 0.35);
      this.isPlaying = false;
      if (this.waveTimer !== null) {
        window.clearInterval(this.waveTimer);
        this.waveTimer = null;
      }
    } else {
      if (this.ctx.state === "suspended") {
        void this.ctx.resume();
      }
      this.masterGain.gain.setTargetAtTime(0.24, this.ctx.currentTime, 0.5);
      this.isPlaying = true;
      this.startWaveModulation();
    }

    return this.isPlaying;
  }

  public setChapterAtmosphere(chapterId: number, waveStrength: number): void {
    if (!this.ctx || !this.surfFilter || !this.waterfallGain) return;
    const now = this.ctx.currentTime;
    // Chapter 2 (index 2) is Jungle Waterfall -> boost waterfall white-water roar
    const wfLevel = chapterId === 2 ? 0.45 : 0.08;
    this.waterfallGain.gain.setTargetAtTime(wfLevel, now, 0.4);
    this.surfFilter.frequency.setTargetAtTime(280 + waveStrength * 420, now, 0.4);
  }

  private initAudio(): void {
    const AudioCtx =
      window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.ctx = new AudioCtx();

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = 0.0001;
    this.masterGain.connect(this.ctx.destination);

    // 4-second pink/brown noise buffer for ocean surf and waterfall roar
    const bufferSize = this.ctx.sampleRate * 4;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + 0.02 * white) / 1.02;
      lastOut = data[i];
      data[i] *= 3.2;
    }

    const surfSource = this.ctx.createBufferSource();
    surfSource.buffer = buffer;
    surfSource.loop = true;

    this.surfFilter = this.ctx.createBiquadFilter();
    this.surfFilter.type = "lowpass";
    this.surfFilter.frequency.value = 460;

    const surfGain = this.ctx.createGain();
    surfGain.gain.value = 0.55;

    surfSource.connect(this.surfFilter);
    this.surfFilter.connect(surfGain);
    surfGain.connect(this.masterGain);
    surfSource.start();

    // Secondary bandpass layer for rainforest waterfall mist roar
    const wfSource = this.ctx.createBufferSource();
    wfSource.buffer = buffer;
    wfSource.loop = true;

    const wfFilter = this.ctx.createBiquadFilter();
    wfFilter.type = "bandpass";
    wfFilter.frequency.value = 920;
    wfFilter.Q.value = 0.7;

    this.waterfallGain = this.ctx.createGain();
    this.waterfallGain.gain.value = 0.1;

    wfSource.connect(wfFilter);
    wfFilter.connect(this.waterfallGain);
    this.waterfallGain.connect(this.masterGain);
    wfSource.start();
  }

  private startWaveModulation(): void {
    if (this.waveTimer !== null) {
      window.clearInterval(this.waveTimer);
    }
    this.waveTimer = window.setInterval(() => {
      if (!this.ctx || !this.surfFilter || !this.isPlaying) return;
      const now = this.ctx.currentTime;
      this.surfFilter.frequency.setTargetAtTime(640, now, 1.4);
      this.surfFilter.frequency.setTargetAtTime(280, now + 2.1, 1.8);
    }, 4500);
  }
}

