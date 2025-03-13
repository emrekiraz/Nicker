import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container px-4 py-6 md:px-6 md:py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="font-bold text-xl">Nicker</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Find the perfect brand name and domain for your next big idea.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            <div>
              <h3 className="text-sm font-medium">Product</h3>
              <nav className="mt-3 flex flex-col gap-2">
                <Link href="/" className="text-sm text-muted-foreground hover:underline">
                  Home
                </Link>
                <Link href="/about" className="text-sm text-muted-foreground hover:underline">
                  About
                </Link>
                <Link href="/faq" className="text-sm text-muted-foreground hover:underline">
                  FAQ
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-sm font-medium">Legal</h3>
              <nav className="mt-3 flex flex-col gap-2">
                <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
                  Privacy
                </Link>
                <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
                  Terms
                </Link>
              </nav>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium">Connect</h3>
            <nav className="mt-3 flex gap-4">
              <Link 
                href="https://github.com/yourusername/nicker" 
                className="text-sm text-muted-foreground hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nicker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 