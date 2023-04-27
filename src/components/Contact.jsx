import React from "react"

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <h2 className="heading">Contact</h2>

            <form action="https://formsubmit.co/josephdacosta27@gmail.com" method="POST">
                <div className="input-box">
                    <input type="text" name="name" placeholder="Full Name" required/>
                    <input type="email" name="email" placeholder="Email Address" required/>
                </div>
                <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message" required></textarea>
                <input type="submit" value="Submit" className="btn"/>
            </form>
            
        </section>
    )
}