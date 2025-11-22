import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import type { Issue } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { formatDistanceToNow } from 'date-fns';

type IssueCardProps = {
  issue: Issue;
};

const statusColors = {
    Pending: 'bg-yellow-500',
    'In Progress': 'bg-blue-500',
    Resolved: 'bg-green-500',
    Rejected: 'bg-red-500',
}

export function IssueCard({ issue }: IssueCardProps) {

  const getStatusColor = (status: Issue['status']) => {
    switch (status) {
        case 'Pending': return 'bg-accent text-accent-foreground';
        case 'In Progress': return 'bg-blue-500 text-white';
        case 'Resolved': return 'bg-green-600 text-white';
        case 'Rejected': return 'bg-destructive text-destructive-foreground';
        default: return 'bg-secondary text-secondary-foreground';
    }
  }

  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative aspect-video">
          <Image
            src={issue.imageUrl}
            alt={issue.title}
            data-ai-hint={issue.imageHint}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <div className="flex justify-between items-start mb-2">
            <Badge variant="secondary">{issue.sector}</Badge>
            <Badge className={cn('capitalize', getStatusColor(issue.status))}>{issue.status}</Badge>
        </div>
        <CardTitle className="text-lg leading-tight mb-2 line-clamp-2">{issue.title}</CardTitle>
        <div className="flex items-center text-xs text-muted-foreground gap-4">
            <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3"/>
                <span>{issue.location.address.split(',')[1]}</span>
            </div>
            <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{formatDistanceToNow(new Date(issue.reportedAt), { addSuffix: true })}</span>
            </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link href={`/issue/${issue.id}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
