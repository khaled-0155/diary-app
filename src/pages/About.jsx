import { FaUsers, FaTree, FaPaw } from "react-icons/fa";

export default function About() {
  return (
    <section className="pb-12 pt-30 px-4 bg-white text-center flex flex-col items-center">
      <h2 className="pb-12 text-xl md:text-5xl font-semibold text-[#1F3B08] mb-10">
        <span className="inline-block mr-2 text-green-700">🌿</span>
        Discover Beyond Wildlife
        <span className="inline-block ml-2 text-green-700">🌿</span>
      </h2>

      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 text-left">
        <img
          src="/assets/about-image.png"
          alt="Beyond Wildlife"
          className=" max-w-92 rounded shadow"
        />

        <div className="flex-1">
          <h3 className="text-lg font-bold mb-4">
            Why Keep A Beyond Wildlife Diary?
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Documenting wildlife isn’t just about recording what you see—it’s
            about deepening your connection with nature. With Beyond Wildlife
            Diary, you can capture your experiences across various environments
            and activities such as nature observations, animal sightings, water
            habitats, and more! Every entry helps you build a deeper
            understanding of the world around you, turning your wildlife
            experiences into a meaningful journey!
          </p>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full px-4">
        <div
          className="bg-white rounded-xl p-6 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          style={{
            border: "1px solid rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(11px)",
            boxShadow: "0 20px 50px rgba(40, 113, 85, 0.2)",
          }}
        >
          <FaUsers className="text-[#D0E7A3] text-4xl mx-auto mb-4" />
          <p className="font-bold text-2xl text-gray-800">1000+</p>
          <p className="text-gray-500 text-sm mt-1">Users</p>
        </div>
        <div
          className="bg-white rounded-xl p-6 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          style={{
            border: "1px solid rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(11px)",
            boxShadow: "0 20px 50px rgba(40, 113, 85, 0.2)",
          }}
        >
          <FaTree className="text-[#D0E7A3] text-4xl mx-auto mb-4" />
          <p className="font-bold text-2xl text-gray-800">700+</p>
          <p className="text-gray-500 text-sm mt-1">Trees Planted</p>
        </div>
        <div
          className="bg-white rounded-xl p-6 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          style={{
            border: "1px solid rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(11px)",
            boxShadow: "0 20px 50px rgba(40, 113, 85, 0.2)",
          }}
        >
          <FaPaw className="text-[#D0E7A3] text-4xl mx-auto mb-4" />
          <p className="font-bold text-2xl text-gray-800">500+</p>
          <p className="text-gray-500 text-sm mt-1">Animals Saved</p>
        </div>
      </div>
    </section>
  );
}
