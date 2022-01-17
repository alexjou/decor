import styled from "styled-components";
import imgOne from "./../assets/img/produtos/1.jpg";
import imgTwo from "./../assets/img/produtos/2.jpg";
import imgThree from "./../assets/img/produtos/3.jpg";
import imgFour from "./../assets/img/produtos/4.jpg";
import imgFive from "./../assets/img/produtos/5.jpg";
import imgSix from "./../assets/img/produtos/6.png";
import imgSeven from "./../assets/img/produtos/7.jpg";

export const Container = styled.div`
  .colored:nth-child(1) {
    background: #f1ffe7;
    background-image: url(${imgOne});
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(2) {
    background: #f1ffe7;
    background-image: url(${imgTwo});
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(3) {
    background: #f1ffe7;
    background-image: url(${imgThree});
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(4) {
    background: #f1ffe7;
    background-image: url(${imgFour});
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(5) {
    background: #f1ffe7;
    background-image: url(${imgFive});
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(6) {
    background: #f1ffe7;
    background-image: url(${imgSix});
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(7) {
    background: #f1ffe7;
    background-image: url(${imgSeven});
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const Spacer = styled.div`
  height: 2vh;
  background: #ff7be1;
`;
