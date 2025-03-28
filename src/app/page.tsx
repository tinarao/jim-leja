import { fetchUserData } from '@/lib/api/user';

export default async function Home() {
  const user = await fetchUserData();

  return <div>{user?.email}</div>;
}
