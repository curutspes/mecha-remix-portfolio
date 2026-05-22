export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden text-cyan-400">

      {/* RADAR */}
      <div className="radar"></div>

      {/* TARGET LOCK */}
      <div className="target-lock"></div>

      {/* TOP PANEL */}
      <div className="absolute top-0 left-0 w-full flex justify-between p-6 text-sm tracking-[4px] z-20">
        <span>SYSTEM ONLINE</span>
        <span>RX-78 GUNDAM</span>
      </div>

      {/* MAIN CONTENT */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen">

        <img
          src="/mecha.png"
          alt="mecha"
          className="w-[400px] drop-shadow-[0_0_40px_cyan] animate-pulse"
        />

        <h1 className="text-7xl font-black neon mt-10">
          RX-78
        </h1>

        <p className="mt-6 tracking-[8px] text-cyan-300">
          MECHA SYSTEM ACTIVE
        </p>

        {/* HUD PANELS */}
        <div className="grid md:grid-cols-3 gap-6 mt-20 w-full max-w-6xl px-10">

          <div className="hud-panel">
            <h2 className="text-2xl mb-4 font-bold">
              RADAR
            </h2>

            <p>Enemy tracking system active.</p>
          </div>

          <div className="hud-panel">
            <h2 className="text-2xl mb-4 font-bold">
              TARGET
            </h2>

            <p>Lock-on sequence initialized.</p>
          </div>

          <div className="hud-panel">
            <h2 className="text-2xl mb-4 font-bold">
              PILOT
            </h2>

            <p>Frontend Mecha Developer.</p>
          </div>

        </div>

        {/* HOLOGRAM */}
        <div className="mt-20 hologram">
          HOLOGRAM ACTIVE
        </div>

      </section>

    </main>
  );
}