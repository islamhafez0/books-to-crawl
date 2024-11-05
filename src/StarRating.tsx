import Star from "./Star";

const StarRating = ({ rating }: { rating: string }) => {
  const ratingValue =
    {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
    }[rating?.toLowerCase()] || 0;

  const stars = Array.from({ length: 5 }, (_, index) => ratingValue < index);

  return (
    <div className="ratings">
      {stars.map((filled, index) => (
        <Star key={index} filled={filled} height="20" width="20" />
      ))}
    </div>
  );
};

export default StarRating;
