// src/utils/email.js
import emailjs from 'emailjs-com';

const SERVICE_ID = "service_eb2exf1";
const TEMPLATE_ID = "template_vvkodet";
const USER_ID = "eU_U4ETkUbMwHJdsF";

export const sendOrderEmail = async (formData) => {
  const templateParams = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    date: formData.date,
    time: formData.time,
    specialRequest: formData.specialRequest || "None"
  };

  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
    console.log("Email successfully sent!", response.status, response.text);
    return true;
  } catch (error) {
    console.error("Failed to send confirmation email.", error);
    return false;
  }
};
