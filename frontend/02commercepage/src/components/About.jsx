import { motion } from "framer-motion";

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="py-24 bg-blue-50" id="about">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xs uppercase tracking-widest mb-3">
            SPECIALISTS IN QUALITY
          </h2>
          <h1 className="text-7xl md:text-8xl font-normal mb-6">OUR STORY</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            className="aspect-video overflow-hidden rounded-sm"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <img
              src="https://res.cloudinary.com/dav7tzdzv/image/upload/v1740051604/pexels-photo-1060803_agkhig.jpg"
              alt="Argentinian landscape"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="text-3xl mb-6">Our Heritage</h3>
            <p className="text-gray-700 mb-4">
              Founded in 2010, our journey began with a passion for bringing the
              finest products from Argentina to the global market. We travel the
              countryside, from the vineyards of Mendoza to the leather
              workshops of Buenos Aires, to bring you authentic craftsmanship.
            </p>
            <p className="text-gray-700">
              Each product tells a story of generations of expertise, combining
              traditional techniques with modern sensibilities.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {aboutFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-sm"
              variants={fadeIn}
            >
              <div className="w-full h-32 md:h-40 mb-6">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <a
            href="#Header"
            className="inline-block border-b-2 border-black pb-1 hover:border-gray-500 transition-colors"
          >
            PATAGONIA
          </a>
        </motion.div>
      </div>
    </div>
  );
};

const aboutFeatures = [
  {
    icon: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1740051799/guanaco-lama-guanicoe-torres-del-paine-national-park_181624-49460_q1aeh0.jpg",
    title: "QUALITY ASSURANCE",
    description:
      "Every product undergoes rigorous quality checks to ensure it meets our exacting standards before reaching your hands.",
  },
  {
    icon: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1740051377/young-woman-cutting-parts-plant-close-up_23-2148509889_x5bunf.jpg",
    title: "SUSTAINABILITY",
    description:
      "We work with producers who prioritize environmental responsibility and ethical practices in their craft.",
  },
  {
    icon: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1740051776/washington-monument-reflected-tidal-basin-framed-by-cherry-blossoms_181624-6437_mmxdps.jpg",
    title: "AUTHENTICITY",
    description:
      "Each item comes with documentation of origin, verifying its authentic Argentinian craftsmanship and heritage.",
  },
];

export default About;
