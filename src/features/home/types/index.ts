export interface Futsal {
  id: string;
  name: string;
  location: {
    area: string;
    city: string;
    coordinates?: { lat: number; lng: number };
  };
  images: string[];
  rating: number;
  reviewCount: number;
  pricePerHour: number;
  amenities: string[];
  type: "5v5" | "7v7" | "11v11";
  surface: "turf" | "indoor" | "outdoor";
  availability: TimeSlot[];
  isPopular?: boolean;
  isRecommended?: boolean;
}

export interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
  date: Date;
}

export interface SearchParams {
  location: string;
  date: Date | null;
  timeSlot: string;
  duration: number;
}

export interface Location {
  id: string;
  name: string;
  area: string;
  city: string;
  futsalCount: number;
}

export interface FilterOption {
  id: string;
  label: string;
  value: string;
  icon?: string;
}

export type TimeSlotType = "morning" | "afternoon" | "evening" | "night";

export interface SearchBarProps {
  onSearch: (params: SearchParams) => void;
  defaultLocation?: string;
  isSticky?: boolean;
}
