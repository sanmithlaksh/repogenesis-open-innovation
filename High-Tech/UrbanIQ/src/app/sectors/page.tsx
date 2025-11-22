import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { sectors } from '@/lib/mock-data';
import { SectorCard } from '@/components/sector-card';

export default function SectorsPage() {
  return (
    <div className="container py-8 md:py-12">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">
            Service Sectors
          </CardTitle>
          <CardDescription>
            UrbanIQ organizes civic issues into seven key sectors to ensure your report reaches the right department quickly.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sectors.map((sector) => (
          <SectorCard key={sector.id} sector={sector} />
        ))}
      </div>
    </div>
  );
}
