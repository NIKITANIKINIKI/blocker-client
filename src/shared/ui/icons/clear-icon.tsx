export function ClearIcon({ className, ...props }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m16 16l-4-4m0 0L8 8m4 4l4-4m-4 4l-4 4"
      />
    </svg>
  );
}
