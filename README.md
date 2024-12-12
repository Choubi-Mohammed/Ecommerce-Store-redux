# Ecommerce Store with Redux

This is a modern ecommerce application built using React and Redux. It utilizes the [Fake Store API](https://fakestoreapi.com/) to fetch and display product information, offering a user-friendly interface for browsing and viewing product details.

## Features

- **Dynamic Product Listing**: Fetch products dynamically from the Fake Store API.
- **Product Details View**: View detailed information about each product.
- **Global State Management**: Efficiently manage state with Redux.
- **Responsive Design**: Built using Semantic UI for a clean and responsive interface.
- **Error Handling**: Handles API request failures gracefully.

## Project Structure

```
Ecommerce-Store/
├── node_modules/
├── public/
├── src/
│   ├── assets/                # Static assets (images, icons, etc.)
│   ├── containers/            # Core components and pages
│   │   ├── Header.jsx         # Header component
│   │   ├── ProductComponent.jsx # Product card component
│   │   ├── Productdetails.jsx # Product details page
│   │   ├── ProductListing.jsx # Product listing page
│   ├── redux/                 # Redux setup
│   │   ├── actions/           # Action creators
│   │   │   ├── productActions.js
│   │   ├── contans/           # Action types
│   │   │   ├── action-types.js
│   │   ├── reducers/          # Reducers
│   │   │   ├── index.js       # Root reducer
│   │   │   ├── productReducer.js # Reducer for products
│   │   ├── store.js           # Redux store configuration
│   ├── App.jsx                # Main application component
│   ├── index.css              # Global styles
│   ├── main.jsx               # Application entry point
├── .gitignore                 # Git ignore file
├── eslint.config.js           # ESLint configuration
├── index.html                 # HTML entry point
├── package-lock.json          # Dependency lock file
├── package.json               # Project metadata and dependencies
└── README.md                  # Project documentation
```

## Technologies Used

- **React**: Frontend library for building user interfaces
- **Redux**: State management library
- **React Router DOM**: Routing and navigation
- **Semantic UI**: CSS framework for styling
- **Axios**: HTTP client for API requests

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Choubi-Mohammed/Ecommerce-Store-redux.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Ecommerce-Store-redux
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and go to:

   ```
   http://localhost:3000
   ```

## API Used

This project fetches data from the [Fake Store API](https://fakestoreapi.com/), which provides mock data for building and testing ecommerce applications.

## Usage

- **Home Page**: Displays a list of products fetched from the API.
- **Product Details**: Click on a product to view detailed information.
- **404 Page**: Displays a message for undefined routes.
- 
## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue.

## Author

**Mohammed Choubi**  
GitHub: [@Choubi-Mohammed](https://github.com/Choubi-Mohammed)
