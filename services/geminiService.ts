import { GoogleGenAI, Type } from "@google/genai";
import type { ItineraryPlan } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const itinerarySchema = {
    type: Type.OBJECT,
    properties: {
        tripTitle: {
            type: Type.STRING,
            description: "A creative and engaging title for the entire trip. For example: 'An Epic 7-Day Journey from Paris to Rome'."
        },
        totalDuration: {
            type: Type.STRING,
            description: "The total duration of the trip as a string. For example: '7 Days'."
        },
        routeDescription: {
            type: Type.STRING,
            description: "A short paragraph describing the overall route and journey. For example: 'This journey will take you from the romantic streets of Paris, through the scenic Swiss Alps, and into the heart of historic Rome.'"
        },
        itinerary: {
            type: Type.ARRAY,
            description: "An array of daily plans, one for each day of the trip.",
            items: {
                type: Type.OBJECT,
                properties: {
                    day: { type: Type.INTEGER, description: "The day number of the itinerary, starting from 1." },
                    title: { type: Type.STRING, description: "A short, catchy title for the day's plan. For example: 'Arrival in Paris & Eiffel Tower Magic'." },
                    activities: {
                        type: Type.ARRAY,
                        description: "A list of 2-3 activities planned for the day.",
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                name: { type: Type.STRING, description: "The name of the activity or point of interest. E.g., 'Visit the Louvre Museum'." },
                                description: { type: Type.STRING, description: "A brief, one or two sentence description of the activity." }
                            },
                             required: ["name", "description"]
                        }
                    },
                    accommodation: {
                        type: Type.OBJECT,
                        description: "A suggestion for accommodation for the night.",
                        properties: {
                            name: { type: Type.STRING, description: "The name of the suggested hotel or lodging. E.g., 'Hotel Le Bristol Paris'." },
                            reason: { type: Type.STRING, description: "A brief reason for suggesting this accommodation, like 'Iconic luxury hotel near major landmarks'." }
                        },
                        required: ["name", "reason"]
                    },
                    foodSuggestions: {
                        type: Type.ARRAY,
                        description: "A list of 1-2 famous local food suggestions for the day.",
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                name: { type: Type.STRING, description: "The name of the food or dish. E.g., 'Crêpes'." },
                                description: { type: Type.STRING, description: "A brief description of the food and why it's recommended. E.g., 'Thin pancakes that can be sweet or savory, a classic Parisian street food.'" }
                            },
                             required: ["name", "description"]
                        }
                    },
                    transportation: {
                        type: Type.STRING,
                        description: "A brief summary of the primary mode of transportation for the day's activities. E.g., 'Mainly by Paris Métro and walking.' or 'A scenic 4-hour drive through the countryside.'"
                    }
                },
                required: ["day", "title", "activities", "accommodation", "foodSuggestions", "transportation"]
            }
        }
    },
    required: ["tripTitle", "totalDuration", "routeDescription", "itinerary"]
};


export const generateItinerary = async (from: string, to: string, duration: number): Promise<ItineraryPlan> => {
    const prompt = `Create a detailed travel itinerary for a ${duration}-day trip from ${from} to ${to}. The plan should be logical and feasible. For each day, provide a title, a list of 2-3 interesting activities, a suggestion for accommodation with a reason, 1-2 famous local food suggestions with descriptions, and a summary of the day's transportation. Also include an overall route description.`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: itinerarySchema,
            },
        });

        const jsonText = response.text.trim();
        const parsedJson = JSON.parse(jsonText);

        return parsedJson as ItineraryPlan;
    } catch (error) {
        console.error("Error generating itinerary:", error);
        if (error instanceof Error && error.message.includes("SAFETY")) {
             throw new Error("The request was blocked due to safety concerns. Please modify your input and try again.");
        }
        throw new Error("Failed to generate itinerary. The AI model may be temporarily unavailable.");
    }
};