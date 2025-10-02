"use client"

import { useState } from "react"
import { Grid3X3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageGalleryModal } from "@/components/projects/image-gallery-modal"

interface ProjectImageGridProps {
  projectImages: string[]
  projectTitle: string
}

export function ProjectImageGrid({ projectImages, projectTitle }: ProjectImageGridProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  // Use the first three images for display
  const displayImages = projectImages.slice(0, 3)

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index)
    setIsGalleryOpen(true)
  }

  return (
    <div className="relative mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-auto lg:h-[500px]">
        {/* Main Large Image - Takes more width */}
        <div
          className="lg:col-span-3 relative overflow-hidden rounded-lg border border-border cursor-pointer group h-[400px] lg:h-full"
          onClick={() => handleImageClick(0)}
        >
          <img
            src={displayImages[0] || "/placeholder.svg"}
            alt={projectTitle}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Side Images Grid - Hidden on mobile */}
        <div className="hidden lg:flex flex-col gap-4">
          {displayImages.slice(1, 3).map((image, index) => (
            <div
              key={index}
              className="flex-1 relative overflow-hidden rounded-lg border border-border cursor-pointer group"
              onClick={() => handleImageClick(index + 1)}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${projectTitle} - View ${index + 2}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Show All Photos Button - Bottom Right */}
      {projectImages.length > 3 && (
        <Button
          variant="secondary"
          onClick={() => setIsGalleryOpen(true)}
          className="absolute bottom-4 right-4 shadow-lg backdrop-blur-sm bg-background/95 hover:bg-background border border-border"
        >
          Show more
        </Button>
      )}

      {/* Image Gallery Modal */}
        <ImageGalleryModal
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          images={projectImages}
          projectTitle={projectTitle}
          selectedImageIndex={selectedImageIndex}
        />
    </div>
  )
}
