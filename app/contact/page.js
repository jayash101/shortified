import React from "react";

// contact page
const Contact = () => {
  return (
    <section className="h-full flex justify-center items-center">
      <article className="flex flex-col gap-2 w-1/2">
        <h1 className="mb-8 text-4xl tracking-tight font-extrabold text-center">
          Contact Form
        </h1>

        <input
          type="text"
          className="shadow-sm bg-blue-300 border border-blue-300 text-sm font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:bg-blue-700 focus:font-normal block w-full p-2.5 placeholder-blue-400 shadow-sm-light"
          placeholder="Full name"
        />
        <input
          type="text"
          className="shadow-sm bg-blue-300 border border-blue-300 text-sm font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:bg-blue-700 focus:font-normal block w-full p-2.5 placeholder-blue-400 shadow-sm-light"
          placeholder="Phone Number (+977)"
        />

        <div className="flex items-start mb-5 mt-2">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50"
              required
            />
          </div>
          <label htmlFor="remember" className="ms-2 text-sm font-medium selection:select-none">
            Remember me
          </label>
        </div>
        <button
          className="py-3 px-5 text-sm font-medium text-center rounded-lg bg-gradient-to-l from-black to-blue-700 via-blue-500 cursor-pointer lg:w-full sm:w-fit focus:ring-4 focus:outline-none focus:ring-blue-300 hover:brightness-150 [transition:all_0.3s_linear] hover:[transition:all_0.3s_linear]"
        >
          Submit
        </button>
      </article>
    </section>
  );
};

export default Contact;
