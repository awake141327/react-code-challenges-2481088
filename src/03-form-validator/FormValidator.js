import { useState } from 'react'

export default function FormValidator () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && passwordConfirm) {
      if ((password.length >= 8) && (passwordConfirm.length) >= 8 && (password === passwordConfirm)) {
        setMessage("User Created!")
      } else {
        setMessage("Password Error")
      }
    } else {
      setMessage("All the fields in the form are to be filled.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input
        type='email' name='email'
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password' name='password'
        onChange={e => setPassword(e.target.value)}
      />
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        type='password' name='password-confirm'
        onChange={e => setPasswordConfirm(e.target.value)}
      />
      <p>{message}</p>
      <input type='submit' value='Submit' />
    </form>
  )
}
