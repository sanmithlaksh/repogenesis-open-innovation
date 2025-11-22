import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ShieldAlert } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { issues } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';

export default function GovernmentDashboardPage() {
  return (
    <div className="container py-8 md:py-12">
      <Alert className="mb-8 border-primary/50 text-primary [&>svg]:text-primary">
        <ShieldAlert className="h-4 w-4" />
        <AlertTitle>Government Portal</AlertTitle>
        <AlertDescription>
          This is a restricted area for authorized government officials.
        </AlertDescription>
      </Alert>
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">
          Issue Management Dashboard
        </h1>
        <p className="text-muted-foreground">
          Review, respond to, and manage citizen-reported issues.
        </p>
      </div>

      {/* This would be replaced with analytics charts */}
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
            <CardHeader>
                <CardTitle>New Reports</CardTitle>
                <CardDescription>Awaiting review</CardDescription>
            </CardHeader>
            <CardContent><div className="text-3xl font-bold">23</div></CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>In Progress</CardTitle>
                <CardDescription>Currently being addressed</CardDescription>
            </CardHeader>
            <CardContent><div className="text-3xl font-bold">15</div></CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Average Response Time</CardTitle>
                <CardDescription>For new reports</CardDescription>
            </CardHeader>
            <CardContent><div className="text-3xl font-bold">48 Hours</div></CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Incoming Issues</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Sector</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Reported By</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {issues.filter(i => i.status !== 'Resolved').slice(0, 5).map((issue) => (
                <TableRow key={issue.id}>
                  <TableCell className="font-medium">{issue.title}</TableCell>
                  <TableCell>{issue.sector}</TableCell>
                  <TableCell>
                    <Badge variant={issue.status === 'Pending' ? 'destructive' : 'secondary'}>{issue.status}</Badge>
                  </TableCell>
                  <TableCell>{issue.reportedBy.username}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      View & Respond
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
