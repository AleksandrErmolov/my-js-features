import React, {useEffect, useState} from 'react';

const MOBILE = 'MOBILE';
const TABLET = 'TABLET';
const DESKTOP = 'DESKTOP';
const LARGE = 'LARGE';

const WhatIsDevice = () => {

    const detectDevice = () => {
        const queriesToMatchAgainst = {
            mobile: '(max-width: 767px)',
            tablet: '(min-width: 768px) and (max-width: 1023px)',
            desktop: '(min-width: 1024px)',
            large: '(min-width: 1250)',

        };

        if (typeof window !== "undefined") {

            if (window.matchMedia(queriesToMatchAgainst.mobile).matches) {
                return MOBILE;
            }
            if (window.matchMedia(queriesToMatchAgainst.tablet).matches) {
                return TABLET;
            }
            if (window.matchMedia(queriesToMatchAgainst.desktop).matches) {
                return DESKTOP;
            }
            return LARGE;
        }
    }
    const [deviceType, setDeviceType] = useState(() => detectDevice())


    useEffect(() => {
        const resizeHandler = () => {
            const detectedDevice = detectDevice();
            if (detectedDevice !== deviceType) {
                setDeviceType(detectedDevice);
            }
        };
        window.addEventListener('resize', resizeHandler);
        return () => window.removeEventListener('resize', resizeHandler);
    }, [deviceType])

    return deviceType;
};

export default WhatIsDevice;

export const DEVICE_TYPES = {
    MOBILE,
    TABLET,
    DESKTOP,
    LARGE,
};

