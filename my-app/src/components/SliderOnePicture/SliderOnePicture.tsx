import React, {FC, useState} from 'react';
import {data} from './data/data';
import styled from 'styled-components';
import Button from "./Button/Button";
import img1 from './data/img/img1.jpg'
import img2 from './data/img/img2.jpg'
import img3 from './data/img/img3.jpg'
import img4 from './data/img/img4.jpg'
import img5 from './data/img/img5.jpg'
import img6 from './data/img/img1.jpg'


const SliderContainer = styled.div`
  width: 100vh;
  height: 500px;
  position: relative;
  z-index: 1;
`

const Img = styled.img`
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`

const ButtonContainer = styled.div`
  display: flex;
  width: 700px;
  position: absolute;
  bottom: 48%;
  justifyContent: space-between;
`

export const SliderOnePicture: FC = () => {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextCard = (index: number, e: MouseEvent): void => {
        if (slideIndex !== data.length) {
            setSlideIndex(slideIndex + 1)
        } else {
            setSlideIndex(1)
        }
    }

    const prevCard = (index: number, e: MouseEvent): void => {
        if (slideIndex > 1) {
            setSlideIndex(slideIndex - 1)
        } else {
            setSlideIndex(5)
        }
    }

    return (
        <div style={{position: 'relative'}}>
            <SliderContainer>
                {data.map((el, i) =>
                    <div key={i} style={{zIndex: 1}}>
                        <Img style={{backgroundImage: `url("./data/img/img${slideIndex}")`}}/>
                    </div>
                )}
            </SliderContainer>

            <ButtonContainer>
                <Button direction='left' action={prevCard}/>
                <Button direction='right' action={nextCard}/>
            </ButtonContainer>
        </div>
    );
};

export default SliderOnePicture;