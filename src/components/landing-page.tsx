'use client'

import Image from "next/image"
import Link from "next/link"
import { AppWindow, Github, Film, Heart, Star, Tv } from "lucide-react"

export function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flicked-YOKjbJGfKqI5R4013tL8pHsYjDXNrP.png"
            alt="Flicked Logo"
            width={40}
            height={40}
            className="rounded-xl"
          />
          <span className="text-xl font-bold">Flicked</span>
        </Link>
        <nav>
          <Link
            href="https://github.com"
            className="flex items-center space-x-2 hover:text-gray-300"
          >
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="container mx-auto flex flex-col items-center justify-center px-4 py-24 text-center">
          <h1 className="mb-8 text-5xl font-bold tracking-tighter sm:text-6xl xl:text-7xl">
            Find Your Next
            <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">
              {" "}
              Favorite
            </span>
            <br />
            Movie or Show
          </h1>
          <p className="mb-12 max-w-[600px] text-gray-400 md:text-xl">
            Get personalized recommendations, track what you watch, and discover new content with our
            intelligent suggestion engine.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link
              href="https://apps.apple.com"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-black hover:bg-gray-200"
            >
              Download for iOS
            </Link>
            <Link
              href="#features"
              className="inline-flex h-12 items-center justify-center rounded-full bg-gray-900 px-8 text-sm font-medium text-white hover:bg-gray-800"
            >
              Learn More
            </Link>
          </div>
        </section>

        <section className="relative">
          <div className="container mx-auto px-4 py-24">
            <div className="relative mx-auto max-w-6xl">
              <div className="absolute -top-6 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-red-500/20 blur-3xl" />
              <div className="relative mx-auto flex justify-center gap-8">
                <div className="relative w-full max-w-[280px]">
                  <div className="relative aspect-[9/19] overflow-hidden rounded-[2.5rem] border-[8px] border-gray-900 bg-gray-900">
                    <Image
                      src="/placeholder.svg?height=580&width=280"
                      alt="Discover Screen"
                      width={280}
                      height={580}
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -left-32 top-12 flex max-w-[200px] items-center rounded-2xl bg-[#1a1f2d] p-4 shadow-lg">
                    <Film className="mr-2 h-5 w-5 text-red-500" />
                    <p className="text-sm">Discover trending movies and shows</p>
                  </div>
                  <div className="absolute -right-20 top-48 flex max-w-[200px] items-center rounded-2xl bg-[#1a1f2d] p-4 shadow-lg">
                    <Star className="mr-2 h-5 w-5 text-red-500" />
                    <p className="text-sm">Rate and review content</p>
                  </div>
                </div>
                <div className="relative w-full max-w-[280px]">
                  <div className="relative aspect-[9/19] overflow-hidden rounded-[2.5rem] border-[8px] border-gray-900 bg-gray-900">
                    <Image
                      src="/placeholder.svg?height=580&width=280"
                      alt="Recommendations Screen"
                      width={280}
                      height={580}
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -left-20 top-32 flex max-w-[200px] items-center rounded-2xl bg-[#1a1f2d] p-4 shadow-lg">
                    <AppWindow className="mr-2 h-5 w-5 text-red-500" />
                    <p className="text-sm">Get personalized recommendations</p>
                  </div>
                  <div className="absolute -right-24 top-64 flex max-w-[200px] items-center rounded-2xl bg-[#1a1f2d] p-4 shadow-lg">
                    <Tv className="mr-2 h-5 w-5 text-red-500" />
                    <p className="text-sm">Browse TV shows and series</p>
                  </div>
                </div>
                <div className="relative w-full max-w-[280px]">
                  <div className="relative aspect-[9/19] overflow-hidden rounded-[2.5rem] border-[8px] border-gray-900 bg-gray-900">
                    <Image
                      src="/placeholder.svg?height=580&width=280"
                      alt="Watchlist Screen"
                      width={280}
                      height={580}
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -left-24 top-16 flex max-w-[200px] items-center rounded-2xl bg-[#1a1f2d] p-4 shadow-lg">
                    <Heart className="mr-2 h-5 w-5 text-red-500" />
                    <p className="text-sm">Track your watchlist easily</p>
                  </div>
                  <div className="absolute -right-32 top-44 flex max-w-[200px] items-center rounded-2xl bg-[#1a1f2d] p-4 shadow-lg">
                    <AppWindow className="mr-2 h-5 w-5 text-red-500" />
                    <p className="text-sm">Get notified about new releases</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-900">
        <div className="container mx-auto flex h-16 items-center justify-center px-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Flicked. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}