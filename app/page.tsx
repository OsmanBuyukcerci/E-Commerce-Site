"use client";

import { redirect } from "next/navigation";

export default function Home() {
  redirect("/products/1");

  return null;
}
