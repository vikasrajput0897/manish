import client from '../../tina/__generated__/client';
import HomeClient from './home-client';

export default async function Page() {
  const res = await client.queries.home({ relativePath: 'index.md' });

  return (
    <HomeClient
      data={res.data}
      query={res.query}
      variables={res.variables}
    />
  );
}
