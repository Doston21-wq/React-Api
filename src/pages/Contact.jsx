import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  max-width: 500px;
  margin: 70px auto;
  padding: 40px 30px;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.7);
  color: #f0f0f0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #00fff7;
  text-shadow: 0 0 8px #00fff7;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 15px 20px;
  font-size: 1rem;
  border-radius: 12px;
  border: none;
  background: #203a43;
  color: #00fff7;
  box-shadow: inset 0 0 8px #00fff7;
  transition: 0.3s ease all;

  &::placeholder {
    color: #00fff7cc;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 15px #00fff7, inset 0 0 10px #00fff7;
    background: #2c5364;
  }
`;

const TextArea = styled.textarea`
  padding: 15px 20px;
  font-size: 1rem;
  border-radius: 12px;
  border: none;
  resize: vertical;
  min-height: 120px;
  background: #203a43;
  color: #00fff7;
  box-shadow: inset 0 0 8px #00fff7;
  transition: 0.3s ease all;

  &::placeholder {
    color: #00fff7cc;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 15px #00fff7, inset 0 0 10px #00fff7;
    background: #2c5364;
  }
`;

const Button = styled.button`
  padding: 15px;
  font-size: 1.2rem;
  border-radius: 12px;
  border: none;
  background: #00fff7;
  color: #0f2027;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 0 0 20px #00fff7;
  transition: 0.3s ease all;

  &:hover {
    background: #00ccc4;
    box-shadow: 0 0 30px #00ccc4;
    color: #e0f7f7;
  }
`;

const SuccessMessage = styled.p`
  margin-top: 20px;
  text-align: center;
  color: #4BB543;
  font-weight: 600;
  text-shadow: 0 0 5px #4BB543;
`;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form yuborish (hozircha konsolga chiqaramiz)
    console.log(formData);
    setSuccess(true);
    setFormData({ name: '', email: '', message: '' });

    // 3 soniyadan keyin xabarni yo'qotish
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <ContactContainer>
      <Title>Contact Us</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit">Send Message</Button>
      </Form>
      {success && <SuccessMessage>Message sent successfully! 🚀</SuccessMessage>}
    </ContactContainer>
  );
};

export default Contact;
