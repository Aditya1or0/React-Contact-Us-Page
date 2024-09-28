import styles from "./ContactForm.module.css";
import Button from "./Button";
import { MdOutlineMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { useState } from "react";
const ContactForm = () => {
  const [name, setName] = useState("aditya");
  const [email, setEmail] = useState("xyz@gmail.com");
  const [text, setText] = useState("learn react");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contactForm}>
        <div className={styles.topBtn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdOutlineMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<IoCall fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<IoIosMail fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.formControl}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="email">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT BUTTON" />
          </div>
          <div>
            {"name:" + name + " " + +"email:" + email + " " + "text:" + text}
          </div>
        </form>
      </div>
      <div className={styles.contactImage}>
        <img src="./images/contact.svg" alt="contact-image" />
      </div>
    </section>
  );
};

export default ContactForm;
