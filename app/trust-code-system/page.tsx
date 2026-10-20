'use client'
import './tcs.css';

export default function ComingSoon() {
  return (
    <main className="coming-soon">
      <div className="content">
        <div className="logo">YOUR BRAND</div>

        <h1>
          Something Great Is <span>Coming Soon.</span>
        </h1>

        <p>
          We are working hard to bring you something amazing.
          Stay tuned!
        </p>

        <a href="mailto:hello@example.com" className="button">
          Contact Us
        </a>

        <div className="footer">
          © 2026 Your Brand. All rights reserved.
        </div>
      </div>
    </main>
  );
}
