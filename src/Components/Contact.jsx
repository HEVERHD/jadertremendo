import React from 'react'

export const Contact = () => {
  return (
    <div id='contact'>
        <h1>Contact Me</h1>
        <form>
            <input  type="text" name="name" placeholder="Name"/><br/>
            <input type="email" name="email" placeholder="Email Address"/><br />
            <textarea name="message" rows="5" cols="30" placeholder="Message"></textarea><br />
            <button type="submit">Submit</button>
        </form>
        
    </div>
  )
}
