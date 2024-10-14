
import  reviews  from "./reviewsData";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


 const Reviews = ({title}) => {
  return (
    <div className='reviews'>
      <div className='reviews-top'>
        <div className='reviews-title' dangerouslySetInnerHTML={{ __html: title}} ></div>
        <div className='reviews-description'>{reviews[0].description}</div>
      </div>
        <Swiper
          modules={[Navigation, A11y, Autoplay ]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          autoheight={true}
          loop={true}  
          autoplay={{
          delay: 3000,  
          disableOnInteraction: false}}
          speed={800}
        
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className='reviews-review'>
                <img className='review-circle-l' src={review.src1} alt="Circle" />
                <img className='review-circle-r' src={review.src2} alt="Circle" />
                <img className='review-quotes' src={review.src3} alt="Quotes" />
                <div className='review'>{review.review}</div>
                <div className='review-person'>
                  <img className='person-photo' src={review.photo} alt="Person" />
                  <div className='person-name'>{review.name}</div>
                  <div className='person-country'>{review.country}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
};

export default Reviews;
