"use client"

import dynamic from "next/dynamic"

/**
 * Below-the-fold sections are code-split and loaded with `ssr: false` so that
 * framer-motion and the rest of their JS download AFTER the hero has painted.
 * This keeps the initial main-thread work (TBT) and the LCP path minimal.
 *
 * Each section reserves vertical space via a `min-h` fallback to avoid layout
 * shift (CLS) while its chunk loads.
 */

function SectionSkeleton({ minH }: { minH: string }) {
    return <div className={minH} aria-hidden="true" />
}
SectionSkeleton.displayName = "SectionSkeleton"

const AboutSection = dynamic(
    () => import("./about-section").then((m) => m.AboutSection),
    { ssr: false, loading: () => <SectionSkeleton minH="min-h-[600px]" /> }
)

const WorkProcessSection = dynamic(
    () => import("./work-process-section").then((m) => m.WorkProcessSection),
    { ssr: false, loading: () => <SectionSkeleton minH="min-h-[500px]" /> }
)

const ProjectsSection = dynamic(
    () => import("./projects-section").then((m) => m.ProjectsSection),
    { ssr: false, loading: () => <SectionSkeleton minH="min-h-[600px]" /> }
)

const AchievementsSection = dynamic(
    () => import("./achievements-section").then((m) => m.AchievementsSection),
    { ssr: false, loading: () => <SectionSkeleton minH="min-h-[500px]" /> }
)

const TestimonialsSection = dynamic(
    () => import("./testimonials-section").then((m) => m.TestimonialsSection),
    { ssr: false, loading: () => <SectionSkeleton minH="min-h-[600px]" /> }
)

const ContactSection = dynamic(
    () => import("./contact-section").then((m) => m.ContactSection),
    { ssr: false, loading: () => <SectionSkeleton minH="min-h-[600px]" /> }
)

const Footer = dynamic(
    () => import("./footer").then((m) => m.Footer),
    { ssr: false, loading: () => <SectionSkeleton minH="min-h-[80px]" /> }
)

export function LazySections() {
    return (
        <>
            <AboutSection />
            <WorkProcessSection />
            <ProjectsSection />
            <AchievementsSection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
        </>
    )
}
