import React from 'react';

 interface GridProps {
    children: React.ReactChildren[] | React.ReactChild[]
}

export default function Grid({children}:GridProps) {
    return (
        <div className='grid'>
            {children}
        </div>
    );
}

