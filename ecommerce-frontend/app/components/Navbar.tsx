import Link from "next/link"

interface NavMenu {
  [key: string]: string;
}

const navMenu: NavMenu = {
  Home: "/",
  Smartphones: "/smartphones",
  Laptops: "/laptops",
  Watches: "/watches",
};

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800/60">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center gap-4">
          {/* Logo Section */}
          <a href="/" className="flex items-center gap-2 shrink-0 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 group-hover:bg-red-500 transition-colors">
              <div className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
              T3ch<span className="text-red-500">World</span>
            </span>
          </a>

            <nav className="hidden md:flex items-center gap-1 ml-4" aria-label="Primary">
            {Object.entries(navMenu).map(([label, path]) => (
              <a
                key={path}
                href={path}
                className="px-3 py-2 text-sm font-medium rounded-md transition-colors text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2" />
        </div>
      </div>
    </header>
  );
}