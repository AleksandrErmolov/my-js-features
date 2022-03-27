import React, {useEffect, useState} from 'react';

const MOBILE = 'MOBILE';
const TABLET = 'TABLET';
const DESKTOP = 'DESKTOP';

const WhatIsDevice = () => {

    const detectedDevice = () => {
        const queriesToMatchAgainst = {
            mobile: '(max-width: 767px)',
            tablet: '(min-width: 768px) and (max-width: 1023px)',
            desktop: '(min-width: 1024px)',
        };

        if (typeof window !== "undefined") {

            if (window.matchMedia(queriesToMatchAgainst.mobile).matches) {
                return MOBILE;
            }
            if (window.matchMedia(queriesToMatchAgainst.tablet).matches) {
                return TABLET;
            }
            return DESKTOP;        }
    }
    const [deviceType, setDeviceType] = useState(()=>detectedDevice())




 useEffect(() => {
     const resizeHandler = () => {
         const detectedDevice = detectDevice();
         if (detectedDevice !== deviceType) {
             setDeviceType(detectedDevice);
         }
     };
     window.addEventListener('resize', resizeHandler);
     return () => window.removeEventListener('resize', resizeHandler);
 }, [deviceType]);



    return (
        <div>
            <button onClick={() => (console.log(deviceType))}>ffff</button>
        </div>
    );
};

export default WhatIsDevice;
