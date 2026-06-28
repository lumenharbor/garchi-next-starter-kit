import Page from "@/components/garchi/Page";
import { getPageMetaData } from "@/utils/page";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug?: string[] }>;
};

function resolveSlug(segments?: string[]): string {
  if (!segments || segments.length === 0) {
    return "/";
  }

  return segments.join("/");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = resolveSlug((await params).slug);
  const metadata = await getPageMetaData(slug);
  return metadata;
}

export default async function DynamicPage({ params }: Props) {
  const slug = resolveSlug((await params).slug);

  return <Page slug={slug} />;
}
