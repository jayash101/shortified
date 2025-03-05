import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const notoSans = localFont({
  src: "./fonts/NotoSans-ExtraBold.ttf",
  variable: "--font-notosans",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="w-full h-full grid grid-cols-2">
      <section className="flex flex-col justify-center gap-4 items-center">
        <h1 className={`text-3xl font-bold ${notoSans.className}`}>
          The only URL shortener you'll ever need
        </h1>

        <p className="text-sm">
          Shorten your long URLs, share them easily, and get a custom URL for
          your links.
        </p>

        <section className="mt-4 flex gap-8">
          <Link href="/generate">
            <button className="bg-blue-700 py-2 px-4 rounded font-bold hover:mix-blend-hard-light cursor-pointer">
              Try Now
            </button>
          </Link>

          <Link href="/github">
            <button className="bg-blue-700 py-2 px-4 rounded font-bold hover:mix-blend-hard-light cursor-pointer">
              Github
            </button>
          </Link>
        </section>
      </section>

      <section className="relative w-4/5 mx-auto">
        <Image
          src={"/frontpage.jpg"}
          alt=""
          fill={true}
          className="object-contain mix-blend-color-burn"
        />
      </section>
    </main>
  );
}