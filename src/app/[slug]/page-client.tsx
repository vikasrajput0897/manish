'use client';
import { useTina } from 'tinacms/dist/react';
import { PageQuery } from '../../../tina/__generated__/types';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

export default function PageClient({
  data,
  query,
  variables,
}: {
  data: PageQuery;
  query: string;
  variables: object;
}) {
  const { data: tinaData } = useTina({
    query,
    variables,
    data,
  });

  const { title, body } = tinaData.page;

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: 'var(--maroon)', borderBottom: '1px solid #ccc', paddingBottom: '10px', marginBottom: '20px' }}>
        {title}
      </h2>
      <div className="prose">
        <TinaMarkdown content={body} />
      </div>
    </div>
  );
}
