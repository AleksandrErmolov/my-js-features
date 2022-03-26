import React from 'react';
import s from './Grid.module.css'

 interface GridProps {
    children: React.ReactChildren[] | React.ReactChild[]
}

export default function Grid({children}:GridProps) {
    return (
        <div className={s.grid}>
            {children}
        </div>
    );
}

