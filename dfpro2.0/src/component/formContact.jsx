import '../App.css'
import React from 'react'

export default function ContactForm() {

  return (
    <form
        action="https://formspree.io/f/mblgwqvr"
        method="POST"
        className="w-full max-w-xl mx-auto rounded-xl p-8 space-y-5 border border-white"
        >
        <h2 className="text-2xl font-semibold text-white">Send me a message 🚀</h2>
        <p className="text-sm text-gray-200">
            Got a project in mind? Let's build something awesome together.
        </p>

        <div>
            <input
            type="text"
            id="name"
            name="name"
            required
            className="text-sm mt-1 block w-full rounded-md border border-gray-300 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
            placeholder="Full name*"
            />
        </div>

        <div>
            <input
            type="email"
            id="email"
            name="email"
            required
            className="text-sm mt-1 block w-full rounded-md border border-gray-300 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
            placeholder="Email address*"
            />
        </div>

        <div>
            <input
            type="text"
            id="subject"
            name="subject"
            className="text-sm mt-1 block w-full rounded-md border border-gray-300 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
            placeholder="Subject"
            />
        </div>

        <div>
            <label htmlFor="message" className="block text-sm font-medium text-white">
            Tell me more about your project*
            </label>
            <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
            placeholder="Write your message here..."
            ></textarea>
        </div>

        <button
            type="submit"
            className="cursor-pointer w-full bg-slate-700 text-white py-2 px-4 rounded-md hover:bg-slate-800 transition duration-300 font-medium"
        >
            Send message
        </button>
    </form>
  )
}