import React, { useState, useEffect } from "react";
import { reviewsData } from "../data/dummyData";

export default function Reviews() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [filterStars, setFilterStars] = useState(null);

  useEffect(() => {
    if (!showAllReviews) {
      const interval = setInterval(() => {
        setCurrentReviewIndex(
          (prevIndex) => (prevIndex + 1) % reviewsData.length
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [showAllReviews]);

  const filteredReviews = filterStars
    ? reviewsData.filter((review) => review.stars === filterStars)
    : reviewsData;

  const handleBackToFeatured = () => {
    setShowAllReviews(false);
    setFilterStars(null);
    setCurrentReviewIndex(0);
  };

  return (
    <div className="pt-30 pb-10 bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-5xl pb-8 font-bold text-gray-800 flex items-center mb-4">
        <span className="mr-2">🌱</span> What Our Users Are Saying
      </h2>

      {showAllReviews ? (
        <>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <button
              onClick={() => setFilterStars(null)}
              className={`px-4 py-2 rounded ${
                filterStars === null
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              All
            </button>
            {[5, 4, 3, 2, 1].map((star) => (
              <button
                key={star}
                onClick={() => setFilterStars(star)}
                className={`px-4 py-2 rounded ${
                  filterStars === star
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {star} Stars
              </button>
            ))}
          </div>

          {filteredReviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md mb-4 w-full max-w-2xl"
            >
              <h3 className="text-lg font-semibold text-center">
                {review.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{review.text}</p>
              <div className="flex justify-center mt-2">
                {Array(review.stars)
                  .fill()
                  .map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
              </div>
              <p className="text-gray-500 text-sm text-center mt-2">
                By {review.author} on {review.date}
              </p>
            </div>
          ))}

          <button
            onClick={handleBackToFeatured}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Back to Featured Reviews
          </button>
        </>
      ) : (
        <>
          <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-4xl">
            <div className="flex justify-center items-center mb-2">
              <span className="text-lg font-semibold mr-2">
                Average Rating: 4.0
              </span>
              <span className="text-yellow-400">★</span>
            </div>
            <h3 className="text-lg font-semibold text-center">
              Featured 5-Star Review
            </h3>
            <h4 className="text-md font-medium text-center mt-2">
              {reviewsData[currentReviewIndex].title}
            </h4>
            <p className="text-gray-600 text-sm mt-2">
              {reviewsData[currentReviewIndex].text}
            </p>
            <div className="flex justify-center mt-2">
              {Array(reviewsData[currentReviewIndex].stars)
                .fill()
                .map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
            </div>
            <p className="text-gray-500 text-sm text-center mt-2">
              By {reviewsData[currentReviewIndex].author} on{" "}
              {reviewsData[currentReviewIndex].date}
            </p>
          </div>

          <button
            onClick={() => setShowAllReviews(true)}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            View All Reviews
          </button>
        </>
      )}
    </div>
  );
}
