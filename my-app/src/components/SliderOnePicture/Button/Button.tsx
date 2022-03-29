import React, {useEffect, useState} from 'react';
import right from './right.png'
import left from './left.png'
import styled from 'styled-components/macro';
import { css } from 'styled-components';


interface ButtonProps {
    direction?: string | undefined;
    action?: Function | undefined;
}

const SliderButton = styled.button`
  border: 0;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: transparent;
`

const Img = styled.img`
  width: 50px;
  height: 50px;
`

const Button = ({direction, action}: ButtonProps) => {

    const [picture, setPicture] = useState(right)

    useEffect(() => {
        if (direction === 'left') {
            setPicture(left)
        } else {
            setPicture(right)
        }
    },[])

    return (
        <SliderButton>
            <Img src={picture.src}/>
        </SliderButton>
    );
};

export default Button;