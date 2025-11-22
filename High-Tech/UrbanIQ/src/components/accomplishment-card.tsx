import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import type { Issue } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

type AccomplishmentCardProps = {
  issue: Issue;
};

export function AccomplishmentCard({ issue }: AccomplishmentCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-xl flex flex-col">
      <CardHeader>
        <div className="relative aspect-video w-full">
            <Image
            src={issue.imageUrl}
            alt={issue.title}
            data-ai-hint={issue.imageHint}
            fill
            className="rounded-t-lg object-cover"
            />
        </div>
        <Badge variant="secondary" className="mt-4 w-fit">{issue.sector}</Badge>
        <CardTitle className="pt-2">{issue.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <CardDescription className="flex-grow line-clamp-3">{issue.description}</CardDescription>
        <div className="flex justify-between items-center text-sm text-muted-foreground mt-4 pt-4 border-t">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Resolved on {format(new Date(issue.response!.respondedAt), 'PPP')}</span>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link href={`/issue/${issue.id}`}>
              Details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
