import React, {FC} from 'react';

const data = [
    {id:1, title:'номер1'},
    {id:2, title:'номер2'},
    {id:3, title:'номер3'},
    {id:4, title:'номер5'},
    {id:5, title:'номер6'},
    {id:7, title:'номер7'},
    {id:8, title:'номер8'}
]

export const Slider:FC = () => {
    return (
        <div>
            {data.map(el =>
            <div key={el.id}>
                <h3>{el.title}</h3>
            </div>
            )}
        </div>
    );
};

export default Slider;