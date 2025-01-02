import { AppProvider } from "./app-providers";
import "./globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />;
      <Toaster position="top-right" />
    </AppProvider>
  );
}
