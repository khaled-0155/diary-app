import { FaLeaf, FaPaw, FaFish, FaTree, FaLaptop } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Diary() {
  const categories = [
    {
      title: "Nature Observations",
      description:
        "Record details about the environment, including weather, plant growth, and seasonal changes in nature.",
      icon: <FaLeaf className="text-4xl text-green-700 mb-4 mx-auto" />,
      path: "/diary/nature-observations",
    },
    {
      title: "Animal Sightings",
      description:
        "Keep track of the wildlife you encounter, noting species, behaviors, and locations.",
      icon: <FaPaw className="text-4xl text-green-700 mb-4 mx-auto" />,
      path: "/diary/animal-sightings",
    },
    {
      title: "Water Habitats",
      description:
        "Monitor lakes, rivers, and ponds to track the presence of fish and amphibians.",
      icon: <FaFish className="text-4xl text-green-700 mb-4 mx-auto" />,
      path: "/diary/water-habitats",
    },
    {
      title: "Birdwatching",
      description:
        "Log the birds you see, their behaviors, and migration patterns throughout the seasons.",
      icon: <FaLeaf className="text-4xl text-green-700 mb-4 mx-auto" />, // Placeholder, replace with FaBird if available
      path: "/diary/birdwatching",
    },
    {
      title: "Forest and Woodland",
      description:
        "Document trees, fungi, and the creatures that depend on woodland habitats.",
      icon: <FaTree className="text-4xl text-green-700 mb-4 mx-auto" />,
      path: "/diary/forest-and-woodland",
    },
    {
      title: "Wildlife Conservation",
      description:
        "Record efforts to protect wildlife, including habitat restoration and species protection programs.",
      icon: <FaLaptop className="text-4xl text-green-700 mb-4 mx-auto" />,
      path: "/diary/wildlife-conservation",
    },
  ];

  return (
    <section
      className="py-32 px-4 sm:px-20 bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(./assets/diary-bg.jpg)` }}
    >
      <h2 className="text-5xl  font-semibold text-center text-white mb-10">
        <span className="inline-block mr-2 text-green-700">🌿</span>
        Our Diary Services
        <span className="inline-block ml-2 text-green-700">🌿</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {categories.map((category) => (
          <Link
            key={category.title}
            to={category.path}
            className="bg-transparent bg-opacity-60 backdrop-blur-md p-6 rounded-lg border-2 border-transparent shadow-lg hover:shadow-xl hover:scale-105 hover:border-2 hover:border-green-700 transition duration-300 text-center"
          >
            {category.icon}
            <h3 className="text-lg font-bold text-white mb-4">
              {category.title}
            </h3>
            <p className="text-gray-800">{category.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
