// pages/index.js
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    if (response.ok) {
      alert('Message sent!');
      setMessage('');
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>
      <h1>Welcome to My Portfolio</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
