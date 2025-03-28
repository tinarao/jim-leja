export const getApiPublicUrl = () => {
    let route = process.env.NEXT_PUBLIC_API_URL
    if (!route) {
        route = "http://localhost:8080"
    }

    return route
}

export const getApiRoute = (route: string) => {
    const basicRoute = getApiPublicUrl()
    return basicRoute + route
}