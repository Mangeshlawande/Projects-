// src/app/layout.tsx
export const metadata = {
    title: "My Next.js App",
    description: "Welcome to my Next.js App",
  };
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>
          {/* Shared Layout */}
          <header>
            <nav>
              <h1>My App</h1>
            </nav>
          </header>
          <main>{children}</main>
        </body>
      </html>
    );
  }
  