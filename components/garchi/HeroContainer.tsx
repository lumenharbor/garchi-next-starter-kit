type Props = {
  heading: string
  subheading?: string
  image?: string
  cta_label?: string
  cta_url?: string
  [x: string]: any
}

export default function HeroContainer({
  heading,
  subheading,
  image,
  cta_label,
  cta_url = '#',
  ...props
}: Props) {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#030712] flex items-center"
      {...props}
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-violet-700/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-700/15 blur-[100px]" />

      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.06)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Thin top border line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 lg:px-8 lg:py-36">
        {image ? (
          <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-20">
            {/* Left — text */}
            <div className="flex-1 lg:max-w-2xl">
              <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
                </span>
                <span className="text-[13px] font-medium tracking-wide text-white/60">Now live</span>
              </div>

              <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.04] tracking-[-0.03em] text-white">
                {heading}
              </h1>

              {subheading && (
                <p className="mt-6 text-lg leading-relaxed text-slate-400 max-w-lg">
                  {subheading}
                </p>
              )}

              {cta_label && (
                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href={cta_url}
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 shadow-lg shadow-white/10 transition-all duration-200 hover:bg-slate-100 hover:shadow-white/20 hover:scale-[1.02]"
                  >
                    {cta_label}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-medium text-white/70 backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                  >
                    Learn more
                  </a>
                </div>
              )}
            </div>

            {/* Right — image */}
            <div className="flex-1 w-full max-w-xl lg:max-w-none">
              <div className="relative">
                <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-violet-600/25 via-indigo-600/10 to-transparent blur-2xl" />
                <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
                  <img src={image} alt="" className="w-full object-cover" />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
              </span>
              <span className="text-[13px] font-medium tracking-wide text-white/60">Now live</span>
            </div>

            <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[1.04] tracking-[-0.03em] text-white">
              {heading}
            </h1>

            {subheading && (
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
                {subheading}
              </p>
            )}

            {cta_label && (
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href={cta_url}
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 shadow-lg shadow-white/10 transition-all duration-200 hover:bg-slate-100 hover:scale-[1.02]"
                >
                  {cta_label}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-medium text-white/70 backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                >
                  Learn more
                </a>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#030712] to-transparent" />
    </section>
  )
}
