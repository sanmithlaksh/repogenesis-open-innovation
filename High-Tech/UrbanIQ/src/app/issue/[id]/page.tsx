'use client';

import { useState } from 'react';
import Image from 'next/image';
import { issues, users } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import {
  MapPin,
  Calendar,
  Building,
  CircleDollarSign,
  Clock,
} from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default function IssueDetailPage({ params }: { params: { id: string } }) {
  const issue = issues.find((i) => i.id === params.id);
  const mapPlaceholder = PlaceHolderImages.find((p) => p.id === 'map-placeholder');
  const [responseText, setResponseText] = useState('');

  if (!issue) {
    notFound();
  }
  
  const getStatusColor = (status: (typeof issue.status)) => {
    switch (status) {
        case 'Pending': return 'bg-accent text-accent-foreground';
        case 'In Progress': return 'bg-blue-500 text-white';
        case 'Resolved': return 'bg-green-600 text-white';
        case 'Rejected': return 'bg-destructive text-destructive-foreground';
        default: return 'bg-secondary text-secondary-foreground';
    }
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <Badge variant="secondary">{issue.sector}</Badge>
                <Badge className={cn('capitalize', getStatusColor(issue.status))}>{issue.status}</Badge>
              </div>
              <CardTitle className="text-3xl font-headline pt-2">{issue.title}</CardTitle>
              <div className="flex items-center text-sm text-muted-foreground pt-2 gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{issue.location.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Reported on {format(new Date(issue.reportedAt), 'PPP')}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video w-full mb-6 rounded-lg overflow-hidden border">
                <Image
                  src={issue.imageUrl}
                  alt={issue.title}
                  data-ai-hint={issue.imageHint}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">{issue.description}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
                <CardTitle>Government Response</CardTitle>
                {!issue.response && <CardDescription>No response from the government yet.</CardDescription>}
            </CardHeader>
            <CardContent>
                {issue.response ? (
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div className="flex items-start gap-2"><Clock className="h-4 w-4 mt-1 text-primary shrink-0" /><div><p className="font-semibold">Timeline</p><p className="text-muted-foreground">{issue.response.timeline}</p></div></div>
                            <div className="flex items-start gap-2"><CircleDollarSign className="h-4 w-4 mt-1 text-primary shrink-0" /><div><p className="font-semibold">Budget</p><p className="text-muted-foreground">{issue.response.budget}</p></div></div>
                            <div className="flex items-start gap-2"><Building className="h-4 w-4 mt-1 text-primary shrink-0" /><div><p className="font-semibold">Contractor</p><p className="text-muted-foreground">{issue.response.contractor}</p></div></div>
                            <div className="flex items-start gap-2"><Calendar className="h-4 w-4 mt-1 text-primary shrink-0" /><div><p className="font-semibold">Responded</p><p className="text-muted-foreground">{format(new Date(issue.response.respondedAt), 'PPP')}</p></div></div>
                        </div>
                        <Separator />
                        <p className="text-muted-foreground leading-relaxed">{issue.response.notes}</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <Textarea 
                          placeholder="Write a response to the citizen..." 
                          className="min-h-[150px]"
                          value={responseText}
                          onChange={(e) => setResponseText(e.target.value)}
                        />
                        <div className="flex justify-end items-center">
                            <Button>Submit Response</Button>
                        </div>
                    </div>
                )}
            </CardContent>
          </Card>

        </div>
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Reported By</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={issue.reportedBy.avatarUrl} data-ai-hint={issue.reportedBy.imageHint}/>
                <AvatarFallback>{issue.reportedBy.username.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{issue.reportedBy.username}</p>
                <p className="text-sm text-muted-foreground">Citizen</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
            {mapPlaceholder && (
                <div className="rounded-lg overflow-hidden border">
                    <Image
                        src={mapPlaceholder.imageUrl}
                        alt={mapPlaceholder.description}
                        data-ai-hint={mapPlaceholder.imageHint}
                        width={800}
                        height={400}
                        className="w-full h-auto object-cover"
                    />
                </div>
            )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
