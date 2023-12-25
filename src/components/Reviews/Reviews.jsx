import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from 'service/service';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getData() {
      const reviews = await fetchData(movieId);
      setReviews(reviews);
    }
    getData();
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <div key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </div>
        ))
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;
