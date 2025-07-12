"use client";
import React from "react";

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>Something went wrong!</h1>
      <p>Fail to fetch meals</p>
    </main>
  );
}
