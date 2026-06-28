import { GarchiSection } from "@garchicms/garchi-node-sdk"
import GarchiComponent from "./GarchiComponent"

type Props = {
  section_title?: string
  section_subtitle?: string
  subsections: GarchiSection[]
  [x: string]: any
}

export default function FeatureGrid({
  section_title,
  section_subtitle,
  subsections,
  ...props
}: Props) {
  return (
    <section className="relative py-24 px-6 bg-white lg:py-32" {...props}>
      {/* Subtle background texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.04),transparent)]" />

      <div className="relative mx-auto max-w-7xl">
        {(section_title || section_subtitle) && (
          <div className="mb-16 text-center">
            {section_title && (
              <>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-3.5 py-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-violet-600">
                    Features
                  </span>
                </div>
                <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  {section_title}
                </h2>
              </>
            )}
            {section_subtitle && (
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-500">
                {section_subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {subsections?.map((section) => (
            <GarchiComponent key={section.id} section={section} />
          ))}
        </div>
      </div>
    </section>
  )
}
