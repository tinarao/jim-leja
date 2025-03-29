"use server";

import { User } from "@/types/user";
import { getApiRoute } from ".";
import { cookies } from "next/headers";

export const fetchUserData = async (): Promise<User> => {
  const cookieStorage = await cookies();
  const token = cookieStorage.get("session");
  let headers: HeadersInit = {};

  if (token !== undefined) {
    headers = {
      Cookie: `${token.name}=${token.value}`,
    };
  }

  const route = getApiRoute("/api/oauth/me");
  const res = await fetch(route, {
    headers: {
      ...headers,
    },
  });

  if (!res.ok) {
    throw new Error("Request failed with status " + res.status);
  }

  const data: User = await res.json();
  return data;
};
