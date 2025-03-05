import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

// dynamic navigation/redirect of url
export default async function Page({ params }) {
  const { url } = await params;

  const client = await clientPromise;

  const db = client.db("shortified");
  const collection = db.collection("url");

  // Check if the short url exists or not
  const doc = await collection.findOne({ shortUrl: url });

  if (doc) {
    redirect(doc.url);
  } else {
    redirect(`${process.env.NEXT_PUBLIC_HOST}`);
  }
}
