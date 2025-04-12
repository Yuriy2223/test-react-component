// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Title } from "../../shared/Title";
// import { SubTitle } from "../../shared/SubTitle";
// import {
//   ContactContainer,
//   ContactForm,
//   ContactSection,
//   InputGroup,
//   InputWrapper,
//   SubmitButton,
//   SuccessMessage,
//   TextareaWrap,
// } from "./Contact.styled";
// import { Input } from "../../shared/Input";
// import { Textarea } from "../../shared/TextareaInput";

// const validateEmail = (email: string) =>
//   /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// const validatePhone = (tel: string) =>
//   tel.trim() === "" || /^\+?[0-9\s\-]{7,15}$/.test(tel);

// export const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (field: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//     setErrors((prev) => ({ ...prev, [field]: "" }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const newErrors = {
//       name: formData.name.trim() ? "" : "Name is required.",
//       tel: validatePhone(formData.tel || "") ? "" : "Invalid phone number.",
//       email: validateEmail(formData.email) ? "" : "Invalid email address.",
//       message: formData.message.trim() ? "" : "Message is required.",
//     };

//     setErrors(newErrors);

//     const hasErrors = Object.values(newErrors).some(Boolean);
//     if (hasErrors) return;

//     console.log(formData);
//     setSubmitted(true);
//     setFormData({ name: "", email: "", message: "", tel: "" });

//     setTimeout(() => setSubmitted(false), 3000);
//   };

//   return (
//     <ContactSection id="contact">
//       <ContactContainer>
//         <motion.div
//           initial={{ opacity: 0, y: -40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: false, amount: 0.5 }}
//         >
//           <Title>Contact Me</Title>
//           <SubTitle>
//             Drop a message for collaboration, freelancing or just to say hi!
//           </SubTitle>
//         </motion.div>

//         <ContactForm
//           onSubmit={handleSubmit}
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: false, amount: 0.3 }}
//         >
//           <InputWrapper>
//             <InputGroup>
//               <Input
//                 name="name"
//                 label="Your Name"
//                 value={formData.name}
//                 onChange={(val) => handleChange("name", val)}
//                 error={errors.name}
//                 width="100%"
//               />
//               <Input
//                 name="tel"
//                 label="Your Phone"
//                 type="tel"
//                 value={formData.tel}
//                 onChange={(val) => handleChange("tel", val)}
//                 error={errors.tel}
//                 width="100%"
//               />

//               <Input
//                 name="email"
//                 label="Your Email"
//                 type="email"
//                 value={formData.email}
//                 onChange={(val) => handleChange("email", val)}
//                 error={errors.email}
//                 width="100%"
//               />
//             </InputGroup>
//             <TextareaWrap>
//               <Textarea
//                 name="message"
//                 label="Your Message"
//                 value={formData.message}
//                 onChange={(val) => handleChange("message", val)}
//                 error={errors.message}
//               />
//             </TextareaWrap>
//           </InputWrapper>
//           <SubmitButton type="submit">Send Message</SubmitButton>
//           <AnimatePresence>
//             {submitted && (
//               <SuccessMessage
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 ✅ Your message has been sent!
//               </SuccessMessage>
//             )}
//           </AnimatePresence>
//         </ContactForm>
//       </ContactContainer>
//     </ContactSection>
//   );
// };

{
  /* <SocialLinks
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: false }}
      >
        <SocialLink href="https://github.com" target="_blank">
          <Github />
        </SocialLink>
        <SocialLink href="https://linkedin.com" target="_blank">
          <Linkedin />
        </SocialLink>
        <SocialLink href="mailto:you@example.com">
          <Mail />
        </SocialLink>
        <SocialLink href="tel:+123456789">
          <Phone />
        </SocialLink>
        <SocialLink href="https://yourwebsite.com">
          <Globe />
        </SocialLink>
      </SocialLinks> */
}

{
  /* <InfoSection>
        <InfoBox
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h3>
            <MapPin /> Location
          </h3>
          <p>123 Main St, Kyiv, Ukraine</p>
        </InfoBox>
        <InfoBox
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <h3>
            <Phone /> Call Me
          </h3>
          <p>+123 456 789</p>
        </InfoBox>
      </InfoSection> */
}
/***************************************** */

// import { useState } from "react";
// import styled from "styled-components";
// import { motion } from "framer-motion";
// import { Github, Linkedin, Mail, Phone, MapPin, Globe } from "lucide-react";
// import { Title } from "../../shared/Title";
// import { SubTitle } from "../../shared/SubTitle";
// import { ContactSection } from "./Contact.styled";

// const ContactForm = styled(motion.form)`
//   background: white;
//   padding: 3rem;
//   border-radius: 2rem;
//   box-shadow: 0 15px 50px rgba(0, 188, 212, 0.15);
//   width: 100%;
//   max-width: 650px;
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
//   z-index: 2;
// `;

// const FormField = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
// `;

// // const Label = styled.label`
// //   font-weight: 600;
// //   font-size: 1.1rem;
// //   color: #212529;
// // `;

// // const Input = styled.input`
// //   padding: 1.2rem;
// //   border: 2px solid #ced4da;
// //   border-radius: 1rem;
// //   font-size: 1.1rem;
// //   background-color: #f1f3f5;
// //   transition: 0.3s;

// //   &:focus {
// //     border-color: #00bcd4;
// //     background-color: #e9f7fb;
// //     outline: none;
// //     box-shadow: 0 0 0 4px rgba(0, 188, 212, 0.2);
// //   }
// // `;

// const TextArea = styled.textarea`
//   padding: 1.2rem;
//   border: 2px solid #ced4da;
//   border-radius: 1rem;
//   font-size: 1.1rem;
//   background-color: #f1f3f5;
//   min-height: 150px;
//   resize: vertical;
//   transition: 0.3s;

//   &:focus {
//     border-color: #00bcd4;
//     background-color: #e9f7fb;
//     outline: none;
//     box-shadow: 0 0 0 4px rgba(0, 188, 212, 0.2);
//   }
// `;

// const SubmitButton = styled.button`
//   padding: 1rem;
//   background-color: #00bcd4;
//   color: white;
//   font-size: 1.1rem;
//   border: none;
//   border-radius: 1rem;
//   cursor: pointer;
//   transition: 0.3s;
//   font-weight: 600;

//   &:hover {
//     background-color: #0098a5;
//     transform: scale(1.02);
//   }
// `;

// const SuccessMessage = styled.p`
//   color: green;
//   font-weight: 600;
//   text-align: center;
// `;

// const SocialLinks = styled(motion.div)`
//   margin-top: 3rem;
//   display: flex;
//   gap: 2rem;
//   z-index: 2;
// `;

// const SocialLink = styled.a`
//   color: #00bcd4;
//   font-size: 2.2rem;
//   transition: 0.3s;

//   &:hover {
//     transform: scale(1.2) rotate(5deg);
//     color: #008b9b;
//   }
// `;

// const InfoSection = styled.div`
//   margin-top: 4rem;
//   display: flex;
//   gap: 2rem;
//   flex-wrap: wrap;
//   justify-content: center;
//   z-index: 2;
// `;

// const InfoBox = styled(motion.div)`
//   background: #ffffff;
//   padding: 2rem;
//   border-radius: 1.5rem;
//   border: 1px solid #dee2e6;
//   box-shadow: 0 8px 30px rgba(0, 188, 212, 0.1);
//   max-width: 300px;

//   h3 {
//     display: flex;
//     align-items: center;
//     font-size: 1.4rem;
//     margin-bottom: 0.8rem;
//     color: #212529;
//   }

//   svg {
//     margin-right: 0.75rem;
//     color: #00bcd4;
//   }

//   p {
//     font-size: 1.1rem;
//     color: #495057;
//   }
// `;

// export const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(formData);
//     setSubmitted(true);
//     setTimeout(() => setSubmitted(false), 3000);
//   };

//   return (
//     <ContactSection id="contact">
//       <motion.div
//         initial={{ opacity: 0, y: -40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: false, amount: 0.5 }}
//       >
//         <Title>Contact Me</Title>
//         <SubTitle>
//           Drop a message for collaboration, freelancing or just to say hi!
//         </SubTitle>
//       </motion.div>

//       <ContactForm
//         onSubmit={handleSubmit}
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: false, amount: 0.3 }}
//       >
//         {/* <FormField>
//           <Label htmlFor="name">Your Name</Label>
//           <Input
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </FormField> */}
//         {/* <FormField>
//           <Label htmlFor="email">Your Email</Label>
//           <Input
//             id="email"
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </FormField> */}
//         {/* <FormField>
//           <Label htmlFor="message">Your Message</Label>
//           <TextArea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />
//         </FormField> */}
//         <SubmitButton type="submit">Send Message</SubmitButton>
//         {submitted && <SuccessMessage>✅ Message sent!</SuccessMessage>}
//       </ContactForm>

//  <SocialLinks
//   initial={{ opacity: 0 }}
//   whileInView={{ opacity: 1 }}
//   transition={{ duration: 0.5, delay: 0.3 }}
//   viewport={{ once: false }}
// >
//   <SocialLink href="https://github.com" target="_blank">
//     <Github />
//   </SocialLink>
//   <SocialLink href="https://linkedin.com" target="_blank">
//     <Linkedin />
//   </SocialLink>
//   <SocialLink href="mailto:you@example.com">
//     <Mail />
//   </SocialLink>
//   <SocialLink href="tel:+123456789">
//     <Phone />
//   </SocialLink>
//   <SocialLink href="https://yourwebsite.com">
//     <Globe />
//   </SocialLink>
// </SocialLinks>

//       {/* <InfoSection>
//         <InfoBox
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: false }}
//         >
//           <h3>
//             <MapPin /> Location
//           </h3>
//           <p>123 Main St, Kyiv, Ukraine</p>
//         </InfoBox>
//         <InfoBox
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: false }}
//         >
//           <h3>
//             <Phone /> Call Me
//           </h3>
//           <p>+123 456 789</p>
//         </InfoBox>
//       </InfoSection> */}
//     </ContactSection>
//   );
// };
