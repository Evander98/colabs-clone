function BorderShape({ size, fill, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size ?? 24}
      width={size ?? 24}
      viewBox="0 0 100 100"
      {...props}
    >
      <path
        d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
        fill={fill ?? "currentColor"}
      ></path>
    </svg>
  );
}

export default BorderShape;
