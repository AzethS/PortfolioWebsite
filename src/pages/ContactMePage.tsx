import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope,  } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactMePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="w-full max-w-2xl p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Contact Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-1">
            {/* Name Input */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="input input-bordered w-full mt-2"
                placeholder="Your name"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="input input-bordered w-full mt-2"
                placeholder="Your email"
                required
              />
            </div>

            {/* Message Textarea */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="textarea textarea-bordered w-full mt-2"
                placeholder="Your message"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </div>
          </form>

          {/* Contact Information */}
          <div className="lg:col-span-1 flex flex-col justify-center items-start">
            <h3 className="text-xl font-semibold mb-4">My Contact Information</h3>

            {/* Phone Number */}
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-blue-600" />
              <span className="text-gray-700">+1 234 567 890</span>
            </div>

            {/* Email Address */}
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-600" />
              <span className="text-gray-700">azeth@example.com</span>
            </div>

            {/* Social Media */}
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faGithub} className="mr-2 text-blue-600" />
              <a
                href="https://github.com/AzethS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600"
              >
                GitHub: AzethS
              </a>
            </div>

            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faLinkedin} className="mr-2 text-blue-600" />
              <a
                href="https://www.linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMePage;
