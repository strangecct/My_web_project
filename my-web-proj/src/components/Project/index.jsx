import React from 'react'
import { Col, Container, Row, Tab } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import TrackVisibility from 'react-on-screen';
import ProjCard from './ProjCard';

import './index.css'
import ProjImg1 from '../../assets/img/project-img1.png'
import ProjImg2 from '../../assets/img/project-img2.png'
import ProjImg3 from '../../assets/img/project-img3.png'
import colorSharp2 from '../../assets/img/color-sharp2.png'

export default function Projects() {
    const projects = [
        {
            title: '断路器故障检测',
            description: '监测故障情况下振动信号的异常',
            imgUrl: ProjImg1
        },
        {
            title: '输电线路异物检测',
            description: '检测线路上的风筝鸟巢等异物',
            imgUrl: ProjImg2
        },
        {
            title: '硬件测量系统',
            description: '监测故障情况下振动信号的异常',
            imgUrl: ProjImg3
        },
        {
            title: '特征提取算法',
            description: '使用SVM、Barlow Twins、Faster-RcNN等算法配合模态分解、小波、能量熵完成故障的诊断',
            imgUrl: ProjImg1
        }
    ]

    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>随便放一段话，不知道写啥使用SVM、Barlow Twins、Faster-RcNN等算法配</p>
                                    <Tab.Container id='project-tabs' defaultActiveKey='first' >
                                        <Nav variant="pills" defaultActiveKey="/home">
                                            <Nav.Item>
                                                <Nav.Link eventKey='first'>Tab1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second" >Tab2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                {/* disabled 可以让一个link失效*/}
                                                <Nav.Link eventKey="third">Tab3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content>
                                            <Tab.Pane eventKey='first'>
                                                <Row>
                                                    {
                                                        projects.map((item, ind) => {
                                                            return (

                                                                <ProjCard
                                                                    key={ind}
                                                                    // title={item.title} description={item.description} imgUrl={item.imgUrl}
                                                                    {...item}
                                                                />

                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey='second'>
                                                <Row>
                                                    {
                                                        projects.map((item, ind) => {
                                                            return (
                                                                <p key={ind}>{item.title}</p>

                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey='third'>
                                                <Row>
                                                    {
                                                        projects.map((item, ind) => {
                                                            return (
                                                                <p key={ind}>{item.title}</p>

                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} alt=" " />

        </section>
    )
}
