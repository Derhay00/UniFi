"use server"
import Features from "@/database/features.model";
import { connectToDB } from "../mongoose";
import { CreateFeaturesParams } from "./shared";
import { revalidatePath } from "next/cache";


export async function createFeatures(featuresData: CreateFeaturesParams) {
  try {
    connectToDB();
    const newFeatures = await Features.create(featuresData);
    return newFeatures;
  } catch (error) {
    console.log(error);
  }
}