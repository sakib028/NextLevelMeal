"use server";

import { redirect } from "next/dist/server/api-utils";
import { addMeal } from "./meals";

export async function ShareMeal(formData) {
  const newMeal = {
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };
  await addMeal(newMeal);
  redirect("/meals");
  return { success: true, message: "Meal shared successfully!" };
}
