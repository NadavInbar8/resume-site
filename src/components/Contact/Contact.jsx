import { useEffect, useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import './Contact.scss';
import Loader from 'react-loaders';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();
  const API = process.env.REACT_APP_API;

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_fghrt9w',
        'template_a69fywu',
        form.current,
        'cQcR9vHpmCCn8XRhT'
      )
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again');
        }
      );
  };

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className='contact-form'>
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input placeholder='Name' type='text' name='name' required />
                </li>
                <li className='half'>
                  <input
                    placeholder='Email'
                    type='email'
                    name='email'
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder='Subject'
                    type='text'
                    name='subject'
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder='Message'
                    name='message'
                    required
                  ></textarea>
                </li>
                <li>
                  <input type='submit' className='flat-button' value='SEND' />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          Yehud, Central,
          <br />
          Israel,
          <br />
          <span>NadavInbar8@gmail.com</span>
        </div>
        <div className='map-wrap'>
          <iframe
            title='map'
            width='100%'
            height='100%'
            loading='lazy'
            allowFullScreen
            referrerPolicy='no-referrer-when-downgrade'
            src={`https://www.google.com/maps/embed/v1/place?key=${API}&q=32.03264839809474,34.88017259188287`}
          ></iframe>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  );
};

export default Contact;
