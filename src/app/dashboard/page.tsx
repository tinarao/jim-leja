"use client";

import { useUser } from "@/contexts/user-context";
import PageHead from "./_components/page-title";

const DashboardPage = () => {
  const { isLoading, user } = useUser();

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <PageHead>
          <PageHead.Title>Домашняя страница</PageHead.Title>
          <PageHead.Paragraph>
            Давно не виделись,{" "}
            <span className="font-medium text-orange-500">
              {user?.nickName}
            </span>
            !
          </PageHead.Paragraph>
        </PageHead>
      )}
    </div>
  );
};

export default DashboardPage;
