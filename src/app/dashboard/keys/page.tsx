import { fetchKeys } from "@/lib/api/keys";
import PageHead from "../_components/page-title";

const KeysPage = async () => {
  const keys = await fetchKeys();
  return (
    <div>
      <PageHead>
        <PageHead.Title>Ключи</PageHead.Title>
        <PageHead.Paragraph>
          Управляйте вашими ключами доступа к API
        </PageHead.Paragraph>
      </PageHead>
      <p>{JSON.stringify(keys)}</p>
    </div>
  );
};

export default KeysPage;
