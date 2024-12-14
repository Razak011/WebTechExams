import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-400 to-blue-500 text-white py-20 px-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Welcome to Campus Events Hub
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Discover, RSVP, and create events effortlessly.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link to="/events">
            <button className="px-6 py-3 bg-white text-green-700 font-bold rounded-lg hover:bg-gray-200">
              Browse Events
            </button>
          </Link>
          <Link to="/createEvent">
            <button className="px-6 py-3 bg-blue-800 font-bold rounded-lg hover:bg-blue-900">
              Create Event
            </button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-16 px-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">
          What Makes Us Special
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center max-w-xs text-center">
            <img
              src="/assets/calendar-icon.png"
              alt="Event Calendar"
              className="w-24 mb-4"
            />
            <h3 className="text-xl font-bold">Event Calendar</h3>
            <p className="mt-2 text-gray-600">
              Stay organized with an intuitive calendar view of all events.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-xs text-center">
            <img
              src="/assets/rsvp-icon.png"
              alt="RSVP"
              className="w-24 mb-4"
            />
            <h3 className="text-xl font-bold">Quick RSVP</h3>
            <p className="mt-2 text-gray-600">
              Join events instantly and manage your participation seamlessly.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-xs text-center">
            <img
              src="/assets/admin-tools-icon.png"
              alt="Admin Tools"
              className="w-24 mb-4"
            />
            <h3 className="text-xl font-bold">Admin Features</h3>
            <p className="mt-2 text-gray-600">
              Admins can create, manage, and oversee events effortlessly.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-16 px-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">
          Hear from Our Community
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="max-w-sm p-6 bg-gray-100 rounded-lg shadow-md">
            <p className="text-gray-700">
              "This platform has made campus life so much more vibrant!"
            </p>
            <p className="mt-4 text-green-700 font-bold">- Jane Doe</p>
          </div>
          <div className="max-w-sm p-6 bg-gray-100 rounded-lg shadow-md">
            <p className="text-gray-700">
              "Managing events has never been easier. Highly recommend!"
            </p>
            <p className="mt-4 text-green-700 font-bold">- John Smith</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-blue-500 text-white py-8 text-center">
        <nav className="flex justify-center gap-4">
          <Link to="/events" className="hover:underline">
            Events
          </Link>
          <Link to="/createEvent" className="hover:underline">
            Create Event
          </Link>
          <Link to="/calendar" className="hover:underline">
            Calendar
          </Link>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        </nav>
        <p className="mt-4">
          &copy; {new Date().getFullYear()} Campus Event Management Hub
        </p>
      </footer>
    </div>
  );
}
