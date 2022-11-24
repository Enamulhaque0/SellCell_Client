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
            The Four Kinds of React State to Manage LOCAL STATE, GLOBAL STATE,
            SERVER STATE URL STATE
          </Item>
          <Item title="How does prototypical inheritance work?">
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the Prototype of an object,
            we use Object. getPrototypeOf and Object.em?
          </Item>
          <Item title="What is a unit test? Why should we write unit tests?">
            What is meant by unit testing?A unit test is a way of testing a unit
            - the smallest piece of code that can be logically isolated in a
            system. In most programming languages, that is a function, a
            subroutine, a method or property. The isolated part of the
            definition is important. They enable you to catch bugs early in the
            development process. Automated unit tests help a great deal with
            regression testing. They detect code smells in your codebase. For
            example, if you're having a hard time writing u unit tests for a
            piece of code, it might be a sign that your function is too complex.
          </Item>
          <Item title="React vs. Angular vs. Vue?">
            Angular​ In Angular, components are called directives those are used
            as markers on Document Object Model (DOM) elements, which can track
            and detect specific behavior of every single component.For that
            reason, Angular usually divides the UI part of components as
            attributes of HTML tags, and their behaviors in the form of
            JavaScript code. React In React, it usually combines the UI and
            behavior of components. For instance, a code that can create a
            "hello world" component in React and the same part of the code is
            responsible for developing a UI element as well as tracking its
            behavior. Vue​Vue gives the opportunity to customize it which allows
            combining the UI and behavior of components in the same script.
            Further, it allows using preprocessors in Vue rather than CSS that
            is a relief for developers nowadays. Vue can integrate other
            libraries like Bootstrap.
          </Item>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
