import Image from "next/image";
import Yandex from "@/assets/Yandex.svg";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { getApiRoute } from "@/lib/api";

const YandexOAuthButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        const route = getApiRoute("/api/oauth/yandex/login");
        return redirect(route);
      }}
    >
      <Button size="lg" className="w-full">
        <Image src={Yandex} width={25} height={25} alt="Яндекс" />
        Войти через Яндекс
      </Button>
    </form>
  );
};

export default YandexOAuthButton;
