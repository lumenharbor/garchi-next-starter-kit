// server component

import GarchiComponent from "./GarchiComponent";
import { getPage } from "@/utils/page";
import JsonLd from "./JsonLd";

type Props = {
  slug: string;
};

export default async function Page({ slug }: Props) {
  const page = await getPage(slug);


  return (
    <>
      {page.sections?.map((section, index) => (
        <GarchiComponent key={index} section={section} />
      ))}
      <JsonLd jsonLd={page.json_ld} />
    </>
  );
}
