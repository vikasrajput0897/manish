import client from '../../../tina/__generated__/client';
import PageClient from './page-client';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const pages = await client.queries.pageConnection();
  return pages.data.pageConnection.edges?.map((edge) => ({
    slug: edge?.node?._sys.filename,
  })) || [];
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const res = await client.queries.page({ relativePath: `${slug}.md` });

    return (
      <PageClient
        data={res.data}
        query={res.query}
        variables={res.variables}
      />
    );
  } catch (error) {
    // If the page doesn't exist, return a 404
    notFound();
  }
}
