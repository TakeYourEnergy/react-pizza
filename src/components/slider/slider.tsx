import React, { FC, useRef, useEffect, useState } from 'react';
import styles from './slider.module.scss';
import { Pagination, Navigation, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { nanoid } from '@reduxjs/toolkit';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

interface ISlader {
	imageUrl: string[];
	alt: string;
}

export const Slider: FC<ISlader> = ({ imageUrl, alt }) => {
	const useSwiperRef = <T extends HTMLElement>(): [T | null, React.Ref<T>] => {
		const [wrapper, setWrapper] = useState<T | null>(null);
		const ref = useRef<T>(null);

		useEffect(() => {
			if (ref.current) {
				setWrapper(ref.current);
			}
		}, []);

		return [wrapper, ref];
	};

	const [nextEl, nextElRef] = useSwiperRef<HTMLButtonElement>();
	const [prevEl, prevElRef] = useSwiperRef<HTMLButtonElement>();
	return (
		<div className={styles.slider}>
			<Swiper
				spaceBetween={30}
				effect={'fade'}
				navigation={{
					prevEl,
					nextEl,
					disabledClass: 'hidden', // <-- css classes are added automatically
				}}
				pagination={{
					clickable: true,
				}}
				modules={[EffectFade, Navigation, Pagination]}
				className='mySwiper'
			>
				{imageUrl &&
					imageUrl.map(img => {
						return (
							<SwiperSlide key={nanoid()}>
								<img className={styles.img} src={img} alt={alt} />
							</SwiperSlide>
						);
					})}
			</Swiper>
			<button ref={prevElRef} className={styles.prev}>
				<AiOutlineArrowLeft />
			</button>
			<button ref={nextElRef} className={styles.next}>
				<AiOutlineArrowRight />
			</button>
		</div>
	);
};
