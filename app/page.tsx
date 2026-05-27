import Image from 'next/image'

const steps = [
  { num: "01", text: "Provide your api key in ", code: ".env" },
  { num: "02", text: "Create your first page on ", link: { href: "https://garchi.co.uk", label: "Garchi CMS" } },
  { num: "03", text: "Check out ", code: "components/garchi", suffix: " folder for example components" },
  { num: "04", text: "Check out ", code: "types/garchi.d.ts", suffix: " for types" },
  { num: "05", text: "Check out ", code: "utils/garchi.ts", suffix: " for helper functions" },
]

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden font-['DM_Mono',_monospace]">

      {/* Ambient grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#e5e5e5 1px, transparent 1px), linear-gradient(90deg, #e5e5e5 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Top-right accent blob */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-[#ff3c3c] opacity-[0.12] blur-[100px]" />
      {/* Bottom-left accent blob */}
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-[360px] h-[360px] rounded-full bg-[#ff3c3c] opacity-[0.07] blur-[90px]" />

      {/* ─── Header ─── */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/[0.06]">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#ff3c3c] animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] text-white/40">Starter Kit</span>
        </div>

        <a
          href="https://garchi.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
        >
          {/* Replace with actual logo if available */}
          <img src="/garchi_logo.svg" alt="Garchi Logo" width={80} height={20} className="invert brightness-0 invert" />
        </a>
      </header>

      {/* ─── Hero ─── */}
      <section className="relative z-10 px-8 pt-20 pb-16 max-w-4xl">
        <p className="text-xs uppercase tracking-[0.3em] text-[#ff3c3c] mb-5">
          Garchi CMS × Next.js
        </p>
        <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-bold leading-[1.05] tracking-tight mb-6">
          Your content,<br />
          <span className="text-white/20">your structure,</span><br />
          your rules.
        </h1>
        <p className="text-white/40 text-base max-w-md leading-relaxed">
          An API-first headless CMS built for developers who think in components. Get set up in minutes.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#ff3c3c]/30 bg-[#ff3c3c]/[0.07] px-4 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff3c3c]" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#ff3c3c]">MCP-native — AI agent ready</span>
        </div>
      </section>

      {/* ─── Steps ─── */}
      <section className="relative z-10 px-8 pb-20">
        <div className="max-w-2xl space-y-0 divide-y divide-white/[0.06] border-t border-white/[0.06]">
          {steps.map(({ num, text, code, link, suffix }) => (
            <div
              key={num}
              className="group flex items-start gap-6 py-5 hover:bg-white/[0.02] -mx-4 px-4 transition-colors duration-200 rounded-sm"
            >
              <span className="shrink-0 text-[#ff3c3c] text-xs mt-0.5 tabular-nums">{num}</span>
              <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                {text}
                {code && (
                  <code className="text-white bg-white/[0.08] border border-white/[0.1] rounded px-1.5 py-0.5 text-xs font-['DM_Mono',_monospace]">
                    {code}
                  </code>
                )}
                {link && (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ff3c3c] underline underline-offset-2 decoration-[#ff3c3c]/40 hover:decoration-[#ff3c3c] transition-colors"
                  >
                    {link.label}
                  </a>
                )}
                {suffix && <span>{suffix}</span>}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Cards ─── */}
      <section className="relative z-10 px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl">
          <a
            href="https://garchi.co.uk/documentation"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.03] p-6 hover:border-[#ff3c3c]/40 hover:bg-white/[0.05] transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff3c3c] opacity-0 group-hover:opacity-[0.05] blur-2xl transition-opacity duration-500 rounded-full" />
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/25 mb-3">01 / Learn</p>
            <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
              Documentation
              <span className="text-white/20 group-hover:text-[#ff3c3c] group-hover:translate-x-1 inline-block transition-all duration-200">→</span>
            </h2>
            <p className="text-sm text-white/35 leading-relaxed">
              In-depth reference for features, API endpoints, and usage patterns.
            </p>
          </a>

          <a
            href="https://garchi.co.uk/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.03] p-6 hover:border-[#ff3c3c]/40 hover:bg-white/[0.05] transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff3c3c] opacity-0 group-hover:opacity-[0.05] blur-2xl transition-opacity duration-500 rounded-full" />
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/25 mb-3">02 / Start</p>
            <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
              Sign Up Free
              <span className="text-white/20 group-hover:text-[#ff3c3c] group-hover:translate-x-1 inline-block transition-all duration-200">→</span>
            </h2>
            <p className="text-sm text-white/35 leading-relaxed">
              Create an account and start building your content structure instantly.
            </p>
          </a>

          <a
            href="https://garchi.co.uk/mcp-docs"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-lg border border-[#ff3c3c]/20 bg-[#ff3c3c]/[0.04] p-6 hover:border-[#ff3c3c]/50 hover:bg-[#ff3c3c]/[0.08] transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-28 h-28 bg-[#ff3c3c] opacity-0 group-hover:opacity-[0.08] blur-2xl transition-opacity duration-500 rounded-full" />
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#ff3c3c]/60 mb-3">03 / Agents</p>
            <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
              MCP Integration
              <span className="text-white/20 group-hover:text-[#ff3c3c] group-hover:translate-x-1 inline-block transition-all duration-200">→</span>
            </h2>
            <p className="text-sm text-white/35 leading-relaxed">
              Connect AI agents to your content via the native MCP server. No extra glue code.
            </p>
          </a>
        </div>
      </section>

      {/* ─── Footer line ─── */}
      <footer className="relative z-10 px-8 py-4 border-t border-white/[0.06] flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/20">Garchi CMS</span>
        <span className="text-[10px] text-white/20">API-first · Headless · MCP-native</span>
      </footer>
    </main>
  )
}