import emailjs from 'emailjs-com'
import React from 'react'
function ContactForm() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_ucxz9fu', 'template_jppe6eu', e.target, 'user_HGljJd2lUIG0iiAiNC6uE')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
            alert("Your message has been sent")
    }
    return (
            <form className="contact-form" onSubmit={sendEmail}>
                <input placeholder="Name" className="formItem" type="text" name="name" required />
                <input placeholder="Email" className="formItem" type="email" name="email" required />
                <input placeholder="Subject" className="formItem" type="text" name="subject" />
                <textarea placeholder="Message" className="formItem" name="message" style={{"resize": "none"}} />
                <button className="formItem">Send</button>
            </form>
    )
}
export default ContactForm