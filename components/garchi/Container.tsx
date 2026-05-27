import { GarchiSection } from "@garchicms/garchi-node-sdk"
import GarchiComponent from "./GarchiComponent"

type Size = "small" | "medium" | "large" | "extra large" | "extra-large"

type Props = {
  size?: Size
  subSections?: GarchiSection[]
  [x: string]: any
}

const sizeMap: Record<string, string> = {
  small: "max-w-md",
  medium: "max-w-xl",
  large: "max-w-3xl",
  "extra large": "max-w-7xl",
  "extra-large": "max-w-7xl",
}

export default function Container({
  size = "large",
  subSections,
  ...props
}: Props) {
  const maxWidth = sizeMap[size] || sizeMap.large

  return (
    <div className={`mx-auto w-full px-4 ${maxWidth}`} {...props}>
      {subSections?.map((section) => (
        <GarchiComponent key={section.id} section={section} />
      ))}
    </div>
  )
}
