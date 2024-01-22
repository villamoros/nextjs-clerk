import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <div className="mx-36 text-2xl">
            <ClerkLoading>
              <div className="flex flex-col items-center text-center mt-12">
                Loading...
              </div>
              <Navbar />
            </ClerkLoading>
            <ClerkLoaded>
              <Navbar />
              {children}
            </ClerkLoaded>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
