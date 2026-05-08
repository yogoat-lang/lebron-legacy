import { Maximize, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

const quickStats = [
  { value: "10", label: "All-Star selections" },
  { value: "22+", label: "Career highlight facts" },
  { value: "113", label: "Record-breaking milestones" },
  { value: "12.5+", label: "Career assists average" },
  { value: "61", label: "Career highlight games" },
  { value: "10+", label: "Franchise records held" },
];

export function DocumentarySection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const handleFullscreen = () => {
    const v = videoRef.current;
    if (!v) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      v.requestFullscreen();
    }
  };

  return (
    <section
      id="documentary"
      data-ocid="documentary.section"
      className="py-20 md:py-28 bg-muted/20"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 space-y-3"
        >
          <div className="flex items-center gap-3">
            <div className="accent-line" />
            <span className="stat-label gold-text">60-Second Documentary</span>
          </div>
          <h2 className="section-title text-foreground">Career Highlights</h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            From his debut in Cleveland to making history as the NBA&apos;s
            all-time scoring leader — sixty seconds that capture it all.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Video player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div
              data-ocid="documentary.video_player"
              className="relative rounded-lg overflow-hidden bg-card border border-border shadow-elevated group"
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(!playing)}
            >
              {/* Actual video element — ref attached, poster shown when no src */}
              <div className="relative aspect-video bg-gradient-to-br from-card to-muted">
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover"
                  muted={muted}
                  playsInline
                  poster=""
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
                  aria-label="LeBron James 60-second career documentary"
                />

                {/* Overlay shown when video has no src / not playing */}
                {!playing && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-card/80 to-muted/80">
                    <div className="text-center space-y-2 px-8">
                      <div className="font-display font-800 text-4xl md:text-5xl gold-text">
                        60
                      </div>
                      <div className="stat-label tracking-widest">
                        Second Career Documentary
                      </div>
                      <div className="accent-line mx-auto mt-3" />
                      <p className="text-xs text-muted-foreground mt-3 max-w-xs">
                        LeBron James: A 60-second journey through two decades of
                        basketball greatness
                      </p>
                    </div>
                  </div>
                )}

                {/* Play overlay button */}
                <button
                  type="button"
                  data-ocid="documentary.play_button"
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center group/play"
                  aria-label={
                    playing ? "Pause documentary" : "Play documentary"
                  }
                >
                  <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center bg-background/60 backdrop-blur-sm transition-smooth group-hover/play:bg-primary/20 shadow-gold">
                    {playing ? (
                      <Pause className="w-6 h-6 gold-text" />
                    ) : (
                      <Play className="w-6 h-6 gold-text ml-1" />
                    )}
                  </div>
                </button>
              </div>

              {/* Controls bar */}
              <div
                className={`flex items-center justify-between gap-3 px-4 py-2 bg-card border-t border-border transition-smooth ${
                  showControls ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    data-ocid="documentary.play_pause_toggle"
                    onClick={togglePlay}
                    className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={playing ? "Pause" : "Play"}
                  >
                    {playing ? <Pause size={14} /> : <Play size={14} />}
                  </button>
                  <button
                    type="button"
                    data-ocid="documentary.mute_toggle"
                    onClick={toggleMute}
                    className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={muted ? "Unmute" : "Mute"}
                  >
                    {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                  </button>
                </div>
                <span className="text-xs text-muted-foreground font-mono">
                  0:00 / 1:00
                </span>
                <button
                  type="button"
                  data-ocid="documentary.fullscreen_button"
                  onClick={handleFullscreen}
                  className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Fullscreen"
                >
                  <Maximize size={14} />
                </button>
              </div>
            </div>

            <p className="mt-3 text-xs text-muted-foreground text-center">
              60-second career documentary — King James: The Complete Story
            </p>
          </motion.div>

          {/* Stats grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-3">
            {quickStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                data-ocid={`documentary.stat.${i + 1}`}
                className="bg-card border border-border rounded-lg p-4 space-y-1 hover:border-primary/40 transition-smooth"
              >
                <div className="stat-value text-2xl md:text-3xl">
                  {stat.value}
                </div>
                <div className="stat-label leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
