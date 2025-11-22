import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { Sector } from '@/lib/types';
import { Badge } from './ui/badge';

type SectorCardProps = {
  sector: Sector;
};

export function SectorCard({ sector }: SectorCardProps) {
  const Icon = sector.icon;
  return (
    <Card className="flex flex-col transition-all hover:shadow-lg">
      <CardHeader className="flex-row items-center gap-4">
        <div className="bg-primary/10 p-3 rounded-md">
            <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-lg">{sector.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <CardDescription className="flex-grow">{sector.description}</CardDescription>
        <div className="flex justify-between items-center mt-4">
            <Badge variant="secondary">{sector.issueCount} Active Issues</Badge>
            <Button variant="ghost" size="sm" asChild>
                <Link href={`/sectors/${sector.id}`}>
                    View <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
      </CardContent>
    </Card>
  );
}
