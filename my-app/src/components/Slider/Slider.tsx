import React, {FC} from 'react';
import {data} from './data/data';


export const Slider: FC = () => {
    console.log(data)
    return (
        <div>
            <div  style={{width: 500, display:'flex'}}>
            {data.map((el, i) =>
                <div  key={el.id} style={{width: 500, display:'flex'}}>
                    <img src='' style={{width: 500}}/>
                </div>

            )}
            </div>
        </div>
    );
};

export default Slider;