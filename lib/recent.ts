export type RecentItem = {
  id: string;
  type: "movie" | "youtube";
  title: string;
  image: string;
};

const STORAGE_KEY = "recently-watched";
const MAX_ITEMS = 10;

export function saveRecent(item: RecentItem) {
  if (typeof window === "undefined") return;

  const raw = localStorage.getItem(STORAGE_KEY);
  const list: RecentItem[] = raw ? JSON.parse(raw) : [];

  // remove duplicates
  const filtered = list.filter(
    (i) => !(i.id === item.id && i.type === item.type)
  );

  const updated = [item, ...filtered].slice(0, MAX_ITEMS);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function getRecent(): RecentItem[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}
