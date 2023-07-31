import type { AppProps } from "next/app";
import "@/styles/globals.css";

import AuthguardProvider from "../../authguard";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthguardProvider>
      <Component {...pageProps} />
    </AuthguardProvider>
  );
}
