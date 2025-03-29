import PageHead from "../_components/page-title";
import { Label } from "@/components/ui/label";
import { fetchPublicKey } from "@/lib/api/keys";
import CodeWithCopy from "@/components/code-with-copy";

const KeysPage = async () => {
  const publicKey = await fetchPublicKey();
  return (
    <div>
      <PageHead>
        <PageHead.Title>Ключи</PageHead.Title>
        <PageHead.Paragraph>
          Управляйте вашими ключами доступа к API
        </PageHead.Paragraph>
      </PageHead>
      <div className="py-2">
        <Label className="text-md">Приватный ключ</Label>
        <p className="text-muted-foreground text-sm">
          Ваш приватный ключ используется для доступа к API. Никому его не
          сообщайте и не передавайте.
        </p>
        <CodeWithCopy valueToCopy={publicKey}>
          <code className="overflow-hidden text-ellipsis text-white">
            JIM_PUBLIC_KEY={publicKey}
          </code>
        </CodeWithCopy>
      </div>
    </div>
  );
};

export default KeysPage;
