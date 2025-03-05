import clientPromise from "@/lib/mongodb";

// Database connection and saving url from form to database
export async function POST(request) {
  const body = await request.json();

  const client = await clientPromise;

  const db = client.db("shortified");
  const collection = db.collection("url");

  // Check if the short url exists or not
  const doc = await collection.findOne({ shortUrl: body.shortUrl });

  if (doc) {
    return Response.json({
      success: false,
      error: true,
      message: "URL already exists",
    });
  }

  const result = await collection.insertOne({
    url: body.url,
    shortUrl: body.shortUrl,
  });

  return Response.json({
    success: true,
    error: false,
    message: "URL generated successfully",
  });
}
