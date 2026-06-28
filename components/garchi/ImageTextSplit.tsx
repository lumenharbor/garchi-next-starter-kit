import sanitizeHtml from "sanitize-html"

type ImagePosition = "left" | "right" | "top" | "bottom"

type Props = {
  image?: string
  title?: string
  body?: string
  image_position?: ImagePosition
  [x: string]: any
}

function sanitize(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["h1", "h2", "span"]),
    allowedAttributes: { "*": ["class"], a: ["href", "target", "rel"] },
    transformTags: {
      a: (tagName, attribs) => ({
        tagName: "a",
        attribs: { ...attribs, rel: attribs.rel || "noopener noreferrer" },
      }),
    },
  })
}

export default function ImageTextSplit({
  image,
  title,
  body = "",
  image_position = "left",
  ...props
}: Props) {
  const html = sanitize(body)
  const isStacked = image_position === "top" || image_position === "bottom"
  const imageFirst = image_position === "left" || image_position === "top"

  const imageEl = image ? (
    <div className={`relative ${isStacked ? "w-full" : "w-full lg:w-1/2"}`}>
      {/* Decorative glow behind image */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-violet-100 to-indigo-100 opacity-60 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
        <img
          src={image}
          alt=""
          className="w-full object-cover transition-transform duration-700 will-change-transform hover:scale-[1.03]"
          style={{ minHeight: "360px" }}
        />
        {/* Subtle inner vignette */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/8" />
      </div>
    </div>
  ) : null

  const textEl = (
    <div
      className={`flex flex-col justify-center ${isStacked ? "w-full" : "w-full lg:w-1/2"}`}
    >
      {/* Eyebrow */}
      <div className="mb-6 flex items-center gap-3">
        <div className="h-px w-10 bg-violet-400" />
        <span className="text-xs font-semibold uppercase tracking-widest text-violet-500">
          Our story
        </span>
      </div>

      {title && (
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl leading-[1.1]">
          {title}
        </h2>
      )}

      {html && (
        <div
          className="mt-6 prose prose-slate prose-lg max-w-none
            prose-p:text-slate-500 prose-p:leading-relaxed prose-p:mt-4
            prose-a:text-violet-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
            prose-strong:text-slate-800 prose-strong:font-semibold
            prose-li:text-slate-500"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
    </div>
  )

  return (
    <section
      className="relative overflow-hidden bg-white py-24 px-6 lg:py-32"
      {...props}
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-slate-50/50" />

      <div className="relative mx-auto max-w-7xl">
        <div
          className={[
            "flex flex-col gap-14",
            !isStacked ? "lg:flex-row lg:items-center lg:gap-20" : "",
            !isStacked && !imageFirst ? "lg:flex-row-reverse" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {imageFirst ? (
            <>
              {imageEl}
              {textEl}
            </>
          ) : (
            <>
              {textEl}
              {imageEl}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
