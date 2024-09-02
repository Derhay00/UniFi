import { NextResponse } from "next/server";
import { createFeatures } from "@/lib/action/features.action"; // Import your function

export async function POST(request: Request) {
  try {
    const featuresData = await request.json(); // Get the data from the request body
    const newFeature = await createFeatures(featuresData); // Create the feature
    return NextResponse.json({ newFeature }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error creating feature", error }, { status: 500 });
  }
}
