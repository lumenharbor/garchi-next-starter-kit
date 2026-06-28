import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Icon } from "./Icon";
import sanitizeHtml from "sanitize-html";

type Props = {
  icon?: string;
  title: string;
  description?: string;
  link_url?: string;
  [x: string]: any;
};

function toPascalCase(str: string): string {
  return str
    .split(/[-_\s]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

export default function FeatureCard({
  icon = "Star",
  title,
  description = "",
  link_url,
  ...props
}: Props) {
  const IconComponent = icon
    ? ((LucideIcons as Record<string, unknown>)[toPascalCase(icon)] as
        | LucideIcon
        | undefined)
    : undefined;

  const html = sanitizeHtml(description, {
    allowedTags: ["p", "br", "strong", "em", "a", "span"],
    allowedAttributes: { a: ["href", "target", "rel"], "*": ["class"] },
  });

  const cardClass =
    "group relative flex flex-col rounded-2xl border border-slate-100 bg-white p-7 transition-all duration-300 hover:border-slate-200 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1";

  const inner = (
    <>
      {/* Icon */}
      <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 text-slate-600 ring-1 ring-slate-100 transition-all duration-300 group-hover:bg-violet-50 group-hover:text-violet-600 group-hover:ring-violet-100">
        <Icon iconNode={IconComponent} className="h-5 w-5" />
      </div>

      {/* Title */}
      <h3 className="mb-2.5 text-[15px] font-semibold leading-snug text-slate-900">
        {title}
      </h3>

      {/* Description */}
      {html && (
        <div
          className="flex-1 text-[14px] leading-relaxed text-slate-500"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}

      {/* Link */}
      {link_url && (
        <div className="mt-5 flex items-center gap-1 text-[13px] font-semibold text-violet-600 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:gap-2">
          Learn more
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      )}

      {/* Bottom accent line on hover */}
      <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </>
  );

  return link_url ? (
    <a href={link_url} className={cardClass} {...props}>
      {inner}
    </a>
  ) : (
    <div className={cardClass} {...props}>
      {inner}
    </div>
  );
}
