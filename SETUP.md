# EmailJS Setup Guide

Follow these steps to set up EmailJS for your Apna Ghar application:

## 1. Create an EmailJS account
- Go to [EmailJS website](https://www.emailjs.com/) and sign up for an account
- Verify your email to activate your account

## 2. Create an email service
- In your EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Select your email provider (Gmail, Outlook, etc.)
- Follow the instructions to connect your email account

## 3. Create an email template
- Go to "Email Templates" in your dashboard
- Click "Create New Template"
- Design your template using the following variables:
  - `{{name}}` - The name of the person submitting the form
  - `{{email}}` - Their email address
  - `{{phone}}` - Their phone number
  - `{{message}}` - Their inquiry message
  - `{{property_id}}` - The ID of the property they're interested in
  - `{{property_title}}` - The title of the property they're interested in

## 4. Update configuration
- Get your Service ID, Template ID and User ID from your EmailJS dashboard
- Open `src/constants/config.ts` in your project
- Replace the placeholder values with your actual EmailJS credentials:

```typescript
export const EMAIL_CONFIG = {
  SERVICE_ID: 'your_service_id_here',
  TEMPLATE_ID: 'your_template_id_here',
  USER_ID: 'your_user_id_here'
};
```

## Testing the Setup
After completing the setup, test the contact form on any property detail page to ensure emails are being sent correctly.

For development and testing purposes, you can monitor the console to see if the EmailJS calls are made successfully.
