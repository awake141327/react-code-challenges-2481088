import { useState } from 'react';

export default function DarkMode () {
  const [theme, setTheme] = useState("");

  return (
    <div className={`page ${theme === "dark"? "dark-mode" : ""}`}>
      <button onClick={() => setTheme("dark")} className='dark-mode-button'>Dark Mode</button>
      <button onClick={() => setTheme("light")} className='light-mode-button'>Light Mode</button>
    </div>
  )
}
