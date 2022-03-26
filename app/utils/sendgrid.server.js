import sgMail from '@sendgrid/mail';

export default sgMail;
sgMail.setApiKey(process.env.TOKEN);
