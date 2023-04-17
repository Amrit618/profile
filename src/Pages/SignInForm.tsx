import React, { useState } from 'react';
import '../styles/SignIn.css';

interface SignInFormData {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
}

function SignInForm() {
  const [formData, setFormData] = useState<SignInFormData>({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
  });

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // Handle form submission logic here, e.g. send data to backend API
    console.log('Form submitted:', formData);
    // Reset form fields
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      contactNumber: '',
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <label>
        First Name:
        <input
          type="text"
          value={formData.firstName}
          onChange={(event) =>
            setFormData({ ...formData, firstName: event.target.value })
          }
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={formData.lastName}
          onChange={(event) =>
            setFormData({ ...formData, lastName: event.target.value })
          }
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
      </label>
      <label>
        Contact Number:
        <input
          type="tel"
          value={formData.contactNumber}
          onChange={(event) =>
            setFormData({ ...formData, contactNumber: event.target.value })
          }
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignInForm;
