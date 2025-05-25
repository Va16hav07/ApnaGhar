import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../constants/config';

interface EmailParams {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyId?: string;
  propertyTitle?: string;
}

// Initialize EmailJS with your user ID
export const initEmailJS = (): void => {
  emailjs.init(EMAIL_CONFIG.USER_ID);
};

export const sendEmail = async (params: EmailParams): Promise<boolean> => {
  try {
    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      {
        name: params.name,
        email: params.email,
        phone: params.phone,
        message: params.message,
        property_id: params.propertyId || 'N/A',
        property_title: params.propertyTitle || 'N/A'
      }
    );
    
    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};