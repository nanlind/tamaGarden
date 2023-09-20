export const DogIcon = ({
  size,
  color = "white",
}: {
  size: number;
  color?: string;
}) => {
  const halfSize = size / 2;

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill={color}
      >
        <circle className="head" r={halfSize} cx={halfSize} cy={halfSize} />
      </svg>
    </div>
  );
};
