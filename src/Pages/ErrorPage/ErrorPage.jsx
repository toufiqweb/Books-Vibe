import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center max-w-lg">
        {/* Error Code */}
        <h1 className="text-9xl font-extrabold text-primary">404</h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mt-4">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="mt-3 text-base-content/70">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => window.history.back()}
            className="btn btn-outline btn-primary"
          >
            Go Back
          </button>

          <a href="/" className="btn btn-primary">
            Go Home
          </a>
        </div>

        {/* Optional Illustration */}
        <div className="mt-10">
          <img
            src="https://illustrations.popsy.co/gray/web-error.svg"
            alt="Error illustration"
            className="w-full max-w-xs mx-auto opacity-80"
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
