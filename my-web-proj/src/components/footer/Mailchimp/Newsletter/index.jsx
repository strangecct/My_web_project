import React, { useState, useEffect } from 'react'
import { Alert } from 'react-bootstrap'
import { Col, Row } from 'react-bootstrap'
import './index.css'

export default function Newsletter({ subscribe, status, message }) {
    const [email, setEmail] = useState('')

    useEffect(() => {
        if (status === 'success') {
            clearFields();
        }
        // 在componentWillUpdate时起作用
    })

    const handleSubmit = async (e) => {
        console.log(subscribe, status)
        e.preventDefault();
        // email &&
        //     email.indexOf('@') > -1 &&
        //     subscribe();
    }

    const clearFields = () => {
        setEmail('');
    }

    return (
        <Col lg={12}>
            <div className='newsletter-bx'>
                <Row className='align-items-center'>
                    <Col lg={12} md={6} xl={3}>
                        <h3>邮件订阅</h3>
                        {status === 'sending' && <Alert>Sending</Alert>}
                        {status === 'error' && <Alert variant='danger'>{message}</Alert>}
                        {status === 'success' && <Alert>{message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className='new-email-bx'>
                                <input type="email" value={email} placeholder='Email Address'
                                    onChange={e => setEmail(e.target.value)} />
                                <button type='submit'>Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}
