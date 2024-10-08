# URL Shortening App

This is a URL shortening application built with React, Next.js, and TypeScript. It integrates with an external API to shorten URLs and stores them persistently in `localStorage` to keep the links available even after the browser is refreshed.

## Features
- Shorten URLs using an external API.
- Persist shortened links using `localStorage`.
- Copy shortened URLs to the clipboard with a single click.
- Responsive and user-friendly interface.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation
1. Clone the repository:  
    git clone [repository-url]


2. Navigate to the project directory:
    cd url-shortening-app

3. Install dependencies:
    npm install
    # or
    yarn install

4. Environment Setup
    Create a .env.local file in the root directory with the following content:
    URLDAY_API_KEY=your-api-key-here

    Replace your-api-key-here with the actual API key provided.

5. Running the Project
    To start the development server, run:
    npm run dev
    # or
    yarn dev

    The application will be accessible at http://localhost:3000.


## Additional Notes and Improvements

1. Persistent Links: The application uses localStorage to keep the shortened URLs available even when the page is refreshed. This provides a seamless user experience.

2. Error Handling: API errors are managed gracefully with error messages displayed when the shortening process fails.

3. UI Enhancements: The application features a responsive design with dynamic states (e.g., showing "Copied" when a link is copied) for better interactivity.

4. Future Improvements: Adding user authentication to save links for different users, allowing customization of the shortened URLs, and adding analytics to track clicks on shortened links.


## Technologies Used

- Frontend: React, Next.js, TypeScript, Tailwind CSS
- API Integration: Fetch API
- Storage: Local Storage for persisting links


## Contact

For any questions or feedback, please contact Franco Saavedra at francosaavedra@hotmail.com



