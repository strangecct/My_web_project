import React from 'react'
import { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../../assets/img/header-img.svg'
import './index.css'


export default function Banner() {
    // 添加动画
    const toRotate = ['掌握html、css', '熟悉JavaScript', '掌握react框架使用'];
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState(' '); //当前显示的内容
    // 这里如果设置一个空值不会被识别为string？
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) };
    })

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText =
            isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updateText);

        if (isDeleting) {
            setDelta(prevDelat => (prevDelat * 3 / 5))
        }
        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period)
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    {/* 这里的col干嘛的 */}
                    <Col xs={12} md={6} xl={9}>
                        <span className='tagline'>
                            Welcome to my world!
                        </span>
                        <h2>Profess Skill:
                            <span className="txt-rotate" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
                                <span className="wrap">{text}</span>
                            </span>
                        </h2>
                        <p>Redux Toolkit 是我们推荐的编写 Redux 逻辑的方法。
                            它包含我们认为对于构建 Redux 应用程序必不可少的包和函数。
                            Redux Toolkit 构建是我们建议的最佳实践中，简化了大多数 Redux 任务，
                            预防了常见错误，并使编写 Redux 应用程序变得更加容易。</p>
                        <button onClick={() => console.log('connect')}>
                            Connect the world
                            <ArrowRightCircle size={25} />
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={3}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>

    )
}
