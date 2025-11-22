import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  FileText,
  CheckCircle,
  Clock,
  PlusCircle,
  ArrowRight,
} from 'lucide-react';
import { issues, users } from '@/lib/mock-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { formatDistanceToNow } from 'date-fns';

export default function DashboardPage() {
  const user = users[0];
  const userIssues = issues.filter((issue) => issue.reportedBy.id === user.id);
  const resolvedIssues = userIssues.filter(
    (issue) => issue.status === 'Resolved'
  ).length;
  const pendingIssues = userIssues.filter(
    (issue) => issue.status === 'Pending' || issue.status === 'In Progress'
  ).length;

  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">
            Welcome, {user.username}!
          </h1>
          <p className="text-muted-foreground">
            Here&apos;s a summary of your activities and reported issues.
          </p>
        </div>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/report-issue">
            <PlusCircle className="mr-2 h-5 w-5" />
            Report a New Issue
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Issues Reported</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userIssues.length}</div>
            <p className="text-xs text-muted-foreground">
              Your contribution to a better community.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Issues Resolved</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{resolvedIssues}</div>
            <p className="text-xs text-muted-foreground">
              Successfully addressed by the authorities.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending/In Progress</CardTitle>
            <Clock className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingIssues}</div>
            <p className="text-xs text-muted-foreground">
              Awaiting response or being worked on.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>
            A look at your most recently reported issues.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {userIssues.slice(0, 3).map((issue) => (
              <div key={issue.id} className="flex items-center gap-4">
                <Avatar className="h-10 w-10 border">
                  <AvatarImage src={issue.reportedBy.avatarUrl} data-ai-hint={issue.reportedBy.imageHint} />
                  <AvatarFallback>{issue.reportedBy.username.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Link href={`/issue/${issue.id}`} className="font-medium hover:underline">{issue.title}</Link>
                  <p className="text-sm text-muted-foreground">
                    In <span className="font-semibold text-foreground">{issue.sector}</span> &bull; {formatDistanceToNow(new Date(issue.reportedAt), { addSuffix: true })}
                  </p>
                </div>
                <Badge variant={issue.status === 'Resolved' ? 'default' : 'secondary'}>{issue.status}</Badge>
                <Button variant="ghost" size="icon" asChild>
                    <Link href={`/issue/${issue.id}`}><ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
