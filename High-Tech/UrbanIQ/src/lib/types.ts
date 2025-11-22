import type { LucideIcon } from 'lucide-react';

export type User = {
  id: string;
  username: string;
  avatarUrl: string;
  imageHint: string;
  role: 'citizen' | 'government';
};

export type Sector = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  issueCount: number;
};

export type IssueStatus = 'Pending' | 'In Progress' | 'Resolved' | 'Rejected';

export type GovernmentResponse = {
  respondedAt: string;
  timeline: string;
  budget: string;
  contractor: string;
  notes: string;
};

export type Issue = {
  id: string;
  title: string;
  description: string;
  sector: string;
  sectorId: string;
  status: IssueStatus;
  imageUrl: string;
  imageHint: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  reportedBy: User;
  reportedAt: string;
  response?: GovernmentResponse;
};
