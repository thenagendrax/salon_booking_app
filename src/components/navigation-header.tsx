"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface NavigationHeaderProps {
  user?: { email: string; fullName?: string } | null
  showLogout?: boolean
}

export default function NavigationHeader({ user, showLogout = true }: NavigationHeaderProps) {
  const router = useRouter()

  const handleLogout = async () => {
    // Logout logic here
    router.push("/")
  }

  return (
    <header className="border-b border-purple-200 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 z-10">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-purple-600 dark:text-purple-400">
          ✨ GlamSpace
        </Link>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <div className="hidden sm:flex flex-col text-right">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{user.fullName || "User"}</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">{user.email}</p>
              </div>
              <Link href="/profile">
                <Button className="bg-purple-600 hover:bg-purple-700">Profile</Button>
              </Link>
              {showLogout && (
                <Button variant="outline" onClick={handleLogout}>
                  Logout
                </Button>
              )}
            </>
          ) : (
            <>
              <Link href="/auth/login">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="bg-purple-600 hover:bg-purple-700">Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}
