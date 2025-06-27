import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MobileLayout from "@/components/mobile-layout"

export default function AddListing() {
  return (
    <MobileLayout>
      <div className="p-4 border-b flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h1 className="text-xl font-bold flex-1">Add New Listing</h1>
      </div>
      
      <Tabs defaultValue="basic" className="w-full">
        <div className="border-b overflow-auto">
          <TabsList className="w-max mx-4 my-2">
            <TabsTrigger value="basic" className="px-6">Basic Info</TabsTrigger>
            <TabsTrigger value="photos" className="px-6">Photos & Media</TabsTrigger>
            <TabsTrigger value="details" className="px-6">Property Details</TabsTrigger>
            <TabsTrigger value="verification" className="px-6">Verification</TabsTrigger>
          </TabsList>
        </div>
        
        <div className="p-4 pb-20">
          <TabsContent value="basic" className="mt-0">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Listing Title</Label>
                <Input id="title" placeholder="Enter a descriptive title" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe the property in detail" 
                  className="min-h-32"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Price ($)</Label>
                  <Input id="price" type="number" placeholder="0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="property-type">Property Type</Label>
                  <Select>
                    <SelectTrigger id="property-type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                      <SelectItem value="land">Land/Plot</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Location</Label>
                <div className="space-y-2">
                  <Input placeholder="Address Line 1" />
                  <Input placeholder="Address Line 2 (Optional)" />
                  <div className="grid grid-cols-2 gap-2">
                    <Input placeholder="City" />
                    <Input placeholder="State" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Input placeholder="ZIP Code" />
                    <Input placeholder="Country" />
                  </div>
                </div>
              </div>
              
              <Button type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">Save & Continue</Button>
            </form>
          </TabsContent>
          
          <TabsContent value="photos" className="mt-0">
            <div className="space-y-4">
              <div className="border-2 border-dashed rounded-lg p-4 text-center">
                <div className="flex flex-col items-center justify-center py-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image text-muted-foreground mb-2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                  <p className="text-sm mb-2">Drag and drop photos here</p>
                  <p className="text-xs text-muted-foreground mb-4">Upload at least 5 high-quality photos</p>
                  <Button size="sm" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
                    Upload Photos
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm">Photo Requirements</Label>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Minimum 5 photos required</li>
                  <li>• First photo will be the main listing image</li>
                  <li>• Photos should be well-lit and clear</li>
                  <li>• Supported formats: JPG, PNG (max 5MB each)</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm">Add Video Tour (Optional)</Label>
                <div className="border-2 border-dashed rounded-lg p-4 text-center">
                  <div className="flex flex-col items-center justify-center py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video text-muted-foreground mb-2"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
                    <p className="text-xs text-muted-foreground mb-2">Upload a video walkthrough</p>
                    <Button size="sm" variant="outline">
                      Upload Video
                    </Button>
                  </div>
                </div>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">Save & Continue</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="details" className="mt-0">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="bedrooms">Bedrooms</Label>
                  <Input id="bedrooms" type="number" min="0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bathrooms">Bathrooms</Label>
                  <Input id="bathrooms" type="number" min="0" step="0.5" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="area">Area (sq ft)</Label>
                  <Input id="area" type="number" min="0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year-built">Year Built</Label>
                  <Input id="year-built" type="number" min="1800" max="2025" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm">Key Features</Label>
                <div className="grid grid-cols-2 gap-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="feature-pool" />
                    <Label htmlFor="feature-pool" className="text-sm">Pool</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="feature-garage" />
                    <Label htmlFor="feature-garage" className="text-sm">Garage</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="feature-waterfront" />
                    <Label htmlFor="feature-waterfront" className="text-sm">Waterfront</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="feature-view" />
                    <Label htmlFor="feature-view" className="text-sm">View</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="feature-ac" />
                    <Label htmlFor="feature-ac" className="text-sm">Air Conditioning</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="feature-fireplace" />
                    <Label htmlFor="feature-fireplace" className="text-sm">Fireplace</Label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="additional-features">Additional Features</Label>
                <Textarea
                  id="additional-features"
                  placeholder="List any additional features, separated by commas"
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">Save & Continue</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="verification" className="mt-0">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-1">Property Verification</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  RealEase requires verification of all property listings to ensure a safe and trustworthy marketplace.
                </p>
                
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 space-y-2">
                    <Label className="font-medium">Property Ownership</Label>
                    <p className="text-xs text-muted-foreground mb-2">
                      Please upload documents that prove your ownership of this property.
                    </p>
                    <div className="border-2 border-dashed rounded-lg p-3 text-center">
                      <div className="flex flex-col items-center justify-center py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text text-muted-foreground mb-1"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
                        <p className="text-xs text-muted-foreground">Upload documents</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Acceptable documents: Property deed, tax bill, mortgage statement
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4 space-y-2">
                    <Label className="font-medium">Identity Verification</Label>
                    <p className="text-xs text-muted-foreground mb-2">
                      Verify your identity to build trust with potential buyers.
                    </p>
                    <div className="border-2 border-dashed rounded-lg p-3 text-center">
                      <div className="flex flex-col items-center justify-center py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-id-card text-muted-foreground mb-1"><rect width="18" height="16" x="3" y="4" rx="2"/><circle cx="9" cy="12" r="2"/><path d="M15 12h2"/><path d="M15 8h2"/><path d="M15 16h2"/><path d="M9 16c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3Z"/></svg>
                        <p className="text-xs text-muted-foreground">Upload ID document</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Acceptable documents: Government-issued ID, passport, or driver's license
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <p className="text-sm mb-4">By submitting this listing, you agree to our:</p>
                <div className="space-y-2">
                  <div className\
