import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Container = styled.div`
    margin: auto;
    margin-top: 100px;
    width: 1200px;
`;

const Title = styled.span`
    font-size: 20px;
    font-weight: 600;
`;

const Wrap = styled.div``;
const H3 = styled.h3`
    height: 300px;
    background-color: #78909c;
    margin: auto;
    text-align: center;
    line-height: 300px;
    font-size: 40px;
    font-family: "Jua", sans-serif;
`;

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidedToScroll: 1,
    };

    return (
        <Container>
            <Wrap>
                <Slider {...settings}>
                    <div>
                        <H3>첫 페이지</H3>
                    </div>
                    <div>
                        <H3>둘째 페이지</H3>
                    </div>
                    <div>
                        <H3>셋째 페이지</H3>
                    </div>
                    <div>
                        <H3>넷째 페이지</H3>
                    </div>
                    <div>
                        <H3>다섯째 페이지</H3>
                    </div>
                    <div>
                        <H3>여섯째 페이지</H3>
                    </div>
                </Slider>
            </Wrap>
        </Container>
    );
};

export default Home;
