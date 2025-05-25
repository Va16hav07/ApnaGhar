import React, { useState, FormEvent, useEffect } from 'react';
import { User, Mail, Phone, MessageSquare } from 'lucide-react';
import { sendEmail } from '../utils/emailService';

interface ContactFormProps {
  propertyId?: string;
  propertyTitle?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ propertyId, propertyTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: propertyTitle 
      ? `I'm interested in the property: ${propertyTitle} (ID: ${propertyId})`
      : '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Use the sendEmail function from emailService.ts
      const success = await sendEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        propertyId,
        propertyTitle
      });
      
      if (success) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        setError('Failed to send your message. Please try again later.');
      }
    } catch (err) {
      console.error('Error sending email:', err);
      setError('Failed to send your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form if property changes
  useEffect(() => {
    if (propertyTitle) {
      setFormData(prev => ({
        ...prev,
        message: `I'm interested in the property: ${propertyTitle} (ID: ${propertyId})`
      }));
    }
  }, [propertyId, propertyTitle]);

  if (isSubmitted) {
    return (
      <div className="bg-success-50 p-4 rounded-lg text-success-700 animate-fade-in">
        <h3 className="font-semibold text-lg mb-2">Thank you for your interest!</h3>
        <p>We've received your request and will get in touch with you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
        <div className="relative">
          <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            id="name"
            name="name"
            className="input pl-10"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
        <div className="relative">
          <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            id="email"
            name="email"
            className="input pl-10"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
        <div className="relative">
          <Phone size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="tel"
            id="phone"
            name="phone"
            className="input pl-10"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <div className="relative">
          <MessageSquare size={18} className="absolute left-3 top-3 text-gray-400" />
          <textarea
            id="message"
            name="message"
            rows={4}
            className="input pl-10"
            placeholder="Write your message here"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
      </div>
      
      {error && (
        <div className="text-error-700 bg-error-50 p-3 rounded-md text-sm">
          {error}
        </div>
      )}
      
      <button 
        type="submit" 
        className={`btn-accent w-full py-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Rent Now'}
      </button>
      
      <p className="text-xs text-gray-500 text-center mt-4">
        By submitting this form, you agree to our <a href="#" className="text-primary-700 hover:underline">Privacy Policy</a> and <a href="#" className="text-primary-700 hover:underline">Terms of Service</a>.
      </p>
    </form>
  );
};

export default ContactForm;