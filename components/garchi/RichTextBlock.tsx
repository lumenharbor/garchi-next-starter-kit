import sanitizeHtml from "sanitize-html"
import MarkdownRenderer from "./MarkdownRenderer"

type Props = {
  content?: string
  [x: string]: any
}

const allowedIframeHostnames = [
  "www.youtube.com",
  "youtube.com",
  "www.youtube-nocookie.com",
  "youtube-nocookie.com",
  "player.vimeo.com",
  "www.loom.com",
  "loom.com",
]

function sanitize(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      "img", "iframe", "video", "source", "figure", "figcaption", "h1", "h2", "span",
    ]),
    allowedAttributes: {
      "*": ["class", "id", "style"],
      a: ["href", "name", "target", "rel"],
      img: ["src", "srcset", "alt", "title", "width", "height", "loading"],
      iframe: ["src", "width", "height", "frameborder", "allow", "allowfullscreen", "loading", "referrerpolicy", "title"],
      video: ["src", "controls", "poster", "width", "height"],
      source: ["src", "type"],
    },
    allowedSchemes: ["http", "https", "mailto", "tel", "data"],
    allowedSchemesByTag: { img: ["http", "https", "data"] },
    allowedIframeHostnames,
    transformTags: {
      a: (tagName, attribs) => ({
        tagName: "a",
        attribs: { ...attribs, rel: attribs.rel || "noopener noreferrer" },
      }),
    },
  })
}

export default function RichTextBlock({ content = "", ...props }: Props) {
  const html = sanitize(content)

  return (
    <section className="py-20 px-6 lg:py-24" {...props}>
      <div className="mx-auto max-w-170">
        <MarkdownRenderer content={html} />
      </div>
    </section>
  )
}
