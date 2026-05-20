'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  return (
    <form
      className="form reveal"
      onSubmit={(e) => { e.preventDefault(); setSent(true) }}
    >
      <div className="row">
        <div className="form-group">
          <label>Name</label>
          <input placeholder="Your name" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="you@domain.com" required />
        </div>
      </div>
      <div className="form-group">
        <label>Project type</label>
        <select>
          <option>Full-time opportunity</option>
          <option>Freelance / contract</option>
          <option>Research collaboration</option>
          <option>Other</option>
        </select>
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea placeholder="Tell me about it…" required />
      </div>
      <button type="submit">
        {sent ? 'Sent ✓' : <>Send message <span>→</span></>}
      </button>
    </form>
  )
}
