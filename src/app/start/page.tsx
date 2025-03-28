import YandexOAuthButton from './_components/yandex-oauth-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StartPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Авторизация</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <YandexOAuthButton />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StartPage;
