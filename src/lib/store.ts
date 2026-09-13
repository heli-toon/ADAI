import { useEffect, useState } from "react";
import type { Inspiration } from "@/types/inspiration";
import { seedInspirations } from "@/data/inspirations";

const STORAGE_KEY = "adai-inspirations";

let userEntries: Inspiration[] = [];
let loaded = false;
const listeners = new Set<() => void>();

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) userEntries = JSON.parse(raw) as Inspiration[];
  } catch {
    userEntries = [];
  }
}

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userEntries));
  } catch {
    /* storage unavailable — entries stay in memory for this session */
  }
  listeners.forEach((l) => l());
}

export function getAllInspirations(): Inspiration[] {
  load();
  return [...userEntries, ...seedInspirations];
}

export function getInspiration(id: string): Inspiration | undefined {
  return getAllInspirations().find((i) => i.id === id || i.slug === id);
}

export function addInspiration(entry: Inspiration) {
  load();
  userEntries = [entry, ...userEntries];
  persist();
}

/** Reactive list of every inspiration, seeded plus locally saved. */
export function useInspirations() {
  const [items, setItems] = useState<Inspiration[]>(seedInspirations);

  useEffect(() => {
    const sync = () => setItems(getAllInspirations());
    sync();
    listeners.add(sync);
    return () => {
      listeners.delete(sync);
    };
  }, []);

  return items;
}
