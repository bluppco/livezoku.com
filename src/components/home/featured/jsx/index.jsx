// IMPORT SWIPER SLIDER 
import { Swiper, SwiperSlide } from "swiper/react"

// IMPORT SWIPER SLIDES
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// IMPORT SWIPER MODULES
import { Autoplay } from "swiper/modules"

// IMPORT JSX ATOMS
import ParagraphSmallThinCenter from "@/atoms/paragraph/sm/thin/center/index.jsx" 
import PictureContain from "@/atoms/picture/internal/contain/jsx"

// HARDCODED DATA
const news = [

    {  
        description:"A New Type of Hotel is Upping its Game to Compete with Airbnb",
        source: "/images/Featured_img1.png",
    },
    {
        description:"One of the 25 Coolest Hotels in the World",
        source: "/images/Featured_img2.png",
    },
    {
        description:"Expertly Designed with Business Travellers in Mind",
        source: "/images/Featured_img3.jpg",
    },
    {
        description:"10 Stunning Apartment Hotels Around the Europe's Best Hotels for Business Travel",
        source: "/images/Featured_img4.png",
    },
    {
        description:"These New Hotels Can Actually Compare to Airbnb",
        source: "/images/Featured_img5.png",
    },
    {
        description:"Europe’s Best Hotels for Business Travel",
        source: "/images/Featured_img6.jpg",
    },
    {
        description:"New Hotel Concept Provides Global Nomads with a Local Social Life",
        source: "/images/Featured_img7.png",
    },

]

const NewsCarousel = () => {

    return (

        <section className="mx-10">
            <Swiper
                // AUTOPLAY TRUE
                autoplay={{
                    delay:5000,
                    disableOnInteraction: false,
                }}

                // INFINITEllY RUN SLIDES
                loop={ true }
                modules={[Autoplay,]}

                // MOBILE SHOW ONE SLIDE
                slidesPerView={ 1 }
                spaceBetween={ 30 }
                centeredSlides={ true }

                // RESPONSIVE
                breakpoints={{

                    // AFTER 640 WINDOW SIZE
                    640: {

                        slidesPerView: 3.2,
                        spaceBetween: 10,

                    },

                    // AFTER 768 WINDOW SIZE
                    802: {

                        slidesPerView: 4.2,
                        spaceBetween: 10,
                        centeredSlides: true,

                    },

                    // AFTER 1024 WINDOW SIZE
                    1024: {

                        slidesPerView: 5,
                        spaceBetween: 10,
                        centeredSlides: true,

                    },

                }}
            >
                {
                
                    news.map( ( item ) => (

                        <SwiperSlide>
                            <div className="flex items-center justify-center">
                                <div className="w-40">
                                    <div className="w-24 aspect-video ml-5">
                                        <PictureContain
                                            alternative_text={ item.alternative_text } 
                                            source={ item.source } 
                                        />
                                    </div>
                                    <div className="w-32">
                                        <ParagraphSmallThinCenter>{ item.description }</ParagraphSmallThinCenter>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))
                
                }
            </Swiper>
        </section>

    )

}
export default NewsCarousel
