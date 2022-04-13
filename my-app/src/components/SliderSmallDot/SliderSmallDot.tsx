import React, {FC, useState} from 'react';
import {data} from './data/data';
import styled from 'styled-components';
import Button from "./Button/Button";

import {Active, Opacity} from "./SliderSmallDot.props";


const SliderContainer = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  z-index: 1;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 48%;
  justify-content: space-between;
`

const DotContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  align-content: center;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999999999999999999999999;
`
const Dot = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid #f1f1f1;
  margin: 0 5px;
  display: ${(props: Active) => props.see === true ? 'inline-block' : ''};
  background: ${(props: Active) => props.active === true ? "rgb(32, 32, 32)" : "#f1f1f1"};
`

const Slide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: ${(props: Opacity) => props.opacity === true ? "1" : "0"};
  transition: opacity ease-in-out 0.6s;
`


const SliderSmallDot: FC = () => {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextCard = (): void => {
        if (slideIndex !== data.length) {
            setSlideIndex(slideIndex + 1)
        } else {
            setSlideIndex(1)
        }
    }

    const prevCard = (): void => {
        if (slideIndex > 1) {
            setSlideIndex(slideIndex - 1)
        } else {
            setSlideIndex(5)
        }
    }

    const moveDot = (index: number) => {
        setSlideIndex(index)
    }

    const changeClass = (index:number) => {
if (index<=5 && slideIndex === index + 1) {
    return true
} else {
    return false
}
    }

    return (
        <div style={{position: 'relative'}}>
            <SliderContainer>
                {data.map((el, i) =>
                    <Slide key={i} opacity={slideIndex === i + 1 ? true : false}>
                        <Img src={data[slideIndex - 1].img.src}/>
                    </Slide>
                )}
                <ButtonContainer>
                    <Button direction='left' action={prevCard}/>
                    <Button direction='right' action={nextCard}/>
                </ButtonContainer>

                <DotContainer>
                    {data.map((el, i) =>
                        <Dot
                            key={el.id}
                            onClick={() => moveDot(i + 1)}
                            active={changeClass(i)}
                            see={changeClass(i)}
                        />
                    )}
                </DotContainer>
            </SliderContainer>
        </div>
    );
};

export default SliderSmallDot;