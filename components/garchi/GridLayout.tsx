import { GarchiSection } from "@garchicms/garchi-node-sdk"
import GarchiComponent from "./GarchiComponent"

type Props = {
  cols?: number | string
  subSections?: GarchiSection[]
  [x: string]: any
}

const lgColsMap: Record<number, string> = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
}

export default function GridLayout({ cols = 3, subSections, ...props }: Props) {
  const n = Math.min(5, Math.max(1, Number(cols) || 1))
  const lgClass = lgColsMap[n]

  return (
    <div
      className={`grid gap-4 grid-cols-1 md:grid-cols-2 ${lgClass}`}
      {...props}
    >
      {subSections?.map((section) => (
        <GarchiComponent key={section.id} section={section} />
      ))}
    </div>
  )
}
