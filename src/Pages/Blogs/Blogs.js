import React, { useState } from "react";
const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};
const Blogs = () => {
  return (
    <div className="my-24 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
       
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="space-y-4">
          <Item title="What are the different ways to manage a state in a React application?">
            SQL databases are relational, NoSQL databases are non-relational.
            SQL databases use structured query language and have a predefined
            schema. <br /> NoSQL databases have dynamic schemas for unstructured
            data. <br />
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable. <br />
            SQL databases are table-based, while NoSQL databases are document,
            key-value, graph, or wide-column stores. <br />
            SQL databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON.
          </Item>
          <Item title="How does prototypical inheritance work?">
            A JSON web token(JWT) is JSON Object which is used to securely
            transfer information over the web(between two parties). It can be
            used for an authentication system and can also be used for
            information exchange. The token is mainly composed of header,
            payload, signature. These three parts are separated by dots(.)..
            Authentication server verifies the credentials and issues a jwt
            signed using either a secret salt or a private key. User's Client
            uses the JWT to access protected resources by passing the JWT in
            HTTP Authorization header. Resource server then verifies the
            authenticity of the token using the secret salt/ public key.
          </Item>
          <Item title="What is a unit test? Why should we write unit tests?">
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node. js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language.
          </Item>
          <Item title="React vs. Angular vs. Vue?">
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them.
          </Item>
        </div>
      </div>
    </div>
  );
};

export default Blogs;