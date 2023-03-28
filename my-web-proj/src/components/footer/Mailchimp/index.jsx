
import MailchimpSubscribe from "react-mailchimp-subscribe"
import React, { useState, useEffect } from 'react'
import { Alert } from 'react-bootstrap'
import { Col, Row } from 'react-bootstrap'
// import Newsletter from './Newsletter'
import './index.css'

export default function Mailchimp() {
    const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U};id=${process.env.REACT_APP_MAILCHIMP_ID};`;
    //https://163.us21.list-manage.com/subscribe/post?u=7774d008f697f9c47775ca29f&amp;id=9a911d9887&amp;
    const [email, setEmail] = React.useState("");


    // useEffect(() => {
    //     if (status === 'success') {
    //         clearFields();
    //     }
    //     // 在componentWillUpdate时起作用
    // })

    const handleSubmit = (e, subscribe) => {
        e.preventDefault(); // 阻止表单默认提交行为
        subscribe({ EMAIL: email }); // 调用subscribe()函数提交表单
    };


    return (
        <MailchimpSubscribe
            url={postUrl}

            render={({ subscribe, status, message }) =>
                <Col lg={12}>
                    <div className='newsletter-bx'>
                        <Row className='align-items-center'>
                            <Col md={3} sm={2}>
                                <h3>邮件订阅</h3>
                                {status === 'sending' && <Alert>Sending</Alert>}
                                {status === 'error' && <Alert variant='danger'>{message}</Alert>}
                                {status === 'success' && <Alert>{message}</Alert>}
                            </Col>
                            <Col md={9} sm={10}>
                                <form onSubmit={(e) => handleSubmit(e, subscribe)}>
                                    <div className='new-email-bx'>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Enter your email address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        <button type="submit" >Subscribe</button>
                                    </div>
                                </form>
                            </Col>
                        </Row>
                    </div>
                </Col>
            }
        />

    )
}
