import { redirect } from "react-router-dom"

export async function requireAuth() {
    const isLoggedIn = true
    const response = redirect("/login?message=You must log in first.")
    response.body= true
    if (!isLoggedIn) {
        throw response
    }
    return null
}