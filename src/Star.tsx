const Star = ({
  filled,
  width,
  height,
}: {
  filled: boolean;
  width: string;
  height: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={filled ? "#ED8A19" : "#333333b8"}
      stroke="none"
      strokeWidth="1.5"
      width={width}
      height={height}
    >
      <path d="M12 .587l3.668 7.431 8.25 1.194-5.956 5.676 1.404 8.192L12 18.896l-7.366 3.88 1.404-8.192L.684 9.212l8.25-1.194z" />
    </svg>
  );
};

export default Star;
