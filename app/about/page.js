"use client";

import Article from "@/components/Article";
import React from "react";

// about features content
export const aboutFeatures = [
  {
    id: 1,
    title: "Easy",
    description:
      "Shortified is easy and fast, enter the long link and add your own custom short link to get your shortened link.",
  },

  {
    id: 2,
    title: "Shortened",
    description:
      "Use any link, no matter what size, Shortified always shortens.",
  },

  {
    id: 3,
    title: "Secure",
    description: "It is fast and secure, our service provides data safety.",
  },

  {
    id: 4,
    title: "Devices",
    description: "Compatible with all types of browsers.",
  },

  {
    id: 5,
    title: "Reliability",
    description: "Our links are reliable, secure, and never expire.",
  },

  {
    id: 6,
    title: "Sharing",
    description:
      "Researchers and academics can use URL shorteners to share links to their published papers, making it easier for others to access and read their work.",
  },
];

// about page
const About = () => {
  return (
    <section className="px-4 py-16 h-full lg:overflow-auto w-2/3 mx-auto text-black grid grid-cols-1 lg:grid-cols-3 gap-8">
      {aboutFeatures && aboutFeatures.length > 0
        ? aboutFeatures.map((feature) => (
            <Article
              key={feature.id}
              title={feature.title}
              description={feature.description}
            />
          ))
        : null}
    </section>
  );
};

export default About;
