"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import MobileLayout from "@/components/mobile-layout"
import PropertyCard from "@/components/property-card"
import SearchBar from "@/components/search-bar"
import StoryCarousel from "@/components/story-carousel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  const [greeting, setGreeting] = useState("")
  const [isRefreshing, setIsRefreshing] = useState(false)

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setGreeting("Good Morning")
    else if (hour < 18) setGreeting("Good Afternoon")
    else setGreeting("Good Evening")
  }, [])

  const handleRefresh = async () => {
    setIsRefreshing(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsRefreshing(false)
  }

  // Sample data with more properties
  const featuredProperties = [
    {
      id: "1",
      title: "Luxury Modern Villa",
      location: "Beverly Hills, CA",
      price: 2750000,
      bedrooms: 5,
      bathrooms: 4,
      area: 4200,
      propertyType: "Villa",
      images: ["/images/luxury-villa.jpg", "/images/modern-penthouse.jpg", "/images/coastal-estate.jpg"],
      verifiedSeller: true,
      featured: true,
      isNew: true,
      views: 1247,
    },
    {
      id: "2",
      title: "Downtown Penthouse",
      location: "Manhattan, NY",
      price: 3250000,
      bedrooms: 3,
      bathrooms: 3,
      area: 2800,
      propertyType: "Penthouse",
      images: ["/images/modern-penthouse.jpg", "/images/city-loft.jpg", "/images/luxury-villa.jpg"],
      verifiedSeller: true,
      featured: true,
      isNew: false,
      views: 892,
    },
    {
      id: "3",
      title: "Coastal Estate",
      location: "Malibu, CA",
      price: 5500000,
      bedrooms: 6,
      bathrooms: 5,
      area: 6000,
      propertyType: "Estate",
      images: ["/images/coastal-estate.jpg", "/images/beach-house.jpg", "/images/luxury-villa.jpg"],
      verifiedSeller: true,
      featured: false,
      isNew: true,
      views: 2103,
    },
    {
      id: "4",
      title: "Mountain Retreat",
      location: "Aspen, CO",
      price: 1850000,
      bedrooms: 4,
      bathrooms: 3,
      area: 3400,
      propertyType: "Cabin",
      images: ["/images/mountain-retreat.jpg", "/images/suburban-home.jpg", "/images/modern-condo.jpg"],
      verifiedSeller: false,
      featured: false,
      isNew: false,
      views: 567,
    },
  ]

  const featuredStories = [
    {
      id: "1",
      title: "Luxury Villa",
      image: "/images/luxury-villa.jpg",
      sellerName: "Sarah Mitchell",
      sellerVerified: true,
      isLive: true,
    },
    {
      id: "2",
      title: "City Loft",
      image: "/images/city-loft.jpg",
      sellerName: "David Chen",
      sellerVerified: true,
      isLive: false,
    },
    {
      id: "3",
      title: "Beach House",
      image: "/images/beach-house.jpg",
      sellerName: "Maria Rodriguez",
      sellerVerified: true,
      isLive: true,
    },
    {
      id: "4",
      title: "Modern Condo",
      image: "/images/modern-condo.jpg",
      sellerName: "James Wilson",
      sellerVerified: true,
      isLive: false,
    },
    {
      id: "5",
      title: "Suburban Home",
      image: "/images/suburban-home.jpg",
      sellerName: "Emma Thompson",
      sellerVerified: false,
      isLive: false,
    },
  ]

  return (
    <MobileLayout>
      {/* Enhanced Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-4 text-white">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-white h-10 w-10 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-slate-900 font-bold text-lg">M</span>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-wide">MODERNACRES</h1>
              <p className="text-xs text-slate-300">{greeting}! 👋</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 relative" asChild>
              <Link href="/notifications">
                <span className="sr-only">Notifications</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bell"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
                <div className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white">3</span>
                </div>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" asChild>
              <Link href="/profile">
                <span className="sr-only">Profile</span>
                <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">U</span>
                </div>
              </Link>
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
            <p className="text-lg font-bold">1.2K+</p>
            <p className="text-xs text-slate-300">Properties</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
            <p className="text-lg font-bold">250+</p>
            <p className="text-xs text-slate-300">Verified Sellers</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
            <p className="text-lg font-bold">$2.4M</p>
            <p className="text-xs text-slate-300">Avg. Price</p>
          </div>
        </div>
      </div>

      {/* Pull to Refresh Indicator */}
      {isRefreshing && (
        <div className="bg-slate-100 p-2 text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="animate-spin h-4 w-4 border-2 border-slate-600 border-t-transparent rounded-full"></div>
            <span className="text-sm text-slate-600">Refreshing properties...</span>
          </div>
        </div>
      )}

      {/* Search Section */}
      <div className="p-4 bg-slate-50">
        <SearchBar />

        {/* Quick Filters */}
        <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
          <Badge variant="secondary" className="bg-slate-900 text-white hover:bg-slate-800 whitespace-nowrap">
            🏡 Houses
          </Badge>
          <Badge variant="outline" className="whitespace-nowrap hover:bg-slate-100">
            🏢 Apartments
          </Badge>
          <Badge variant="outline" className="whitespace-nowrap hover:bg-slate-100">
            🏞️ Land
          </Badge>
          <Badge variant="outline" className="whitespace-nowrap hover:bg-slate-100">
            💰 Under $1M
          </Badge>
          <Badge variant="outline" className="whitespace-nowrap hover:bg-slate-100">
            ✅ Verified Only
          </Badge>
        </div>
      </div>

      {/* Stories Section */}
      <div className="px-4 mb-6 bg-white">
        <div className="flex items-center justify-between mb-3 pt-4">
          <h2 className="font-semibold text-lg">Live Tours & Stories</h2>
          <Button variant="ghost" size="sm" className="text-slate-600">
            View All
          </Button>
        </div>
        <StoryCarousel stories={featuredStories} />
      </div>

      {/* Properties Section */}
      <div className="px-4 mb-4 bg-white">
        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="featured" className="text-sm">
              ⭐ Featured
            </TabsTrigger>
            <TabsTrigger value="newest" className="text-sm">
              🆕 Newest
            </TabsTrigger>
            <TabsTrigger value="nearby" className="text-sm">
              📍 Nearby
            </TabsTrigger>
          </TabsList>

          <TabsContent value="featured" className="mt-0">
            <div className="space-y-4">
              {featuredProperties
                .filter((p) => p.featured)
                .map((property, index) => (
                  <div
                    key={property.id}
                    className="animate-in slide-in-from-bottom-4"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <PropertyCard property={property} />
                  </div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="newest" className="mt-0">
            <div className="space-y-4">
              {featuredProperties
                .filter((p) => p.isNew)
                .map((property, index) => (
                  <div
                    key={property.id}
                    className="animate-in slide-in-from-bottom-4"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <PropertyCard property={property} />
                  </div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="nearby" className="mt-0">
            <div className="space-y-4">
              {featuredProperties.slice(2, 4).map((property, index) => (
                <div
                  key={property.id}
                  className="animate-in slide-in-from-bottom-4"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <PropertyCard property={property} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-20 right-4 z-10">
        <Button
          size="lg"
          className="h-14 w-14 rounded-full bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
          asChild
        >
          <Link href="/add-listing">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-plus"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            <span className="sr-only">Add Listing</span>
          </Link>
        </Button>
      </div>

      {/* Enhanced Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg">
        <div className="flex justify-around py-2">
          <Button variant="ghost" className="flex flex-col items-center h-16 py-2 text-slate-900" asChild>
            <Link href="/">
              <div className="bg-slate-900 rounded-lg p-1 mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-home"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <span className="text-xs font-medium">Home</span>
            </Link>
          </Button>

          <Button variant="ghost" className="flex flex-col items-center h-16 py-2 text-slate-600" asChild>
            <Link href="/search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search mb-1"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <span className="text-xs">Explore</span>
            </Link>
          </Button>

          <Button variant="ghost" className="flex flex-col items-center h-16 py-2 text-slate-600 relative" asChild>
            <Link href="/messages">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-message-square mb-1"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <div className="absolute top-2 right-4 h-2 w-2 bg-red-500 rounded-full"></div>
              <span className="text-xs">Messages</span>
            </Link>
          </Button>

          <Button variant="ghost" className="flex flex-col items-center h-16 py-2 text-slate-600" asChild>
            <Link href="/favorites">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart mb-1"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              <span className="text-xs">Saved</span>
            </Link>
          </Button>
        </div>
      </div>
    </MobileLayout>
  )
}
