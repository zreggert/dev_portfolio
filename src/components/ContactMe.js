import React from 'react';

import '../styles/styles.css';

function ContactMe() {
    return (
        <div>
             <section class="contact-me hide" id="contact-me">
                <h2>Contact Me</h2>
                <ul>
                    <li>Email: zreggert@gmail.com</li>
                    <li>Phone: (404)626-9854</li>
                    <li>
                        <a href="https://www.linkedin.com/in/zachary-eggert/">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://github.com/zreggert">GitHub</a>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default ContactMe;