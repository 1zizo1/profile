import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-white p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg mb-2">Name</label>
            <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg mb-2">Email</label>
            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg mb-2">Message</label>
            <textarea id="message" className="w-full p-2 border border-gray-300 rounded"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
