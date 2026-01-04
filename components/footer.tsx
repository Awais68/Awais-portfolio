"use client"



export function Footer() {
    return (
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center">
                    <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2 flex-wrap">
                        <span>© {new Date().getFullYear()} Awais Portfolio.</span>
                        <span className="flex items-center gap-1">
                            Made By Awais Niaz.
                        </span>
                    </p>

                </div>
            </div>
        </footer>
    )
}
