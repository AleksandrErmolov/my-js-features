import React, {FC} from 'react';
import {data} from './data/data';
import styled from 'styled-components';
import Button from "./Button/Button";

const SliderContainer = styled.div`
  width: 700px;
  height: 500px;
  position: relative;
`
const SliderList = styled.div`
  width: 100%;
  height: 100%;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`

export const SliderOnePicture: FC = () => {

    const nextCard = (index: number, e: MouseEvent): void => {
        console.log(1234)
    }

    const prevCard = (index: number, e: MouseEvent): void => {
        console.log(123)
    }

    return (
            <SliderContainer>
                {data.map((el, i) =>
                    <SliderList key={el.id}>
                        <Img src={el.img.src}/>
                    </SliderList>
                )}
                <Button direction={'left'} action={prevCard}/>
                <Button direction={'right'} action={nextCard}/>
            </SliderContainer>
    );
};

export default SliderOnePicture;