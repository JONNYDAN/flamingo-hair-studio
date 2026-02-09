import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Soft curls",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Modern men's cut",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1554519515-242161756769?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Fashion color",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Chic short hair",
  },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-32 md:py-40 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
          ref={ref}
        >
          <p className="font-body text-xs uppercase tracking-[0.35em] text-muted-foreground mb-6">
            Gallery
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Style portfolio
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 border-0 bg-transparent">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery preview"
              className="w-full h-auto max-h-[90vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
