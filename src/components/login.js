import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your login/signup logic goes here using the formData state
    console.log('Form data submitted:', formData);
  };

  const loginFields = [
    {
      labelText: 'Email address',
      labelFor: 'email-address',
      id: 'email-address',
      name: 'email',
      type: 'email',
      autoComplete: 'email',
      isRequired: true,
      placeholder: 'Email address',
    },
    {
      labelText: 'Password',
      labelFor: 'password',
      id: 'password',
      name: 'password',
      type: 'password',
      autoComplete: 'current-password',
      isRequired: true,
      placeholder: 'Password',
    },
  ];

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {loginFields.map((field) => (
          <div key={field.id} className="form-group">
            <label htmlFor={field.labelFor}>{field.labelText}</label>
            <input
              type={field.type}
              id={field.id}
              name={field.name}
              value={formData[field.name]}
              onChange={handleInputChange}
              autoComplete={field.autoComplete}
              required={field.isRequired}
              placeholder={field.placeholder}
            />
          </div>
        ))}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
export {loginFields};
