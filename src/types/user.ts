export type User = {
  id: number;
  name: string;
  provider: string;
  email: string;
  nickName?: string | null;
  avatarUrl?: string | null;
  locale: string;
  isActive: boolean;
  lastLogin: string;

  createdAt: string;
  updatedAt: string;
};
