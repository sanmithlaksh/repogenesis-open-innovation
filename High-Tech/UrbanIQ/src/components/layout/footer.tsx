import Link from 'next/link';
import { Logo } from '@/components/icons';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Empowering citizens to build better communities through technology and transparency.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link href="/dashboard" className="text-sm text-muted-foreground hover:text-primary">Dashboard</Link></li>
              <li><Link href="/report-issue" className="text-sm text-muted-foreground hover:text-primary">Report an Issue</Link></li>
              <li><Link href="/accomplishments" className="text-sm text-muted-foreground hover:text-primary">Accomplishments</Link></li>
              <li><Link href="/sectors" className="text-sm text-muted-foreground hover:text-primary">Sectors</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <ul className="space-y-1">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex items-center space-x-4">
                <Link href="#" aria-label="Twitter"><Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" /></Link>
                <Link href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" /></Link>
                <Link href="#" aria-label="GitHub"><Github className="h-5 w-5 text-muted-foreground hover:text-primary" /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} UrbanIQ. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
