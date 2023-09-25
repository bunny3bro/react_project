import './App.css';
import React, { useEffect } from 'react';

function Homep() {
  // Set the target URL you want to redirect to
  const targetUrl = '/app';

  useEffect(() => {
    // Use setTimeout to delay the redirection after 3000 milliseconds (3 seconds)
    const redirectTimer = setTimeout(() => {
      // Redirect to the target URL
      window.location.href = targetUrl;
    }, 3000);

    // Cleanup the timer to prevent memory leaks
    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <div>
      <p>Redirecting to another page in 3 seconds...</p>
      <p>If you are not redirected, click <a href={targetUrl}>here</a>.</p>
    </div>
  );
}

export default Homep;
