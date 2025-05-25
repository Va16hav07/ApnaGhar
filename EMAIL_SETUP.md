# EmailJS Setup

This project uses EmailJS to handle form submissions from property inquiries. The credentials have been set up as follows:

- Service ID: `service_zcgwnoq`
- Template ID: `template_t02mmaw`
- Public Key: `T2d6O0MeTy1nHH9PG`

## EmailJS Configuration

These credentials are stored in `/src/constants/config.ts`. If you need to update them, modify that file.

## Email Template Variables

The following variables are sent to the EmailJS template:

- `{{name}}` - The name of the person submitting the form
- `{{email}}` - Their email address
- `{{phone}}` - Their phone number
- `{{message}}` - Their inquiry message
- `{{property_id}}` - The ID of the property they're interested in
- `{{property_title}}` - The title of the property they're interested in

## Testing

After any changes to the EmailJS configuration, you should test the form submission by:

1. Go to any property detail page
2. Fill out the contact form
3. Submit the form
4. Verify that the email is received at your configured destination

## Troubleshooting

If emails are not being sent:

1. Check the browser console for any errors
2. Verify that the credentials in `config.ts` match your EmailJS account
3. Make sure your EmailJS service is active
4. Confirm that your template includes the variables listed above
