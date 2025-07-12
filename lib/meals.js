import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
const db = sql("meals.db");
export async function getAllMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
  return db.prepare("SELECT * FROM meals").all();
}
export async function getMealBySlug(slug) {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
export async function addMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  const extension = meal.image.name.split(".").pop();
  const filename = `${meal.slug}.${extension}`;
  const stream = fs.createWriteStream(`public/images/${filename}`);
  const bufferImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferImage), (err) => {
    if (err) {
      throw new Error("Failed to write image file");
    }
  });
  meal.image = `/images/${filename}`;
  const { creator, creator_email, title, summary, instructions, image } = meal;
  const result = db
    .prepare(
      "INSERT INTO meals (creator, creator_email, title, summary, instructions, image) VALUES (?, ?, ?, ?, ?, ?)"
    )
    .run(creator, creator_email, title, summary, instructions, image);
}
