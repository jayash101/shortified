"use client";

import React from "react";

const Article = ({ title, description }) => {
  return (
    <section className="bg-gradient-to-l from-white to-blue-400 shadow-lg py-8 px-4 flex flex-col gap-4 items-start lg:overflow-auto rounded">
      <h1 className="text-2xl font-bold">{title}</h1>
      <article>{description}</article>
    </section>
  );
};

export default Article;
