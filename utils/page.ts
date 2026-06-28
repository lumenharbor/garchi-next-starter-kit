import { Metadata } from "next";
import { garchi } from "./garchi";
import { notFound } from "next/navigation";

export async function getPageMetaData(slug: string): Promise<Metadata> {
  const page = await getPage(slug);

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      images: [
        {
          url: page.image || "",
        },
      ],
    },
  };
}

export async function getPage(slug: string) {
  try {
    return await garchi.headless.getPage({
      slug,
      space_uid: process.env.GARCHI_SPACE_UID as string,
      mode: "draft", //change to "live" in production
    });
  } catch (error) {
    notFound();
  }
}
