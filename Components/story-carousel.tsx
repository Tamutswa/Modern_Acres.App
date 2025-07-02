import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface Story {
  id: string
  title: string
  image: string
  sellerName: string
  sellerVerified: boolean
  isLive?: boolean
}

interface StoryCarouselProps {
  stories: Story[]
}

export default function StoryCarousel({ stories }: StoryCarouselProps) {
  return (
    <div className="overflow-auto">
      <div className="flex gap-4 w-max">
        {stories.map((story, index) => (
          <Link
            key={story.id}
            href={`/property/${story.id}`}
            className="flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            <div
              className={cn(
                "relative h-16 w-16 rounded-full border-3 mb-2 overflow-hidden transition-all duration-300",
                story.sellerVerified
                  ? story.isLive
                    ? "border-red-500 shadow-lg shadow-red-200"
                    : "border-emerald-500 shadow-lg shadow-emerald-200"
                  : "border-slate-300",
              )}
            >
              <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />

              {/* Remove the pulsing animation ring */}

              {/* Verification Badge */}
              {story.sellerVerified && (
                <div className="absolute -bottom-1 right-0 bg-white rounded-full p-1 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shield-check"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
              )}

              {/* Live Badge - cleaner design */}
              {story.isLive && (
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-medium shadow-lg">
                  LIVE
                </div>
              )}
            </div>

            <div className="text-center">
              <span className="text-xs font-medium truncate max-w-16 block">{story.title}</span>
              <span className="text-xs text-slate-500 truncate max-w-16 block">{story.sellerName}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
