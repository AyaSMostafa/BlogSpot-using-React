import React from 'react';
import { Carousel, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Slider() {
    return (
        <>
            <div align="center" className='m-4 h-20'>
                <Col md="6">
                    <Carousel align="center">
                        <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src="https://thumbs.dreamstime.com/b/flowers-4999705.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>

                            <img
                                className="d-block w-100"
                                src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdn.pixabay.com/photo/2021/10/04/11/20/cosmos-6680031__340.jpg"
                                alt="third slide"
                            />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdn.pixabay.com/photo/2021/10/04/11/20/cosmos-6680031__340.jpg"
                                alt="Forth slide"
                            />
                            <Carousel.Caption>
                                <h3>Forth slide label</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </div>
        </>
    );
}