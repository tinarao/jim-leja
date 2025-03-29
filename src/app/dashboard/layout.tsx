import { fetchUserData } from "@/lib/api/user";
import { User } from "@/types/user";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";
import UserDropdown from "./_components/user-dropdown";
import { Button } from "@/components/ui/button";
import { Cog, House, Key } from "lucide-react";
import Link from "next/link";

const navbarLinks = [
  {
    label: "Домашняя",
    icon: House,
    href: "/dashboard",
  },
  {
    label: "Ключи",
    icon: Key,
    href: "/dashboard/keys",
  },
  {
    label: "Настройки",
    icon: Cog,
    href: "/dashboard/settings",
  },
];

const DashboardLayout = async ({ children }: PropsWithChildren) => {
  let user: User;
  try {
    user = await fetchUserData();
  } catch {
    return redirect("/start");
  }

  return (
    <div className="flex h-screen flex-col space-y-4 py-4">
      <header className="container mx-auto flex items-center justify-between rounded-md bg-neutral-50 p-4">
        <p className="text-xl font-bold">Жим Лёжа</p>
        {user && <UserDropdown user={user} />}
      </header>
      <main className="container mx-auto flex-1 rounded-md p-4">
        <div className="grid h-full grid-cols-7">
          <aside className="col-span-1 p-2">
            {navbarLinks.map((link) => (
              <Button
                key={link.href}
                className="w-full justify-start"
                variant="ghost"
                size="lg"
                asChild
              >
                <Link href={link.href}>
                  <link.icon />
                  {link.label}
                </Link>
              </Button>
            ))}
          </aside>
          <div className="col-span-6 h-full border-l p-2 pl-4">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
