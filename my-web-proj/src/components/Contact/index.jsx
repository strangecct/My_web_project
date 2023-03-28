import React from 'react'
import { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import contactImage from '../../assets/img/contact-img.svg'
import './index.css'

export default function Contact() {
    const formInitialDetails = {
        name: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');//click -> Sending
    const [status, setStatus] = useState({});


    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        try {
            let response = await fetch('http://localhost:5000/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json;charset=utf-8'
                },
                body: JSON.stringify(formDetails)
            })
            setButtonText('Send');
            setFormDetails(formInitialDetails);
            if (response.ok) {
                setStatus({ success: true, message: 'Message sent successful' });
            } else {
                setStatus({ success: false, message: 'Message sent fail, try again later' });
            }
        }
        catch {
            setButtonText('Send');
            setStatus({ success: false, message: 'Message sent fail' });
        }

    }

    return (
        <section className='contact' id='connect'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={contactImage} alt="Contact Me" />

                    </Col>
                    <Col md={6}>
                        <h2>Get in Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type="text" value={formDetails.name} placeholder='Name' onChange={e => onFormUpdate('name', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type="email" value={formDetails.email} placeholder='Email Address' onChange={e => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type="telephone" value={formDetails.phone} placeholder='Phone No.' onChange={e => onFormUpdate('phone', e.target.value)} />
                                </Col>

                            </Row>
                            <Row>
                                <Col sm={12} className='px-1'>
                                    <textarea value={formDetails.message} placeholder='Message' onChange={e => onFormUpdate('message', e.target.value)} />
                                    <button type='submit'>
                                        <span >{buttonText}</span>
                                    </button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success ? 'success' : 'danger'}>
                                            {status.message}
                                        </p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}
