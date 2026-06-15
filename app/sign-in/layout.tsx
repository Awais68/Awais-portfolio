import { ClerkProvider } from "@clerk/nextjs"

export default function SignInLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // ClerkProvider scoped to the auth route only — not the public homepage.
    return <ClerkProvider>{children}</ClerkProvider>
}
