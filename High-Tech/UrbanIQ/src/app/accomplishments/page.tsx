import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search } from 'lucide-react';
import { accomplishments, sectors } from '@/lib/mock-data';
import { AccomplishmentCard } from '@/components/accomplishment-card';

export default function AccomplishmentsPage() {
  return (
    <div className="bg-secondary">
        <div className="container py-8 md:py-12">
        <Card className="mb-8 bg-background">
            <CardHeader>
            <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">
                Government Accomplishments
            </CardTitle>
            <CardDescription>
                Browse completed projects and see the positive impact of civic engagement in your community.
            </CardDescription>
            </CardHeader>
        </Card>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search completed projects..." className="pl-10 bg-background" />
            </div>
            <div className="flex gap-4">
            <Select>
                <SelectTrigger className="w-full md:w-[180px] bg-background">
                <SelectValue placeholder="Filter by Sector" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="all">All Sectors</SelectItem>
                {sectors.map((sector) => (
                    <SelectItem key={sector.id} value={sector.id}>
                    {sector.name}
                    </SelectItem>
                ))}
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="w-full md:w-[180px] bg-background">
                <SelectValue placeholder="Filter by Date" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="last-30">Last 30 Days</SelectItem>
                <SelectItem value="last-90">Last 90 Days</SelectItem>
                <SelectItem value="last-year">Last Year</SelectItem>
                </SelectContent>
            </Select>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {accomplishments.map((issue) => (
                <AccomplishmentCard key={issue.id} issue={issue} />
            ))}
        </div>
        </div>
    </div>
  );
}
