import React, { useState, useEffect } from 'react';
import './RatingsAndReviews.css';

const RatingsAndReviews = ({ managerId }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 0, comment: '' });
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    // Fetch reviews for the specified manager
    // This is a mock function - replace with actual API call
    fetchReviews(managerId);
  }, [managerId]);

  const fetchReviews = (id) => {
    // Mock data - replace with actual API call
    const mockReviews = [
      { id: 1, rating: 4, comment: "Great service!", date: "2024-08-01" },
      { id: 2, rating: 5, comment: "Excellent communication and organization.", date: "2024-07-28" },
      { id: 3, rating: 3, comment: "Good, but could improve on timeliness.", date: "2024-07-15" },
    ];
    setReviews(mockReviews);
    calculateAverageRating(mockReviews);
  };

  const calculateAverageRating = (reviewsData) => {
    const total = reviewsData.reduce((sum, review) => sum + review.rating, 0);
    setAverageRating((total / reviewsData.length).toFixed(1));
  };

  const handleRatingChange = (rating) => {
    setNewReview(prev => ({ ...prev, rating }));
  };

  const handleCommentChange = (e) => {
    setNewReview(prev => ({ ...prev, comment: e.target.value }));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (newReview.rating === 0) {
      alert("Please select a rating.");
      return;
    }
    // Here you would typically send the new review to the backend
    const reviewToAdd = {
      id: reviews.length + 1,
      ...newReview,
      date: new Date().toISOString().split('T')[0]
    };
    setReviews(prev => [...prev, reviewToAdd]);
    calculateAverageRating([...reviews, reviewToAdd]);
    setNewReview({ rating: 0, comment: '' });
  };

  return (
    <div className="ratings-and-reviews">
      <h2>Ratings and Reviews</h2>
      <div className="average-rating">
        <span className="star">★</span>
        <span>{averageRating} / 5</span>
        <span>({reviews.length} reviews)</span>
      </div>

      <div className="review-list">
        {reviews.map(review => (
          <div key={review.id} className="review">
            <div className="review-header">
              <span className="rating">
                {[1, 2, 3, 4, 5].map(star => (
                  <span key={star} className={star <= review.rating ? 'star filled' : 'star'}>
                    ★
                  </span>
                ))}
              </span>
              <span className="date">{review.date}</span>
            </div>
            <p className="comment">{review.comment}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmitReview} className="review-form">
        <h3>Leave a Review</h3>
        <div className="rating-input">
          {[1, 2, 3, 4, 5].map(star => (
            <span
              key={star}
              className={star <= newReview.rating ? 'star filled' : 'star'}
              onClick={() => handleRatingChange(star)}
            >
              ★
            </span>
          ))}
        </div>
        <textarea
          value={newReview.comment}
          onChange={handleCommentChange}
          placeholder="Write your review here..."
          required
        />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default RatingsAndReviews;