import { FaCalendarAlt } from "react-icons/fa";

const posts = [
  {
    title: "Birdwatching At The Lake",
    date: "February 3, 2025",
    image: "/assets/post-2.jpg",
    description:
      "Birdwatching at the Lake – Lake Windermere, England Today, I was fortunate to spot a pair of vibrant kingfishers near the shores of Lake Windermere in the Lake District, England. Their iridescent blue and orange feathers shimmered under the sunlight as they swiftly darted across the water, diving with precision to catch fish. It was mesmerizing to watch these agile birds in their natural habitat, effortlessly gliding above the calm lake before perching on an overhanging branch. The peaceful surroundings, with the gentle ripples of the water and the distant calls of other waterfowl, made this a truly special wildlife encounter.",
  },
  {
    title: "Forest Walk With Deer Sighting",
    date: "October 20, 2025",
    image: "/assets/post-5.jpg",
    description:
      "While walking through the New Forest National Park in southern England, I encountered a family of deer grazing in a quiet clearing. It was a serene moment watching them move gracefully between the towering oak and beech trees, their reddish-brown coats blending perfectly with the autumn foliage. The air was crisp, and the soft rustling of leaves accompanied their gentle steps. The tranquil beauty of the forest made this encounter feel truly special, a rare and calming glimpse into the quiet life of these majestic creatures.",
  },
  {
    title: "Sunset Stroll With A Zebra Herd",
    date: "February 22, 2025",
    image: "/assets/post-6.webp",
    description:
      "As the sun began to set over the African plains, a herd of zebras gathered near a watering hole, their striped coats glowing in the golden light. The soft murmurs of flowing water mixed with the distant calls of birds, creating a peaceful melody across the vast landscape. One zebra, a young foal, playfully trotted beside its mother, kicking up small clouds of dust as it moved. The others stood alert, ears twitching at the faintest sound of movement in the distance. In that moment, the serenity of the wild felt almost tangible—a fleeting yet unforgettable glimpse into the untamed beauty of nature.",
  },
  {
    title: "Exploring The Wildlife Trail",
    date: "January 30, 2025",
    image: "/assets/post-7.jpg",
    description:
      "While trekking through the Cairngorms National Park in Scotland, I spotted a majestic eagle soaring high above the rugged landscape. Its broad wings effortlessly cut through the crisp mountain air as it scanned the terrain below. The sight was breathtaking, a true display of power and grace against the backdrop of rolling hills. Along the trail, the land was teeming with life—vibrant heather covered the slopes, and the distant call of songbirds echoed through the valley. The panoramic views of the surrounding hills made the journey even more rewarding, a perfect reminder of the wild beauty that thrives in this untouched landscape.",
  },
  {
    title: "Majestic Lion Sighting",
    date: "March 24, 2025",
    image: "/assets/post-4.jpg",
    description:
      "While on a safari in the Serengeti National Park, Tanzania, I had the rare opportunity to witness a lion resting beneath the shade of an acacia tree. The king of the jungle lay calmly, his golden mane catching the warm afternoon sunlight. Though at ease, there was an undeniable power in his presence—his piercing gaze surveying the vast savanna, ever watchful. The occasional flick of his tail and slow rise and fall of his chest were the only signs of movement, a testament to the effortless dominance of this magnificent creature in its natural habitat. It was a truly humbling experience to observe such raw beauty and strength up close.",
  },
  {
    title: "Elephants By The River",
    date: "May 2, 2025",
    image: "/assets/post-3.jpg",
    description:
      "A herd of elephants gathered along the banks of the Chobe River in Botswana, their massive silhouettes reflecting in the shimmering water. The matriarch led the way, her movements slow and deliberate as the younger calves splashed playfully nearby. Occasional trumpets echoed through the air, blending with the soft rustling of the tall grass. Some elephants sprayed themselves with water, cooling off under the golden afternoon sun, while others used their trunks to forage along the river’s edge. As the sun began to set, casting a warm glow over the landscape, the herd slowly disappeared into the dense bush, leaving behind only ripples in the water and a sense of quiet wonder.",
  },
];

export default function Post() {
  return (
    <section className="py-12 pt-30 px-4 bg-white">
      <h2 className="text-5xl font-semibold text-center text-[#1F3B08] mb-10">
        <span className="inline-block mr-2 text-green-700">🌿</span>
        Our Latest Wildlife Sightings
        <span className="inline-block ml-2 text-green-700">🌿</span>
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-8xl mx-auto">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 flex flex-col"
          >
            <img
              src={post.image}
              alt={post.title}
              className="rounded-md w-full h-48 object-cover mb-4"
            />
            <div className="flex items-center text-sm text-red-500 mb-2">
              <FaCalendarAlt className="mr-1" />
              {post.date}
            </div>
            <h3 className="text-md font-bold text-[#1F3B08] mb-2">
              {post.title}
            </h3>
            <p className="text-gray-700 text-sm">{post.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
