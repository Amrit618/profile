import React, { useState } from 'react';
import '../styles/newsletter.css';

type FormState = {
  email: string;
};

const NewsletterForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    email: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add logic to handle form submission, e.g. API call or data validation
    console.log('Form submitted with email:', formState.email);
    setFormState({
      email: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Subscribe to our Newsletter</h2>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formState.email}
        onChange={handleInputChange}
        required
      />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default NewsletterForm;
