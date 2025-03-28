"use server"

import { User } from "@/types/user"
import { getApiRoute } from "."
import { cookies } from "next/headers"

export const fetchUserData = async (): Promise<User> => {
    const cookieStorage = await cookies()
    const token = cookieStorage.get("session")
    if (!token) {
        throw new Error("No token found in cookies")
    }

    const route = getApiRoute("/api/oauth/me")
    const res = await fetch(route, {
        headers: {
            "Cookie": `${token.name}=${token.value}`
        }
    })

    if (!res.ok) {
        throw new Error("Fetch user request failed with status" + res.status)
    }

    const data: User = await res.json();
    return data
}