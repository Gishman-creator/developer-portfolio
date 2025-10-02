"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface ImageGalleryModalProps {
  isOpen: boolean
  onClose: () => void
  images: string[]
  projectTitle: string
  selectedImageIndex: number // Added prop to receive the initial index
}

export function ImageGalleryModal({ isOpen, onClose, images, projectTitle, selectedImageIndex }: ImageGalleryModalProps) {
  // Initialize currentIndex with the selectedImageIndex from props
  const [currentIndex, setCurrentIndex] = useState(selectedImageIndex)

  // Effect to update currentIndex if selectedImageIndex prop changes (e.g., when modal re-opens)
  // This ensures the modal opens to the correct image if the parent component changes the selection
  // while the modal is closed and then re-opens it.
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(selectedImageIndex)
    }
  }, [isOpen, selectedImageIndex])


  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent event bubbling
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent event bubbling
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // Handle clicks on the dialog background to prevent unintended navigation
  const handleBackgroundClick = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent clicks on the background from triggering navigation
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="min-h-[100vh] min-w-[100vw] flex flex-col p-0 bg-transparent shadow-lg backdrop-blur-sm border-none [&>button]:hidden"
        onClick={handleBackgroundClick}
      >
        {/* Main content area */}
        <div className="flex-1 flex flex-col pt-0 pb-4 relative">
          {/* Header */}
          <div
            className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 pt-4 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-50"
            onClick={handleBackgroundClick}
          >
            <h3 className="text-lg font-semibold truncate flex-1">
              {projectTitle} - Gallery
            </h3>
            <div className="flex items-center gap-2">
              <DialogClose asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-10 w-10 p-0 bg-transparent hover:bg-white/20 hover:text-white"
                  title="Close"
                >
                  <X className="w-4 h-4" />
                </Button>
              </DialogClose>
            </div>
          </div>
          {/* Main Image container */}
          <div
            className="flex-1 relative flex items-center justify-center mb-4"
            onClick={onClose} // Ensure close button works
          >
            {/* Main Image */}
            <img
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`${projectTitle} - Image ${currentIndex + 1}`}
              className="w-auto min-h-[90%] object-contain"
              onClick={(e) => e.stopPropagation()} // Prevent clicks on image from bubbling
            />

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <Button
                  variant="outline"
                  className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 border-none rounded-full hover:text-white hover:bg-white/40 h-16 w-16"
                  onClick={prevImage}
                >
                  <ChevronLeft className="w-14 h-14" style={{ width: '32px', height: '32px' }} />
                </Button>
                <Button
                  variant="outline"
                  className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 border-none rounded-full hover:text-white hover:bg-white/40 h-16 w-16"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-14 h-14" style={{ width: '32px', height: '32px' }} />
                </Button>
              </>
            )}
          </div>

          {/* Thumbnail Strip */}
          {images.length > 1 && (
            <div
              className="flex gap-2 overflow-x-auto justify-start px-2 scrollbar-hide"
              style={{
                scrollbarWidth: 'none', /* Firefox */
                msOverflowStyle: 'none', /* IE and Edge */
              }}
              onClick={onClose}
            >
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentIndex(index)
                  }}
                  className={`flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 transition-all ${index === currentIndex
                      ? "border-primary"
                      : "border-transparent hover:border-muted-foreground"
                    }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
