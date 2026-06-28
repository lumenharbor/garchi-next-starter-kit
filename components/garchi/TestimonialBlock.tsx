import sanitizeHtml from "sanitize-html"

type Props = {
  quote?: string
  author_name?: string
  author_role?: string
  author_avatar?: string
  [x: string]: any
}

export default function TestimonialBlock({
  quote = "",
  author_name,
  author_role,
  author_avatar,
  ...props
}: Props) {
  const html = sanitizeHtml(quote, {
    allowedTags: ["p", "br", "strong", "em", "span"],
    allowedAttributes: { "*": ["class"] },
  })

  return (
    <section
      className="relative overflow-hidden bg-slate-950 py-28 px-6 lg:py-36"
      {...props}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-violet-700/10 blur-[120px]" />

      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="testimonial-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#testimonial-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Stars */}
        <div className="mb-8 flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>

        {/* Large decorative quote mark */}
        <div className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 select-none text-[160px] font-serif leading-none text-white/[0.03]" aria-hidden="true">
          &ldquo;
        </div>

        {html && (
          <blockquote className="relative text-[1.35rem] font-medium leading-[1.7] tracking-[-0.01em] text-white/90 sm:text-2xl sm:leading-[1.65]">
            <span dangerouslySetInnerHTML={{ __html: html }} />
          </blockquote>
        )}

        {(author_name || author_role || author_avatar) && (
          <figcaption className="mt-10 flex flex-col items-center gap-4">
            {/* Divider */}
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="flex items-center gap-4">
              {author_avatar ? (
                <img
                  src={author_avatar}
                  alt={author_name || ""}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10"
                />
              ) : (
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/8 ring-1 ring-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/40" aria-hidden="true">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              )}
              <div className="text-left">
                {author_name && (
                  <p className="text-sm font-semibold text-white">{author_name}</p>
                )}
                {author_role && (
                  <p className="text-sm text-white/40">{author_role}</p>
                )}
              </div>
            </div>
          </figcaption>
        )}
      </div>
    </section>
  )
}
