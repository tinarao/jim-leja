export const getApiPublicUrl = () => {
    const route = process.env.NEXT_PUBLIC_API_URL
    if (!route) {
        throw new Error("NEXT_PUBLIC_API_URL is not defined")
    }

    return route
}

export const getApiRoute = (route: string) => {
    const basicRoute = getApiPublicUrl()
    return basicRoute + route
}