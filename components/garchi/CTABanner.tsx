type Props = {
  headline?: string
  description?: string
  button_label?: string
  button_url?: string
  [x: string]: any
}

export default function CTABanner({
  headline,
  description,
  button_label,
  button_url = "#",
  ...props
}: Props) {
  return (
    <section className="relative px-6 py-16 lg:py-20" {...props}>
      <div className="mx-auto max-w-5xl">
        {/* Card */}
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-8 py-14 sm:px-14 lg:px-20 lg:py-16">
          {/* Ambient glow */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-violet-600/30 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-indigo-600/20 blur-[60px]" />

          {/* Grid */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <svg className="h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>

          {/* Top accent */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              {/* Label */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <div className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                <span className="text-[11px] font-semibold uppercase tracking-widest text-violet-300">
                  Get started
                </span>
              </div>

              {headline && (
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl leading-[1.1]">
                  {headline}
                </h2>
              )}
              {description && (
                <p className="mt-4 text-base leading-relaxed text-white/50">
                  {description}
                </p>
              )}
            </div>

            {button_label && (
              <div className="flex-shrink-0">
                <a
                  href={button_url}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-900 shadow-lg shadow-white/10 transition-all duration-200 hover:bg-slate-100 hover:shadow-white/20 hover:scale-[1.02]"
                >
                  {button_label}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
