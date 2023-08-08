# LeapCode

## Overview
This project aims to create a coding practice platform for engineers to practice challenges while having the ease of viewing solution videos in different languages directly from the platform. The project leverages React for building the user interface, Tailwind CSS for styling, Next.js for server-side rendering, TypeScript for static typing, and Firebase for authentication and database management. The deployment will be handled via Vercel, ensuring seamless access to the live application.

## Authentication
Authentication is a critical part of the application, allowing users to sign up, log in, and reset their passwords. The auth page, navbar, and modal layout are carefully designed to provide a user-friendly experience. Firebase is integrated for handling authentication, and Recoil is used for managing the auth state within the application. Additional features include route guarding to protect certain pages and image optimizations to enhance performance.

## User Interface
The user interface, constructed with React and styled with Tailwind CSS, includes various components like the home page, problems table, YouTube video modal, and topbar. Particular attention was paid to creating responsive and interactive elements, such as hover effects, transitions, and logout functionality.

## Problems and Solutions
A core part of the platform is the problems section, where users can practice coding problems. Problems are created and managed through a series of components, including Workspace, Timer, ProblemDescription, PreferenceNav, and a customizable Code Editor. Test cases, problem descriptions, and data handling are meticulously implemented, and several sample problems are provided, including Two Sum, Reverse Linked List, and more.

## Data Management
The data management layer is powered by Firebase Firestore, responsible for storing and fetching problems, creating users in the database, and managing problem data. Loading skeletons are implemented to provide a smooth user experience during data retrieval.

## Future Design Implementations
Beyond the basic functionality, the project will incorporate several additional features that enhance user engagement. These include liking, disliking, starring problems, confetti celebrations for correct solutions, settings modal UI, and more.

## Challenges
During the development process, various challenges were encountered, such as solving hydration errors, handling bugs, and implementing complex functionalities like code submission and sandboxing techniques.

## Learnings
This project served as a valuable learning experience, offering insights into the integration of various technologies, UI/UX design principles, data management strategies, and deployment best practices.

## Deployment
The project will be successfully deployed to Vercel, following best practices for deployment, including setting up Firebase rules to secure data access.
