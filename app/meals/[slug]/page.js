import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { getMealBySlug } from "@/lib/meals";
import NotFound from "@/app/not-found";

export default async function page({ params }) {
  const mealDetails = await getMealBySlug(params.slug);
  if (!mealDetails) {
    NotFound();
  }
  mealDetails.instructions = mealDetails.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={mealDetails.image} fill alt={mealDetails.title} />
        </div>

        <div className={styles.headerText}>
          <h2>{mealDetails.title}</h2>
          <p className={styles.creator}>
            by{" "}
            <a href={`mailto:${mealDetails.creator_email}`}>
              {mealDetails.creator}
            </a>
          </p>
          <p className={styles.summary}>{mealDetails.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{ __html: mealDetails.instructions }}
        ></p>
      </main>
    </>
  );
}
