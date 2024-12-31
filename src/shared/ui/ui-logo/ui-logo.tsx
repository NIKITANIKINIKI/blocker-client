import clsx from "clsx";

type UiLogoProps = {
  className?: string;
  logoContent?: string;
};

export function UiLogo({ className, logoContent }: UiLogoProps) {
  return (
    <div className={clsx(className, "flex items-center gap-2 text-xl")}>
      <Bolt className="w-12 h-12" />
      {logoContent}
    </div>
  );
}

export const Bolt = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 64 64"
    >
      <path
        fill="currentColor"
        d="M23.8 62.3c-1.2 0-2.3-.5-3.1-1.4c-1.5-1.7-1-3.7-.8-4.6l5.3-22.7H14.9c-.7 0-2.1 0-3.3-.9c-2-1.6-1.4-4.3-1.3-5.2L14.5 7c.2-1.1.6-2.8 2.1-4C18.3 1.7 20 1.7 21 1.8h13.7c1.2 0 3.7 0 5.2 1.9s1 4.4.8 5.6L39.5 15l8.8.1c3.5 0 4.8 1.6 5.2 2.9c.7 2-.5 3.8-1 4.5L28 59.4c-.5.7-1.2 1.8-2.5 2.5c-.5.2-1 .4-1.5.4c0-.1-.1 0-.2 0m-9-33.3h13.3q1.05 0 1.8.9c.4.5.6 1.2.4 1.9l-5.8 24.8L48.7 20c.1-.1.2-.3.2-.4h-.8l-11.5-.1c-.7 0-1.3-.3-1.7-.8s-.6-1.2-.4-1.9l1.8-8.5c.3-1.4.2-1.7.1-1.8s-.4-.2-1.8-.2H21c-.8 0-1.3 0-1.4.1s-.3.6-.5 1.4l-4.2 20.5c0 .3-.1.5-.1.7"
      />
    </svg>
  );
};