import { ClerkProvider } from "@clerk/nextjs"

export default function SignUpLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // ClerkProvider scoped to the auth route only — not the public homepage.
    return <ClerkProvider>{children}</ClerkProvider>
}
