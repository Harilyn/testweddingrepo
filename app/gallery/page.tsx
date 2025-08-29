import Image from "next/image"
import { Navigation } from "@/components/navigation"

export default function GalleryPage() {
  // Gallery images with new photos first, then older ones
  const galleryImages = [
    { id: 1, src: "/images/gallery-new-1.jpg", alt: "Larry and Eastina - Beautiful moment" },
    { id: 2, src: "/images/gallery-new-2.jpg", alt: "Larry and Eastina - Special day" },
    { id: 3, src: "/images/gallery-new-3.jpg", alt: "Larry and Eastina - Together" },
    { id: 4, src: "/images/gallery-new-4.jpg", alt: "Larry and Eastina - Celebration" },
    { id: 5, src: "/images/gallery-new-5.jpg", alt: "Larry and Eastina - Happy moments" },
    { id: 6, src: "/images/gallery-new-6.jpg", alt: "Larry and Eastina - Love story" },
    { id: 7, src: "/images/gallery-new-7.jpg", alt: "Larry and Eastina - Wedding preparations" },
    { id: 8, src: "/images/gallery-new-8.jpg", alt: "Larry and Eastina - Romantic moment" },
    { id: 9, src: "/images/gallery-1.png", alt: "Larry and Eastina - Earlier memories" },
    { id: 10, src: "/images/gallery-2.png", alt: "Larry and Eastina - Earlier memories" },
    { id: 11, src: "/images/gallery-3.png", alt: "Larry and Eastina - Earlier memories" },
    { id: 12, src: "/images/gallery-4.png", alt: "Larry and Eastina - Earlier memories" },
    { id: 13, src: "/images/gallery-5.png", alt: "Larry and Eastina - Earlier memories" },
    { id: 14, src: "/images/gallery-6.png", alt: "Larry and Eastina - Earlier memories" },
    { id: 15, src: "/images/gallery-7.png", alt: "Larry and Eastina - Earlier memories" },
    { id: 16, src: "/images/gallery-8.png", alt: "Larry and Eastina - Earlier memories" },
    { id: 17, src: "/images/couple-main.png", alt: "Larry and Eastina - Main photo" },
    { id: 18, src: "/images/gallery-10.png", alt: "Larry and Eastina - Earlier memories" },
    { id: 19, src: "/images/gallery-11.png", alt: "Larry and Eastina - Earlier memories" },
    { id: 20, src: "/images/gallery-12.png", alt: "Larry and Eastina - Earlier memories" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1 pt-16">
        <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
          {/* Decorative flowers */}
          <div className="absolute top-0 left-0 w-64 h-64 opacity-20">
            <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 rotate-90 opacity-20">
            <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
          </div>
          <div className="absolute bottom-0 left-0 w-64 h-64 -rotate-90 opacity-20">
            <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 w-64 h-64 rotate-180 opacity-20">
            <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <h1 className="mb-4 text-center font-serif text-4xl font-light text-sage-800 md:text-5xl">Our Gallery</h1>
            <p className="mb-12 text-center text-sage-600 italic">Some memories we've made over time</p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {galleryImages.map((image) => (
                <div key={image.id} className="relative aspect-square overflow-hidden rounded-lg">
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-sage-800 py-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10">
          <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="mb-4 font-serif text-3xl font-light">Larry & Eastina</h2>
          <p className="mb-4">October 17, 2025 • Aberdeen Water Taxi, Aberdeen Freetown</p>
        </div>
      </footer>
    </div>
  )
}
