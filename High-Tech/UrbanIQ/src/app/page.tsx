import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { sectors, accomplishments } from '@/lib/mock-data';
import { SectorCard } from '@/components/sector-card';
import { AccomplishmentCard } from '@/components/accomplishment-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover object-center"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="container px-4 md:px-6 relative z-10 text-center text-white">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
              Building Better Communities, Together
            </h1>
            <p className="mx-auto max-w-[700px] text-lg md:text-xl">
              UrbanIQ empowers you to report local issues, track government
              responses, and see real progress in your neighborhood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/signup">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/accomplishments">View Accomplishments</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="sectors" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
                Report Issues Across All Sectors
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From potholes to public health, we've got you covered. Select a
                sector to see how UrbanIQ is making a difference.
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {sectors.slice(0, 4).map((sector) => (
              <SectorCard key={sector.id} sector={sector} />
            ))}
          </div>
           <div className="text-center">
             <Button asChild variant="outline">
                <Link href="/sectors">
                  View All Sectors <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
           </div>
        </div>
      </section>

      <section id="accomplishments" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
                Recent Accomplishments
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See the positive impact of civic engagement. Here are some of
                the latest projects completed thanks to reports from citizens
                like you.
              </p>
            </div>
          </div>
          <div className="mx-auto grid gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {accomplishments.slice(0, 3).map((issue) => (
              <AccomplishmentCard key={issue.id} issue={issue} />
            ))}
          </div>
          <div className="flex justify-center">
            <Button asChild size="lg">
              <Link href="/accomplishments">
                Explore All Accomplishments{' '}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
