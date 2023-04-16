import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <main>
            <div className='hero-info'>
                <h4>hi, i am juan almonte</h4>
                <h1>professional web developer</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repellat corrupti non doloribus esse inventore consequatur
                    aspernatur accusamus quasi aperiam, blanditiis excepturi
                    fugiat provident sed praesentium totam at dolorum
                    perspiciatis voluptatem. Odit numquam deserunt quidem
                    accusantium recusandae odio corrupti incidunt, ab
                    architecto! Maxime enim et minus! Odit et quod ipsum eius.
                </p>
            </div>
            <div className='hero-img'>
                <Image src={'./'} />
            </div>
        </main>
    );
};

export default Hero;
