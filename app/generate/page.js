"use client";

import React, { useState } from "react";
import styles from "./Generate.module.css";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";

const Generate = () => {
  // state variables and toast notification configuration
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [suggestedWords, setSuggestedtWords] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");

  const success = (message) => toast.success(message);
  const error = (message) => toast.error(message);

  // fetching url from server
  const fetchUrl = async (options) => {
    const response = await fetch("/api/generate", options);

    const data = await response.json();

    if (!data.success) {
      error(data.message);
    } else {
      success(data.message);
    }

    setGeneratedUrl(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
    setUrl("");
    setShortUrl("");
  };

  // fetching input from user
  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shortUrl: shortUrl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetchUrl(requestOptions);
  };

  return (
    <section
      className={`${styles.generateSection} container py-2 pt-8 lg:py-4 px-4 mx-auto max-w-screen-md overflow-auto max-h-[80vh] h-full flex flex-col gap-8 justify-center`}
    >
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center ">
        Generate your short URL
      </h2>

      <section className="space-y-8">
        <article className="flex flex-col gap-2">
          <input
            type="text"
            className="shadow-sm bg-blue-300 border border-blue-300 text-sm font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:bg-blue-700 focus:font-normal block w-full p-2.5 placeholder-blue-400 shadow-sm-light"
            value={url}
            placeholder="Enter your URL"
            onChange={(e) => {
              setUrl(e.target.value);
              setSuggestedtWords(
                url.split(".")[0].length === 3 && url.split(".")[1]
              );
            }}
          />

          {suggestedWords && (
            <p>
              Suggestion:{" "}
              <span className="text-cyan-600 font-bold">{suggestedWords}</span>
            </p>
          )}
        </article>

        <input
          type="text"
          className="shadow-sm bg-blue-300 border border-blue-300 text-sm font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:bg-blue-700 focus:font-normal block w-full p-2.5 placeholder-blue-400 shadow-sm-light"
          value={shortUrl}
          placeholder="Enter your preferred short URL"
          onChange={(e) => setShortUrl(e.target.value)}
        />

        <section className="flex flex-col gap-2">
          <button
            className="py-3 px-5 text-sm font-medium text-center rounded-lg bg-gradient-to-l from-black to-blue-700 via-blue-500 cursor-pointer lg:w-full sm:w-fit focus:ring-4 focus:outline-none focus:ring-blue-300 hover:brightness-150 [transition:all_0.3s_linear] hover:[transition:all_0.3s_linear]"
            onClick={generate}
          >
            Send message
          </button>
          <ToastContainer theme="colored" position="bottom-right" />

          <p className="flex gap-1 justify-center">
            By clicking Shorten URL, I agree to the
            <Link href="/" className="hover:underline text-blue-300">
              Terms of Service,
            </Link>
            <Link href="/" className="hover:underline text-blue-300">
              Privacy Policy,
            </Link>
            and Use of Cookies.
          </p>
        </section>
      </section>

      <section className="h-16 flex justify-center items-center">
        {generatedUrl && (
          <article className="flex flex-col gap-2 text-center text-2xl">
            Generated URL:
            <code>
              <Link
                target="_blank"
                href={generatedUrl}
                className="text-teal-400 font-bold text-xl hover:underline"
              >
                {generatedUrl.slice(7)}
              </Link>
            </code>
          </article>
        )}
      </section>
    </section>
  );
};

export default Generate;
