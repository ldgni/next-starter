export async function fetchRandomImage() {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error("URL of the API is not defined");
  }
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL);
  return res.url;
}
