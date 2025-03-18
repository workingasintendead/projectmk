'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
  landscapeNeeds: string[];
  concerns: string[];
  propertySize: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    landscapeNeeds: [],
    concerns: [],
    propertySize: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;

    setFormData((prevFormData) => {
      const updatedArray = checked
        ? [...(prevFormData[name as keyof FormData] as string[]), value]
        : (prevFormData[name as keyof FormData] as string[]).filter(
            (item) => item !== value
          );

      return {
        ...prevFormData,
        [name]: updatedArray,
      };
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatusMessage('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage('Success! Your message has been sent.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          message: '',
          landscapeNeeds: [],
          concerns: [],
          propertySize: '',
        });
      } else {
        setStatusMessage(
          'Failed to send your message. Please try again later.'
        );
      }
    } catch (error) {
      console.error(error);
      setStatusMessage('An error occurred while sending your message.');
    }
  };

  return (
    <div className="container-fluid p-0">
      <Header />
      <div className="container py-5" style={{ marginTop: '80px' }}>
        <h1 className="text-center mb-5">Contact Us</h1>
        {statusMessage && (
          <div className="alert alert-info">{statusMessage}</div>
        )}

        <div className="row">
          <div className="col-md-6 mb-4">
            <h2>Contact Information</h2>
            <p>
              <strong>Phone:</strong> +1234567890
            </p>
            <p>
              <strong>Hours of Operation:</strong> Monday to Friday, 8am - 5pm
            </p>
            <p>
              <strong>Address:</strong> 1234 Landscape Rd, San Diego, CA 92101
            </p>
          </div>

          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label">
                  What landscape needs do you have?
                </label>
                <div>
                  {[
                    'Pool & Spa',
                    'Entire Re-Design and Install',
                    'Renovation',
                    'Landscape Maintenance',
                    'Drainage',
                    'Irrigation',
                    'Outdoor Living',
                    'Fire Feature',
                    'Water Feature',
                    'Landscape Lighting',
                  ].map((need) => (
                    <div key={need} className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={need}
                        name="landscapeNeeds"
                        value={need}
                        onChange={handleCheckboxChange}
                      />
                      <label className="form-check-label" htmlFor={need}>
                        {need}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">
                  I have concerns about my property&apos;s landscape:
                </label>
                <div>
                  {[
                    'My irrigation needs work',
                    'I have a pest problem',
                    'My plants need help/healthier',
                    'General garden maintenance',
                    'Drainage issues',
                    'Landscape lighting repair/upgrade',
                    'Poor communication with current landscape provider',
                    'Current landscape provider is not meeting expectations',
                  ].map((concern) => (
                    <div key={concern} className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={concern}
                        name="concerns"
                        value={concern}
                        onChange={handleCheckboxChange}
                      />
                      <label className="form-check-label" htmlFor={concern}>
                        {concern}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="propertySize" className="form-label">
                  What is the size of your property? *
                </label>
                <select
                  className="form-select"
                  id="propertySize"
                  name="propertySize"
                  value={formData.propertySize}
                  onChange={handleChange}
                  required
                >
                  <option value="">-Select-</option>
                  <option value="lessThanOneAcre">Less than 1 acre</option>
                  <option value="1To2Acre">1 to 2 acres</option>
                  <option value="moreThan2Acre">More than 2 acres</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
