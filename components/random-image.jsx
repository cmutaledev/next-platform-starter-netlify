'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const randomImage = '/api/images';

export function RandomImage() {
    const [image, setImage] = useState(null);
    const [time, setTime] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch(randomImage, { cache: 'no-store' });
                if (response) {
                    const data = await response.json();
                    setImage(data);
                    setTime(new Date().toLocaleString());
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchImage();
    }, []);

    return (
        <div>
            {
                image && (
                    <Image
                        src={`/.netlify/images?url=https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg`}
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        style={{ objectFit: 'contain' }}
                        fill={true}
                        alt={image.description} />
                )
            }
        </div>
    );
}
