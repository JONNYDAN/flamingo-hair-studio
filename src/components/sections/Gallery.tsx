import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Kiểu tóc nữ xoăn nhẹ",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Kiểu tóc nam hiện đại",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1554519515-242161756769?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Nhuộm tóc thời trang",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Tóc ngắn cá tính",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Tóc dài óng mượt",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1617896848219-5ec29509f636?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Kiểu tóc cô dâu",
  },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          ref={ref}
        >
          <p className="text-accent tracking-[0.3em] uppercase text-sm mb-4 font-body">
            Bộ Sưu Tập
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Tác Phẩm Của Chúng Tôi
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-500 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-body tracking-wider uppercase text-sm">
                    Xem chi tiết
                  </span>
                </div>
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
