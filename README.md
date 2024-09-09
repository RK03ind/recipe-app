# Recipe App

This is a Recipe Application built using React, TypeScript, TailwindCSS, Shadcn, and TanStack Query. Users can search for recipes based on ingredients or dish names, view detailed recipes, filter by meal type, and enjoy additional features like dark mode and a "Surprise Me" random recipe feature.

## Features

- Recipe Search: Search for recipes by entering dish names or ingredients(ingredients currently not supported by Dummy JSON API).

- Filter Recipes: Use the filter option to display recipes based on the selected meal type (e.g., Breakfast, Lunch, Dinner, etc.).

- Recipe Details: Click on any recipe to view detailed information such as ingredients, cooking instructions, preparation time, etc.
  Filter by Meal Type: Filter recipes based on meal types (Breakfast, Lunch, Dinner, etc.).

- "Surprise Me" Feature: Click the "Surprise Me" button to view a random recipe.

- Infinite Scroll: Continuously load more recipes as you scroll to the bottom of the page.

- Fully Responsive: The app is designed to be responsive and works seamlessly on mobile devices.

## Tech Stack

- React: For building user interfaces.

- TypeScript: To add static type checking.

- TailwindCSS: For CSS styling.

- Shadcn: For reusable components

- TanStack Query (React Query): For efficient API requests and state management.

The application fetches data from DummyJSON, which provides mock recipe data.

## Installation

Follow these steps to set up the project locally:

Navigate to the project directory:

`cd recipe-app`

Install dependencies:

`npm install`

Start the development server:

`npm run dev`

This will start the application on http://localhost:5173.
