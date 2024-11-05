import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';

const Advertise = () => {
    const advertisement = [
        {
            id: 1,
            content: '🔥 Get 20% off on your first order! Limited time only! 🔥',
        },
        {
            id: 2,
            content: '🔥 Get 50% off! Limited time only! 🔥',
        },
    ];

    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setVisible(scrollTop === 0); // Show advertisement only at the top
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`relative top-0 left-0 right-0 bg-gray-100 p-2 text-center transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'} shadow-md`}>
            <Carousel autoplay dots={false}>
                {advertisement.map((ad) => (
                    <div key={ad.id} className="flex justify-center items-center">
                        <p className="text-lg font-semibold">{ad.content}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Advertise;
