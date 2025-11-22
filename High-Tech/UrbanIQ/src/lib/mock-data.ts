import type { User, Sector, Issue } from './types';
import {
  UtensilsCrossed,
  Construction,
  Droplets,
  HeartHandshake,
  Stethoscope,
  Landmark,
  Shield,
} from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';

const user1Avatar = PlaceHolderImages.find((img) => img.id === 'user-avatar-1');
const user2Avatar = PlaceHolderImages.find((img) => img.id === 'user-avatar-2');

export const users: User[] = [
  {
    id: 'user-1',
    username: 'CitizenJane',
    avatarUrl: user1Avatar?.imageUrl || '',
    imageHint: user1Avatar?.imageHint || '',
    role: 'citizen',
  },
  {
    id: 'user-2',
    username: 'OfficialJohn',
    avatarUrl: user2Avatar?.imageUrl || '',
    imageHint: user2Avatar?.imageHint || '',
    role: 'government',
  },
];

export const sectors: Sector[] = [
  {
    id: 'food',
    name: 'Food and Management',
    description: 'Issues related to public food safety and distribution.',
    icon: UtensilsCrossed,
    issueCount: 12,
  },
  {
    id: 'road',
    name: 'Road Development',
    description: 'Report potholes, and damages on public roads.',
    icon: Construction,
    issueCount: 28,
  },
  {
    id: 'water',
    name: 'Water Supply',
    description: 'Problems with water pipelines, quality, and availability.',
    icon: Droplets,
    issueCount: 19,
  },
  {
    id: 'women-children',
    name: 'Women & Children Board',
    description: 'Concerns regarding welfare and safety services.',
    icon: HeartHandshake,
    issueCount: 5,
  },
  {
    id: 'health',
    name: 'Health Department',
    description: 'Issues with public health facilities and services.',
    icon: Stethoscope,
    issueCount: 8,
  },
  {
    id: 'municipal',
    name: 'Municipal Board',
    description: 'Street lights, parks, and other public properties.',
    icon: Landmark,
    issueCount: 23,
  },
  {
    id: 'police',
    name: 'Police Board',
    description: 'Public safety and law enforcement concerns.',
    icon: Shield,
    issueCount: 3,
  },
];

const issueImages = {
    pothole: PlaceHolderImages.find((img) => img.id === 'issue-pothole'),
    trash: PlaceHolderImages.find((img) => img.id === 'issue-trash'),
    waterLeak: PlaceHolderImages.find((img) => img.id === 'issue-water-leak'),
    brokenLight: PlaceHolderImages.find((img) => img.id === 'issue-broken-light'),
};

const accomplishmentImages = {
    park: PlaceHolderImages.find((img) => img.id === 'accomplishment-park'),
    road: PlaceHolderImages.find((img) => img.id === 'accomplishment-road'),
    lightFixed: PlaceHolderImages.find((img) => img.id === 'accomplishment-light-fixed'),
};


export const issues: Issue[] = [
  {
    id: 'issue-101',
    title: 'Massive Pothole on Main St',
    description:
      'A very large and dangerous pothole has formed in the middle of Main Street near the central library. It has already caused damage to several vehicles. It needs immediate attention before a serious accident occurs.',
    sector: 'Road Development',
    sectorId: 'road',
    status: 'Resolved',
    imageUrl: accomplishmentImages.road?.imageUrl || '',
    imageHint: accomplishmentImages.road?.imageHint || '',
    location: {
      lat: 40.7128,
      lng: -74.006,
      address: '123 Main St, Anytown, USA',
    },
    reportedBy: users[0],
    reportedAt: '2023-10-01T10:00:00Z',
    response: {
      respondedAt: '2023-10-02T14:00:00Z',
      timeline: '3 days',
      budget: '$5,000',
      contractor: 'PaveRight Inc.',
      notes: 'Repair crew has been dispatched. The road was successfully repaved and is now safe for public use.',
    },
  },
  {
    id: 'issue-102',
    title: 'Overflowing Bins at City Park',
    description:
      'The trash and recycling bins at City Park have not been emptied for over a week. They are overflowing, creating a mess and attracting pests. The park is becoming unsanitary.',
    sector: 'Municipal Board',
    sectorId: 'municipal',
    status: 'In Progress',
    imageUrl: issueImages.trash?.imageUrl || '',
    imageHint: issueImages.trash?.imageHint || '',
    location: {
      lat: 40.715,
      lng: -74.008,
      address: 'City Park, Anytown, USA',
    },
    reportedBy: users[0],
    reportedAt: '2023-10-26T11:30:00Z',
    response: {
        respondedAt: '2023-10-27T09:00:00Z',
        timeline: '24 hours',
        budget: '$500',
        contractor: 'City Sanitation Dept.',
        notes: 'Sanitation crew is scheduled for park cleanup today. We are also reviewing the collection schedule to prevent future occurrences.',
    }
  },
  {
    id: 'issue-103',
    title: 'Broken Water Main',
    description:
      'A water main has burst on the corner of Oak Ave and 4th St. Water is flooding the street and sidewalk, causing a hazard and wasting a significant amount of water.',
    sector: 'Water Supply',
    sectorId: 'water',
    status: 'Pending',
    imageUrl: issueImages.waterLeak?.imageUrl || '',
    imageHint: issueImages.waterLeak?.imageHint || '',
    location: {
      lat: 40.718,
      lng: -74.01,
      address: 'Corner of Oak Ave & 4th St, Anytown, USA',
    },
    reportedBy: users[0],
    reportedAt: '2023-11-05T08:00:00Z',
  },
  {
    id: 'issue-104',
    title: 'Streetlight Out on Elm Street',
    description:
      'The streetlight at the intersection of Elm Street and 9th Ave has been out for several nights, creating a dark and potentially unsafe area for pedestrians and drivers.',
    sector: 'Municipal Board',
    sectorId: 'municipal',
    status: 'Resolved',
    imageUrl: accomplishmentImages.lightFixed?.imageUrl || '',
    imageHint: accomplishmentImages.lightFixed?.imageHint || '',
    location: {
      lat: 40.72,
      lng: -74.012,
      address: 'Elm Street & 9th Ave, Anytown, USA',
    },
    reportedBy: users[0],
    reportedAt: '2023-09-15T22:00:00Z',
    response: {
        respondedAt: '2023-09-16T10:00:00Z',
        timeline: '2 days',
        budget: '$800',
        contractor: 'ElecTech Services',
        notes: 'The faulty bulb and wiring have been replaced. The light is now fully operational.'
    }
  },
  {
    id: 'issue-105',
    title: 'New Park Inaugurated',
    description:
      'The previously derelict plot on Pine St has been transformed into a beautiful community park with benches, a playground, and green spaces.',
    sector: 'Municipal Board',
    sectorId: 'municipal',
    status: 'Resolved',
    imageUrl: accomplishmentImages.park?.imageUrl || '',
    imageHint: accomplishmentImages.park?.imageHint || '',
    location: {
      lat: 40.725,
      lng: -74.015,
      address: 'Pine Street Park, Anytown, USA',
    },
    reportedBy: users[1],
    reportedAt: '2023-08-20T12:00:00Z',
    response: {
        respondedAt: '2023-08-20T12:00:00Z',
        timeline: '3 months',
        budget: '$250,000',
        contractor: 'GreenScape Builders',
        notes: 'Project completed successfully, providing a valuable recreational space for the community.'
    }
  },
];

export const accomplishments = issues.filter(
  (issue) => issue.status === 'Resolved'
);
