'use client';

import { fetchUserData } from '@/lib/api/user';
import { User } from '@/types/user';
import { createContext, useContext, useEffect, useState } from 'react';

interface UserContextType {
  user?: User;
  isLoading: boolean;
  error?: string;
}

const UserContext = createContext<UserContextType>({
  user: undefined,
  isLoading: true,
  error: undefined,
});

export const UserProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const user = await fetchUserData();
        setUser(user);
      } catch (err) {
        console.warn('User can not be authenticated.', err);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <UserContext.Provider value={{ user, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return ctx;
};
