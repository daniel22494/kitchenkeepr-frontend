# KitchenKeepr

KitchenKeepr is an app with a mission to simplify cooking by offering a user-friendly platform with a vast collection of easy web recipes. Our intuitive design and step-by-step guides ensure stress-free cooking for all levels. With customizable categorized filters, users can find recipes that fit their preferences. The app also fosters a supportive community of food enthusiasts, encouraging sharing and learning together. Join us in bringing the joy of cooking back to your kitchen, one easy web recipe at a time.

## Features

-Browse a catalog of recipes with sources, ingredients, methods, and detailed descriptions from recipe creators
-Archive selected recipes in a favorites section
-Filter recipes by user preferences
-Access recipe information in a recipe card stored in the favorites folder
-Delete recipe cards from favorites
-Generate ingredient replacements using the OpenAI API

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1) Clone the repository: git clone (https://github.com/daniel22494/kitchenkeepr-frontend.git)
2) Install dependencies for the client: cd client & npm install
3) Install dependencies for the server: cd server & npm install
4) Install OpenAI Api: npm install openai 
5) Create and configure the database in the terminal
    npx knex migrate:latest
    npx knex seed:run
6) Setup environment variables and install dotenv: npm i dotenv
7) Include OpenAI Api keys inside environment variables folder (https://platform.openai.com/docs/api-reference)
8) Run the development server:
    cd client
    npm run dev
9) Run the backend server:
    cd into server
    npm server.js


### Usage

1) Either browse all recipes or choose a category to explore
2) When you see a recipe you like press the "keep" button and it will be saved to your favorites
3) Browse your list of favorites and choose which recipe you'd like the details of
4) Observe all the details of the recipe including the creator, description, ingredients needed, methods, and sources

1) generate an ingredient replacement using a single word prompt in Ingredient Replacement tab

### To be added very soon
-screenshots
-techstack
-end points
-future implemenations
-key learnings
-licence, credits
-acknowledgments



