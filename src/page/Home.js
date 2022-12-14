
import { useEffect } from "react";
import { bestDataChange,} from "../store";
import { useDispatch, useSelector } from "react-redux"

// swiper
import { Pagination, Scrollbar, A11y,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// components
import Header from '../components/Header.js'
import { getBestData } from "../util/GetAjax";

// fontawesome
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = ()=>{
    
  const dispatch = useDispatch()
  useEffect(()=>{
    getBestData().then(res=>dispatch(bestDataChange(res)))
  },[])

    let bestData = useSelector((state)=>{return state.bestData})
    return(
        <div className="Home">

          <Header/>
            

{/* 슬라이드 / */}
<Swiper className='slide'
      // install Swiper modules
      modules={[ Pagination, Scrollbar, A11y,Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 1500 }}
      speed={1500}
      loopedSlides={1}
      pagination={{ clickable: true }}
    >
      
      <SwiperSlide>{bestData.length > 1 ? <img src={bestData[0].img} alt="slide"/> : <></> }</SwiperSlide>
      <SwiperSlide>{bestData.length > 1 ? <img src={bestData[1].img} alt="slide"/> : <></> }</SwiperSlide>
      <SwiperSlide>{bestData.length > 1 ? <img src={bestData[2].img} alt="slide"/> : <></> }</SwiperSlide>
    </Swiper>
    <h1 className='between_title'>추천 게임들</h1>
{/* 추천 게임들 */}
  <section className='recommend'>
    
    {bestData.slice(1,4).map((a,i)=>{
      return (
        <Link key={i} className="recommend_box" to={`/gamesdetail/${a.id}`}>
          <img src={a.img}/>
        </Link>
      )
    })}
  
  </section>

  <Footer/>
</div>
    )
}
export default Home