import styles from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/mealsGrid";
import { getAllMeals } from "@/lib/meals";
import { Suspense } from "react";

export default function page() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious Meals create by our community!{" "}
          <span className={styles.highlight}> by you</span>
        </h1>
        <p>Chose your favorite meal and share it with the world</p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your favorite meal and recipes</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<p className={styles.loading}>Loading meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
async function Meals() {
  const meals = await getAllMeals();
  return <MealsGrid meals={meals} />;
}
