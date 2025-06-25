import React from "react";
import './Contact.css'
const Contact = () => {
  return (
    <div className="contact-container" id = "cont">
      <h1 className="contact-title1">Contact Me</h1>
      <div className="contact-section">
      <div className="contact-container-left">
        <h1 className="contact-title">Lets Interact Eact Other</h1>
        <p className="contact-para">
          Have a project in mind or just want to say hello? I'm always open to
          discussing new ideas, collaborations, or opportunities. Feel free to
          drop a message below—whether it's work-related or just to connect.
          I'll get back to you as soon as possible!
        </p>
      </div>
        <form action="" className="contact-container-right">
           <label htmlFor="">Name</label>
           <input type="text"  placeholder="Enter here..!!" className="input-tag-name" />
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Enter here..!!" className="input-tag-email" />
            <label htmlFor="">Enter other details here..!!</label>
           <textarea name="textarea" className="input-tag-textarea" rows= "10" placeholder="Enter here..!!"></textarea>
           <button type="submit" className="submit">Submit</button>
         </form>
         </div>
    </div>
  );
};

export default Contact;
