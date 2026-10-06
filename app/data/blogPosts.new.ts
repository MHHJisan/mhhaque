export type BlogLanguage = "en" | "bn";

export interface BlogPostTranslation {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

export interface BlogPost {
  id: number;
  featured?: boolean;
  image?: string;
  en: BlogPostTranslation;
  bn: BlogPostTranslation;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    featured: true,
    image: "/blog/blog-government.png",

    en: {
      title: "Why Do Government Services Feel So Slow?",
      excerpt:
        "Is job security creating an incentive problem in Bangladesh's public sector? Exploring the paradox of government employment and organizational performance.",
      date: "2024-09-26",
      readTime: "12 min read",
      category: "Public Policy",

      content: `
Why Do Government Services Feel So Slow?
Is job security creating an incentive problem in Bangladesh's public sector?

PASTE YOUR EXISTING ENGLISH GOVERNMENT ARTICLE CONTENT HERE.

Keep the complete content that is currently inside your old
detail page's English post with id 4.
`,
    },

    bn: {
      title: "সরকারি সেবাগুলো কেন এত ধীর মনে হয়?",
      excerpt:
        "বাংলাদেশের পাবলিক সেক্টরে চাকরির নিরাপত্তা কি একটি প্রণোদনা সমস্যা তৈরি করছে? সরকারি কর্মসংস্থান এবং সাংগঠনিক কর্মক্ষমতার বিষয়ে অন্বেষণ।",
      date: "2024-09-26",
      readTime: "১২ মিনিটের পাঠ",
      category: "পাবলিক পলিসি",

      content: `
সরকারি সেবাগুলো কেন এত ধীর মনে হয়?
বাংলাদেশের পাবলিক সেক্টরে চাকরির নিরাপত্তা কি একটি প্রণোদনা সমস্যা তৈরি করছে?

PASTE YOUR EXISTING BANGLA GOVERNMENT ARTICLE CONTENT HERE.

Keep the complete content that is currently inside your old
detail page's Bangla post with id 4.
`,
    },
  },

  {
    id: 2,

    en: {
      title: "Getting Started with Next.js 14",
      excerpt:
        "A comprehensive guide to building modern web applications with Next.js 14 and the App Router.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "React",

      content: `
Getting Started with Next.js 14

A comprehensive guide to building modern web applications with Next.js 14 and the App Router.

More detailed content coming soon.
`,
    },

    bn: {
      title: "Next.js 14 দিয়ে শুরু করা",
      excerpt:
        "Next.js 14 এবং App Router দিয়ে আধুনিক ওয়েব অ্যাপ্লিকেশন তৈরির একটি বিস্তারিত গাইড।",
      date: "2024-01-15",
      readTime: "৫ মিনিটের পাঠ",
      category: "React",

      content: `
Next.js 14 দিয়ে শুরু করা

Next.js 14 এবং App Router দিয়ে আধুনিক ওয়েব অ্যাপ্লিকেশন তৈরির একটি বিস্তারিত গাইড।

বিস্তারিত কনটেন্ট শীঘ্রই যোগ করা হবে।
`,
    },
  },

  {
    id: 3,

    en: {
      title: "TypeScript Best Practices for 2024",
      excerpt:
        "Learn the essential TypeScript patterns and practices that will improve your code quality.",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "TypeScript",

      content: `
TypeScript Best Practices for 2024

Learn the essential TypeScript patterns and practices that can improve your code quality.

More detailed content coming soon.
`,
    },

    bn: {
      title: "২০২৪ এর জন্য TypeScript সেরা অনুশীলন",
      excerpt:
        "আপনার কোডের গুণমান উন্নত করতে প্রয়োজনীয় TypeScript প্যাটার্ন এবং অনুশীলনগুলি শিখুন।",
      date: "2024-01-10",
      readTime: "৮ মিনিটের পাঠ",
      category: "TypeScript",

      content: `
২০২৪ এর জন্য TypeScript সেরা অনুশীলন

আপনার কোডের গুণমান উন্নত করতে প্রয়োজনীয় TypeScript প্যাটার্ন এবং অনুশীলনগুলি শিখুন।

বিস্তারিত কনটেন্ট শীঘ্রই যোগ করা হবে।
`,
    },
  },

  {
    id: 4,

    en: {
      title: "Building Scalable APIs with Node.js",
      excerpt:
        "Explore architectural patterns and best practices for creating production-ready Node.js APIs.",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Backend",

      content: `
Building Scalable APIs with Node.js

Explore architectural patterns and best practices for creating production-ready Node.js APIs.

More detailed content coming soon.
`,
    },

    bn: {
      title: "Node.js দিয়ে স্কেলেবল API তৈরি করা",
      excerpt:
        "প্রোডাকশন-রেডি Node.js API তৈরির জন্য আর্কিটেকচারাল প্যাটার্ন এবং সেরা অনুশীলনগুলি অন্বেষণ করুন।",
      date: "2024-01-05",
      readTime: "৬ মিনিটের পাঠ",
      category: "ব্যাকএন্ড",

      content: `
Node.js দিয়ে স্কেলেবল API তৈরি করা

প্রোডাকশন-রেডি Node.js API তৈরির জন্য আর্কিটেকচারাল প্যাটার্ন এবং সেরা অনুশীলনগুলি অন্বেষণ করুন।

বিস্তারিত কনটেন্ট শীঘ্রই যোগ করা হবে।
`,
    },
  },

  {
    id: 5,

    en: {
      title:
        "My React Learning Roadmap: From Hooks to Routing, State Management & Production",

      excerpt:
        "A structured look at my React learning journey—from Hooks and event handling to state management, routing, build processes, styling libraries, and production development.",

      date: "2026-09-27",

      readTime: "10 min read",

      category: "React",

      content: `
When learning React, it is easy to focus only on creating components and making the UI work.

However, becoming comfortable with React development requires understanding much more than just components.

A real-world React application involves state management, event handling, conditional rendering, routing, styling, build processes, deployment, and application architecture.

I recently organized my React learning roadmap into several important areas—from Hooks and event handling to state management, build processes, styling libraries, and routing.

My goal is not simply to memorize React APIs, but to understand how these concepts work together when building real applications.

1. React Hooks — The Foundation of Modern Functional Components

Hooks are one of the most important parts of modern React development.

They allow functional components to use state, effects, context, refs, and other React capabilities.

useState

useState allows a component to store information that can change over time.

Common examples include:

- Form inputs
- Counters
- Modal visibility
- Selected items
- Loading states
- UI preferences

const [count, setCount] = useState(0);

The important concept is understanding that state represents information that can affect what the component renders.

useEffect

useEffect is used when a component needs to synchronize with something outside of React.

Examples include:

- Fetching data
- Working with browser APIs
- Setting up timers
- Subscribing to external systems
- Integrating with external libraries

One important lesson is that useEffect should not automatically be used for every piece of logic.

Understanding when an Effect is actually necessary can make an application much simpler.

useReducer

When state logic becomes more complicated, useReducer can provide a more structured approach to managing state transitions.

dispatch({
  type: "SUCCESS",
  payload: data
});

It becomes particularly useful when multiple state values are connected to the same user action.

useContext

Context allows information to be shared with components without manually passing props through every intermediate component.

Common examples include:

- Authentication
- Theme
- Language
- User information
- Application configuration

However, Context is not automatically a replacement for every state-management solution.

The important part is understanding where shared state actually belongs.

useCallback

useCallback allows a function definition to be cached between renders.

It can be useful when passing callbacks to memoized child components or in specific performance-sensitive situations.

But it should not be added everywhere simply because it sounds like an optimization.

useMemo

useMemo can cache the result of an expensive calculation.

const filteredProducts = useMemo(() => {
  return products.filter(
    product => product.category === selectedCategory
  );
}, [products, selectedCategory]);

The important question is not just "Can I use useMemo here?"

The better question is:

"Is there actually expensive work that benefits from memoization?"

useRef

useRef allows a component to hold a value that persists between renders without causing a re-render when that value changes.

It is commonly used for:

- Accessing DOM elements
- Storing timer IDs
- Keeping mutable values between renders
- Working with browser APIs

useImperativeHandle

useImperativeHandle allows a component to customize what it exposes through a ref.

It is less common than some other Hooks, but it is useful to understand for advanced React development.

useLayoutEffect

useLayoutEffect is related to useEffect, but it runs before the browser repaints.

It can be useful for:

- DOM measurements
- Layout calculations
- Visual positioning
- Certain browser/UI integrations

2. The Rules of Hooks

Learning Hooks is not only about memorizing their names.

It is equally important to understand where Hooks can and cannot be called.

For example, this is incorrect:

if (isLoggedIn) {
  const [user, setUser] = useState(null);
}

Hooks should be called at the top level of a React component or custom Hook.

They should not be called inside conditions, loops, nested functions, or after conditional returns.

Understanding this rule is especially important when debugging real React applications.

3. Event Handling in React

User interaction is at the center of most web applications.

Buttons, forms, inputs, keyboard actions, and mouse interactions all generate events that our application needs to handle.

Common React events include:

- onClick
- onChange
- onSubmit
- onMouseEnter
- onKeyDown

Understanding event handling in both functional and class components is also useful, especially when working with existing or legacy React codebases.

4. Conditional Rendering

Real applications rarely display the same UI all the time.

A user can be logged in, logged out, loading, an administrator, or viewing an empty or error state.

Common approaches include:

if statements

Ternary operators

Logical AND operators

The goal is not simply to know these syntaxes, but to understand which approach makes the UI logic easier to read and maintain.

5. Build and Development

Writing React code is only one part of development.

An application eventually needs to be developed, tested, built, and deployed.

Important areas include:

- Development vs production environments
- Environment variables
- Build configuration
- Deployment
- Error handling
- Performance
- CI/CD

Understanding what happens between development and production is an important part of becoming a well-rounded frontend developer.

6. Frameworks and Styling Libraries

The React ecosystem provides different approaches to styling applications.

Two important concepts are Styled Components and CSS Modules.

Styled Components allows styles to be written closely alongside components.

CSS Modules provide locally scoped CSS classes and help avoid unwanted global CSS conflicts.

Understanding different styling approaches is useful because every React codebase does not use the same styling architecture.

7. State Management Libraries

As an application grows, state management becomes increasingly important.

React provides tools such as useState, useReducer, and Context.

Larger applications may also use dedicated state-management libraries.

Redux

Redux provides a structured approach to managing shared application state.

Consider an e-commerce application:

Navbar
   ↓
Cart Count

Product Page
   ↓
Add Product

Cart Page
   ↓
Remove Product

Checkout
   ↓
Read Cart

The cart state is shared by different parts of the application.

This is a practical situation where global state management can make sense.

However, not every piece of state should automatically go into Redux.

Component-specific UI state can often remain local to the component.

MobX

MobX takes a different approach to state management and focuses heavily on reactive state.

Learning different state-management approaches helps me understand that there is no single solution for every application.

8. Routing Libraries

Most modern web applications contain multiple pages or views.

For example:

/
 /about
 /products
 /products/123
 /cart
 /checkout
 /login
 /dashboard

Routing determines which component should be displayed for a particular URL.

React Router

React Router is a widely used routing solution in the React ecosystem.

It provides concepts such as:

- Routes
- Nested routes
- Dynamic parameters
- Navigation
- Links
- Protected routes

For example:

<Route
  path="/products/:id"
  element={<ProductDetails />}
/>

Here, the dynamic id parameter can be used to identify a specific product.

Reach Router

Reach Router was another routing library in the React ecosystem.

Its work was eventually consolidated into React Router, so for modern projects, understanding current React Router patterns is more relevant.

9. Connecting Everything Together

Looking at these topics individually can make React feel like a collection of APIs:

useState
useEffect
useReducer
useContext
useCallback
useMemo
useRef
useImperativeHandle
useLayoutEffect

But the real objective is not memorizing these APIs.

It is understanding how they work together.

User Interaction
       ↓
Event Handler
       ↓
State Update
       ↓
React Re-render
       ↓
Conditional Rendering
       ↓
Updated UI

As the application becomes larger, the picture expands:

React Components
       ↓
Local State
       ↓
Shared State
       ↓
State Management
       ↓
Routing
       ↓
API Integration
       ↓
Build
       ↓
Deployment

10. My Biggest Takeaway

One thing I am realizing while studying React is that learning a framework is not about memorizing APIs.

Knowing what useMemo does is useful.

But knowing when not to use useMemo can be even more valuable.

Knowing Redux is useful.

But knowing when React's local state is already enough is more important.

Knowing useEffect is essential.

But understanding when an Effect is unnecessary can prevent a lot of unnecessary complexity.

Knowing routing is important.

But understanding how routing fits into the overall application architecture is what makes the knowledge practical.

My Current Goal

So my goal is not simply:

"Learn React."

My goal is:

"Understand how to design, build, maintain, and scale React applications."

One concept at a time.
One project at a time.
One problem at a time.

That is the direction I am taking with my React learning journey. 🚀
`,
    },

    bn: {
      title:
        "আমার React শেখার রোডম্যাপ: Hooks থেকে Routing, State Management এবং Production পর্যন্ত",

      excerpt:
        "Hooks, Event Handling থেকে শুরু করে State Management, Routing, Styling, Build Process এবং Production Development পর্যন্ত আমার React শেখার একটি structured roadmap।",

      date: "2026-09-27",

      readTime: "১০ মিনিটের পাঠ",

      category: "React",

      content: `
React শেখার সময় শুধু Component তৈরি করা এবং UI দেখাতে পারলেই React শেখা সম্পূর্ণ হয় না।

একটি বাস্তব React application তৈরি করতে হলে Hooks, State Management, Event Handling, Conditional Rendering, Routing, Styling, Build Process এবং Application Architecture সম্পর্কে পরিষ্কার ধারণা থাকা প্রয়োজন।

সম্প্রতি আমি আমার React শেখার বিষয়গুলোকে একটি roadmap হিসেবে সাজাচ্ছি।

এর মধ্যে রয়েছে Hooks থেকে শুরু করে Event Handling, State Management, Build Process, Styling Libraries এবং Routing পর্যন্ত বিভিন্ন গুরুত্বপূর্ণ বিষয়।

আমার লক্ষ্য শুধু React-এর syntax মুখস্থ করা নয়।

বরং এই concept-গুলো বাস্তব application-এ কীভাবে একসাথে কাজ করে, সেটি বোঝা।

১. React Hooks — Modern Functional Components-এর ভিত্তি

Modern React development-এর সবচেয়ে গুরুত্বপূর্ণ বিষয়গুলোর একটি হলো Hooks।

Hooks-এর মাধ্যমে functional component-এর মধ্যে state, effects, context, refs এবং অন্যান্য React functionality ব্যবহার করা যায়।

useState

useState component-এর এমন data সংরক্ষণ করতে ব্যবহার করা হয়, যেটা সময়ের সাথে পরিবর্তিত হতে পারে।

যেমন:

- Form input
- Counter
- Modal visibility
- Selected item
- Loading state
- UI preferences

const [count, setCount] = useState(0);

এখানে গুরুত্বপূর্ণ বিষয় হলো বোঝা যে state এমন information, যার পরিবর্তনের কারণে component-এর UI-তেও পরিবর্তন আসতে পারে।

useEffect

useEffect সাধারণত component-এর বাইরে থাকা কোনো system বা operation-এর সাথে synchronize করার জন্য ব্যবহার করা হয়।

যেমন:

- API থেকে data fetch করা
- Browser API ব্যবহার করা
- Timer তৈরি করা
- External subscription
- Third-party library-এর সাথে কাজ করা

তবে একটি গুরুত্বপূর্ণ বিষয় হলো, প্রতিটি কাজের জন্য useEffect ব্যবহার করা উচিত নয়।

কখন Effect প্রয়োজন এবং কখন প্রয়োজন নেই—এটি বোঝা application-এর complexity কমাতে সাহায্য করে।

useReducer

State logic যখন complex হয়ে যায়, তখন useReducer state management-কে আরও structured করতে পারে।

dispatch({
  type: "SUCCESS",
  payload: data
});

বিশেষ করে একটি user action-এর কারণে যখন একাধিক state পরিবর্তন হয়, তখন useReducer বেশ কার্যকর হতে পারে।

useContext

Component tree-এর অনেক গভীরে কোনো information পাঠানোর প্রয়োজন হলে বারবার props pass না করে Context ব্যবহার করা যায়।

যেমন:

- Authentication
- Theme
- Language
- User information
- Application configuration

তবে Context মানেই সব ধরনের global state-এর জন্য ব্যবহার করতে হবে—এমন নয়।

কোন state কোথায় রাখা উচিত, সেটাও React শেখার গুরুত্বপূর্ণ অংশ।

useCallback

useCallback একটি function definition-কে render-এর মধ্যে cache করে রাখতে সাহায্য করে।

বিশেষ কিছু performance-sensitive পরিস্থিতিতে এটি useful হতে পারে।

তবে শুধু optimization-এর জন্য সব জায়গায় useCallback ব্যবহার করা উচিত নয়।

useMemo

useMemo কোনো expensive calculation-এর result cache করে রাখতে সাহায্য করতে পারে।

const filteredProducts = useMemo(() => {
  return products.filter(
    product => product.category === selectedCategory
  );
}, [products, selectedCategory]);

তাই প্রশ্ন শুধু এটা নয় যে "এখানে useMemo ব্যবহার করা যাবে কি না?"

বরং প্রশ্ন হওয়া উচিত:

"এখানে কি আসলেই এমন expensive calculation আছে যার জন্য memoization প্রয়োজন?"

useRef

useRef এমন একটি value ধরে রাখতে পারে যা component-এর re-render ঘটায় না।

এটি ব্যবহার করা হয়:

- DOM element access করতে
- Timer ID রাখতে
- Mutable value ধরে রাখতে
- Browser API-এর সাথে কাজ করতে

useImperativeHandle

useImperativeHandle ব্যবহার করে component তার ref-এর মাধ্যমে parent component-এর কাছে কী expose করবে তা customize করা যায়।

এটি সাধারণ Hooks-এর তুলনায় কম ব্যবহৃত হলেও advanced React development-এর জন্য ধারণাটি গুরুত্বপূর্ণ।

useLayoutEffect

useLayoutEffect অনেকটা useEffect-এর মতো হলেও browser repaint-এর আগে কাজ করতে পারে।

এটি DOM measurement, layout calculation এবং কিছু visual integration-এর ক্ষেত্রে useful হতে পারে।

২. Hooks ব্যবহারের নিয়ম

Hooks-এর নাম জানা যথেষ্ট নয়।

কোথায় এবং কীভাবে Hooks ব্যবহার করা যায় সেটাও জানা জরুরি।

যেমন এটি ভুল:

if (isLoggedIn) {
  const [user, setUser] = useState(null);
}

Hooks সাধারণত React component বা custom Hook-এর top level-এ call করতে হয়।

Condition, loop, nested function বা conditional return-এর পরে Hooks call করা উচিত নয়।

বাস্তব React application-এ debugging করার সময় এই বিষয়টি অত্যন্ত গুরুত্বপূর্ণ।

৩. React-এ Event Handling

User interaction প্রায় প্রতিটি web application-এর একটি গুরুত্বপূর্ণ অংশ।

Button click, form submit, input change, keyboard action এবং mouse interaction—সবকিছুর জন্য event handling প্রয়োজন।

কিছু গুরুত্বপূর্ণ React event হলো:

- onClick
- onChange
- onSubmit
- onMouseEnter
- onKeyDown

Functional component-এর পাশাপাশি existing বা legacy React codebase-এর জন্য class component-এর event handling বোঝাও কাজে আসতে পারে।

৪. Conditional Rendering

বাস্তব application-এ সবসময় একই UI দেখানো হয় না।

একজন user logged in, logged out, loading অবস্থায়, admin অথবা error/empty state-এ থাকতে পারে।

Common approaches include:

- if statement
- Ternary operator
- Logical AND operator

লক্ষ্য শুধু syntax জানা নয়।

কোন পরিস্থিতিতে কোন approach ব্যবহার করলে code আরও readable এবং maintainable হবে, সেটি বোঝাও গুরুত্বপূর্ণ।

৫. Build এবং Development

React application-এর code লেখা development-এর একটি অংশ মাত্র।

Application-কে develop, test, build এবং শেষ পর্যন্ত production-এ deploy করতে হয়।

গুরুত্বপূর্ণ বিষয়গুলোর মধ্যে রয়েছে:

- Development বনাম Production environment
- Environment variables
- Build configuration
- Deployment
- Error handling
- Performance
- CI/CD

Development থেকে production deployment পর্যন্ত কী ঘটে, সেটি বোঝা একজন frontend developer-এর জন্য গুরুত্বপূর্ণ।

৬. Frameworks এবং Styling Libraries

React application style করার জন্য বিভিন্ন approach রয়েছে।

দুটি গুরুত্বপূর্ণ concept হলো Styled Components এবং CSS Modules।

Styled Components-এর মাধ্যমে component-এর সাথে styling closely associate করা যায়।

CSS Modules locally scoped CSS class ব্যবহার করতে সাহায্য করে এবং unwanted global CSS conflict কমাতে পারে।

বিভিন্ন styling approach সম্পর্কে জানা useful, কারণ প্রতিটি React project একই styling architecture ব্যবহার করে না।

৭. State Management Libraries

Application বড় হওয়ার সাথে সাথে state management আরও গুরুত্বপূর্ণ হয়ে ওঠে।

React নিজেই useState, useReducer এবং Context-এর মতো tools দেয়।

তবে বড় application-এ dedicated state-management library ব্যবহার করা হতে পারে।

Redux

Redux shared application state manage করার জন্য একটি structured approach দেয়।

ধরা যাক একটি e-commerce application:

Navbar
   ↓
Cart Count

Product Page
   ↓
Add Product

Cart Page
   ↓
Remove Product

Checkout
   ↓
Read Cart

এখানে cart state application-এর বিভিন্ন অংশে প্রয়োজন হচ্ছে।

এই ধরনের পরিস্থিতিতে global state management যুক্তিযুক্ত হতে পারে।

তবে প্রতিটি state automatically Redux-এ রাখা প্রয়োজন নেই।

Component-specific UI state অনেক সময় component-এর local state হিসেবেই রাখা যথেষ্ট।

MobX

MobX state management-এর জন্য ভিন্ন ধরনের reactive approach অনুসরণ করে।

বিভিন্ন state-management solution শেখার মাধ্যমে আমি বুঝতে পারছি যে প্রতিটি application-এর জন্য একই solution প্রয়োজন হয় না।

৮. Routing Libraries

অধিকাংশ modern web application-এ একাধিক page বা view থাকে।

যেমন:

/
 /about
 /products
 /products/123
 /cart
 /checkout
 /login
 /dashboard

Routing নির্ধারণ করে কোন URL-এর জন্য কোন component display হবে।

React Router

React Router React ecosystem-এর একটি পরিচিত routing solution।

এর মাধ্যমে routes, nested routes, dynamic parameters, navigation, links এবং protected-route pattern নিয়ে কাজ করা যায়।

উদাহরণ:

<Route
  path="/products/:id"
  element={<ProductDetails />}
/>

এখানে URL-এর dynamic id ব্যবহার করে নির্দিষ্ট product-এর information দেখানো যেতে পারে।

Reach Router

Reach Router React ecosystem-এর একটি routing library ছিল।

পরবর্তীতে এর কাজ React Router-এর সাথে একীভূত হয়েছে।

তাই নতুন project-এর ক্ষেত্রে বর্তমান React Router architecture শেখাই বেশি relevant।

৯. সবকিছু একসাথে কীভাবে কাজ করে

এই বিষয়গুলো আলাদাভাবে পড়লে React-কে অনেকগুলো API-এর collection মনে হতে পারে:

useState
useEffect
useReducer
useContext
useCallback
useMemo
useRef
useImperativeHandle
useLayoutEffect

কিন্তু আসল লক্ষ্য এগুলো মুখস্থ করা নয়।

বরং এগুলো কীভাবে একসাথে কাজ করে সেটি বোঝা।

User Interaction
       ↓
Event Handler
       ↓
State Update
       ↓
React Re-render
       ↓
Conditional Rendering
       ↓
Updated UI

Application বড় হওয়ার সাথে সাথে picture আরও বড় হয়:

React Components
       ↓
Local State
       ↓
Shared State
       ↓
State Management
       ↓
Routing
       ↓
API Integration
       ↓
Build
       ↓
Deployment

১০. এই Roadmap থেকে আমার সবচেয়ে বড় উপলব্ধি

React শেখার সময় আমি একটি বিষয় বুঝতে পারছি:

কোনো framework শেখা মানে শুধু API মুখস্থ করা নয়।

useMemo কী করে জানা গুরুত্বপূর্ণ।

কিন্তু কখন useMemo ব্যবহার না করাই ভালো, সেটাও জানা গুরুত্বপূর্ণ।

Redux জানা গুরুত্বপূর্ণ।

কিন্তু কখন React-এর local state-ই যথেষ্ট, সেটি বোঝা আরও গুরুত্বপূর্ণ।

useEffect জানা প্রয়োজন।

কিন্তু কখন কোনো Effect-এর প্রয়োজনই নেই, সেটি বোঝা application-এর unnecessary complexity কমাতে পারে।

Routing জানা গুরুত্বপূর্ণ।

কিন্তু routing কীভাবে পুরো application architecture-এর সাথে কাজ করে, সেটি বোঝাই practical knowledge তৈরি করে।

আমার বর্তমান লক্ষ্য

তাই আমার লক্ষ্য শুধু:

"React শেখা।"

বরং আমার লক্ষ্য:

"React ব্যবহার করে কীভাবে ভালোভাবে application design, build, maintain এবং scale করা যায়—সেটা শেখা।"

একটি concept করে।
একটি project করে।
একটি problem করে।

এভাবেই আমার React learning journey এগিয়ে নিতে চাই। 🚀
`,
    },
  },
];
