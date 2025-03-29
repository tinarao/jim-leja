"use server"

import { cookies } from "next/headers";
import { getApiRoute } from ".";

export const fetchPublicKey = async (): Promise<string> => {
    const cookieStorage = await cookies();
    const token = cookieStorage.get("session");
    let headers: HeadersInit = {};

    if (token !== undefined) {
        headers = {
            Cookie: `${token.name}=${token.value}`,
        };
    }

    const route = getApiRoute("/api/keys");
    const res = await fetch(route, {
        headers: {
            ...headers,
        },
    });

    if (!res.ok) {
        throw new Error("Request failed with status " + res.status);
    }

    const { publicKey }: { publicKey: string } = await res.json();
    return publicKey;
}