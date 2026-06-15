import { ClerkProvider } from "@clerk/nextjs"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const user = await currentUser()

    if (!user) {
        redirect("/sign-in")
    }

    // ClerkProvider is scoped to /admin (and the auth routes) so its client JS
    // and third-party cookies never load on the public homepage.
    return <ClerkProvider>{children}</ClerkProvider>
}
