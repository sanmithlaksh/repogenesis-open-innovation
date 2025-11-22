import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { users } from '@/lib/mock-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function ProfilePage() {
  const user = users[0];

  return (
    <div className="container py-8 md:py-12">
      <div className="flex items-center gap-6 mb-8">
        <Avatar className="h-24 w-24 border-4 border-primary/20">
            <AvatarImage src={user.avatarUrl} data-ai-hint={user.imageHint} />
            <AvatarFallback className="text-3xl">{user.username.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">
                {user.username}
            </h1>
            <p className="text-muted-foreground">Manage your profile, account settings, and notifications.</p>
        </div>
      </div>
      
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-lg">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal details here.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue={user.username} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="aadhaar">Aadhaar Number</Label>
                <Input id="aadhaar" defaultValue="XXXXXXXX1234" disabled />
                <p className="text-xs text-muted-foreground">Aadhaar number cannot be changed.</p>
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Change your password or manage your account.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <Button>Update Password</Button>
              <Separator className="my-6" />
              <div className="space-y-2">
                  <h4 className="font-medium text-destructive">Delete Account</h4>
                  <p className="text-sm text-muted-foreground">Permanently delete your account and all associated data. This action is irreversible.</p>
                  <Button variant="destructive">Delete My Account</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Choose how you want to be notified.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-center justify-between space-x-2 p-4 border rounded-lg">
                    <Label htmlFor="issue-updates" className="flex flex-col space-y-1">
                        <span>Issue Updates</span>
                        <span className="font-normal leading-snug text-muted-foreground">
                        Receive notifications when the status of your reported issues changes.
                        </span>
                    </Label>
                    <Switch id="issue-updates" defaultChecked />
                </div>
                <div className="flex items-center justify-between space-x-2 p-4 border rounded-lg">
                    <Label htmlFor="gov-responses" className="flex flex-col space-y-1">
                        <span>Government Responses</span>
                        <span className="font-normal leading-snug text-muted-foreground">
                        Get notified when a government official responds to your report.
                        </span>
                    </Label>
                    <Switch id="gov-responses" defaultChecked />
                </div>
                <div className="flex items-center justify-between space-x-2 p-4 border rounded-lg">
                    <Label htmlFor="platform-news" className="flex flex-col space-y-1">
                        <span>Platform News</span>
                        <span className="font-normal leading-snug text-muted-foreground">
                        Receive occasional updates about new features and accomplishments on UrbanIQ.
                        </span>
                    </Label>
                    <Switch id="platform-news" />
                </div>
                <Button>Save Preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>

      </Tabs>
    </div>
  );
}
