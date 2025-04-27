import { FaLink } from "react-icons/fa";

export default function Credits() {
  return (
    <section
      className="py-32 px-20 bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(/assets/credits-bg.jpg)` }}
    >
      <h2 className="text-5xl  font-semibold text-center text-white mb-10">
        <span className="inline-block mr-2 text-green-700">🌿</span>
        Credits & References
        <span className="inline-block ml-2 text-green-700">🌿</span>
      </h2>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
        <div className="bg-transparent bg-opacity-60 backdrop-blur-md bg-opacity-60 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Created By</h3>
          <p className="text-gray-800 text-2xl">Lora Safar W22074249</p>
        </div>

        <div className="bg-transparent bg-opacity-60 backdrop-blur-md bg-opacity-60 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            List of Used AI Tools
          </h3>
          <ul className="text-gray-800 flex flex-col items-start text-xl">
            <li className="mb-2">
              <FaLink className="inline-block mr-2" />
              <a href="https://ChatGPT.com/" className="hover:underline">
                ChatGPT
              </a>
            </li>
            <li className="mb-2">
              <FaLink className="inline-block mr-2" />
              <a href="https://www.Deepseek.com/" className="hover:underline">
                Deep Seek
              </a>
            </li>
            <li>
              <FaLink className="inline-block mr-2" />
              <a href="https://Gemini.Google.com/" className="hover:underline">
                Gemini
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-transparent bg-opacity-60 backdrop-blur-md bg-opacity-60 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Images Sources</h3>
          <ul className="text-gray-800 text-xl flex flex-col items-start">
            <li>
              <FaLink className="inline-block mr-2" />
              <a
                href="https://Animals.Net/Wp-Content/Uploads/2018/08/Zebra-1.Jpg"
                className="hover:underline"
              >
                Zebra Image
              </a>
            </li>
            <li>
              <FaLink className="inline-block mr-2" />
              <a
                href="https://Wallpapers.Com/Images/Hd/Pairof-Kingfishers-Perched-On-Branch"
                className="hover:underline"
              >
                Kingfisher Image
              </a>
            </li>
            <li>
              <FaLink className="inline-block mr-2" />
              <a
                href="https://S2.Best-Wallpaper.Net/Wallpaper/1920x1440/1309/Summer-Nature-Deer"
                className="hover:underline"
              >
                Deer Image
              </a>
            </li>
            <li>
              <FaLink className="inline-block mr-2" />
              <a
                href="https://Wallup.Net/Wp-Content/Uploads/2016/01/203782-Animals-Nature-Wildlife-Eagle"
                className="hover:underline"
              >
                Bald Eagle Image
              </a>
            </li>
            <li>
              <FaLink className="inline-block mr-2" />
              <a
                href="https://Images.Wallpapersden.Com/Image/Download/Face-Eyes-Lion"
                className="hover:underline"
              >
                Lion Image
              </a>
            </li>
            <li>
              <FaLink className="inline-block mr-2" />
              <a
                href="https://Images.Fineartamerica.Com/Images/Artworkimages/Medium/1/White-Tail-Deer-Fawns"
                className="hover:underline"
              >
                Deer Fawn Image
              </a>
            </li>
            <li>
              <FaLink className="inline-block mr-2" />
              <a
                href="https://Www.Micato.Com/Wp-Content/Uploads/2018/09/Meet-An-Elephant"
                className="hover:underline"
              >
                Elephant Image
              </a>
            </li>
            <li>
              <FaLink className="inline-block mr-2" />
              <a
                href="https://Img.Freepik.Com/Premium-Photo/Surprised-Owl-Cautiously-Peeks-Around-Corner-Against-Green-Background"
                className="hover:underline"
              >
                Owl Image
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
