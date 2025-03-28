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
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    const getData = async () => {
      try {
        const user = await fetchUserData();
        setUser(user);
      } catch (err) {
        const e = err as Error;
        console.error(e);
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <UserContext.Provider value={{ user, isLoading, error }}>
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
