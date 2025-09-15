export interface Activity {
  name: string;
  description: string;
}

export interface Accommodation {
  name: string;
  reason: string;
}

export interface FoodSuggestion {
    name: string;
    description: string;
}

export interface DayPlan {
  day: number;
  title: string;
  activities: Activity[];
  accommodation: Accommodation;
  foodSuggestions: FoodSuggestion[];
  transportation: string;
}

export interface ItineraryPlan {
  tripTitle: string;
  totalDuration: string;
  routeDescription: string;
  itinerary: DayPlan[];
}