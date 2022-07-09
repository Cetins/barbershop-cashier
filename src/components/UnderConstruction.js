import React from "react";
import styled from "styled-components";
import under_construction from "../under_construction.jpeg"

const UnderConstruction = () => {
    const ImgDiv = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
`
    return (
        <ImgDiv>
        <img src={under_construction} alt='under construction' width="300px"></img>
        </ImgDiv>
    );
}

export default UnderConstruction;