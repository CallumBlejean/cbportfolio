import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="not-found">
      <h1>404</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/">Go back to Home</Link>
    </main>
  );
}

export default NotFound;