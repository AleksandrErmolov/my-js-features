import React, {useEffect, useState} from 'react';
import left from './right.png'
import right from './left.png'
import styled from 'styled-components';


interface ButtonProps {
    direction?: string | undefined;
    action?: Function | undefined | string | void | any;
}

const SliderButton = styled.button`
  padding: 0;
  margin: 0;
  border: 0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: transparent;
  z-index: 100;
  display: block;
`

const Img = styled.img`
  z-index: 1;
  width: 40px;
  height: 40px;
`

const Button = ({direction, action}: ButtonProps) => {

    return (
        <SliderButton onClick={action}>
            <Img src={direction ==='left' ? left.src : right.src}/>
        </SliderButton>
    );
};

export default Button;