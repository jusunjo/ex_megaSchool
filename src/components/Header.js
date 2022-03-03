import React from "react";
import styled from "styled-components";

const Header1 = styled.div`
    background-color: #1c313a;
    height: 120px;
    font-size: 50px;
    color: rgb(231, 231, 231);
    text-align: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

const Link = styled.span`
    justify-content: center;
    line-height: 110px;
    font-family: "Jua", sans-serif;
`;

const StyleA = styled.a`
    text-decoration: none;
    color: #fffefb;
`;

const Header = () => {
    return (
        <Header1>
            <Link>
                <StyleA href="http://localhost:3000/">.ami vlog</StyleA>
            </Link>
        </Header1>
    );
};

export default Header;
