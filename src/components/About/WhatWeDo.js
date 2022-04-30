import React from 'react';
import './WhatWeDo.css'
import {Row, Col} from "react-bootstrap"

const WhatWeDo = () => {
    return (
        <div className="about-WhatWeDo">
            <div>
                <div className="about-WhatWeDo-header">

                    <h1>What We Do</h1>

                    <h3>
                        We want to help our members grow throughout their college career, whether they enter as a first-year university student or as a transfer student.
                    </h3>
                    <h3>
                        Every quarter, we focus on improving specific aspects of our member.
                    </h3>
                </div>

                <div className="about-WhatWeDo-grid">
                    <Row>
                        <Col lg = {4} sm={12} className="about-WhatWeDo-single-col">
                            <h2>Professional Development</h2>
                            <ul>
                                <li>Develop Professional Resumes</li>
                                <li>Build all-star LinkedIns</li>
                                <li>Offer workshops on applying effectively at companies</li>
                            </ul>
                        </Col>

                        <Col lg = {4} sm={12} className="about-WhatWeDo-single-col">
                            <h2>Workshops</h2>
                            <ul >
                                <li>Web/App Development</li>
                                <li>Intro to Front-End/Back-End</li>
                                <li>LeetCode 101</li>
                            </ul>
                        </Col>

                        <Col  lg = {4} sm={12} className="about-WhatWeDo-single-col">
                            <h2>And More...</h2>
                            <ul>
                                <li>Offline Editing</li>
                                <li>Source Control</li>
                                <li>Utilizing API's</li>
                            </ul>
                        </Col>
                </Row>
                </div>
            </div>
        </div>
        
    );
}

export default WhatWeDo;
