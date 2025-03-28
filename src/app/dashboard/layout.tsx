import { fetchUserData } from '@/lib/api/user';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

const DashboardLayout = async ({ children }: PropsWithChildren) => {
  try {
    await fetchUserData();
  } catch {
    return redirect('/start');
  }

  return (
    <div className="h-screen flex flex-col">
      <header className="py-2 border-b">Жим Лёжа</header>
      <main className="flex-1 bg-neutral-100">{children}</main>
    </div>
  );
};

export default DashboardLayout;
