"use client";
import React from "react";
import { useFormState } from "react-dom";

export default function MealsFromSubmit() {
  const { pending } = useFormState();
  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
