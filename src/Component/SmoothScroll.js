import React, { useEffect } from 'react';
import '../CSS/SmoothScroll.css';
import $ from 'jquery';
import FeaturedOnLogo from '../Featured on/suntv.png';


const SmoothScroll = () => {
    useEffect(() => {
        const initSmoothScrolling = (container, animation) => {
            let sliderWidth = 0;
            let animationWidth = 0;
            const sliderHeight = $(`${container} > div > div:first-of-type`).outerHeight(false);

            $(`${container} > div > div`).each(function () {
                animationWidth += $(this).outerWidth(false);
            });

            let slidesVisible = $(container).width() / $(`${container} > div > div:first-of-type`).outerWidth(false);
            slidesVisible = Math.ceil(slidesVisible);

            const slidesNumber = $(`${container} > div > div`).length;
            const speed = slidesNumber * 2;

            $(`${container} > div > div`).slice(0, slidesVisible).clone().appendTo(`${container} > div`);

            $(`${container} > div > div`).each(function () {
                sliderWidth += $(this).outerWidth(false);
            });

            $(`${container} > div`).css({ width: sliderWidth, height: sliderHeight });

            const keyframes = `
        @keyframes ${animation} {
          0% { margin-left: 0px; }
          0% { margin-left: 0px; }
          100% { margin-left: -${animationWidth}px; }
        }
      `;
            const animationStyle = `
        ${container} > div > div:first-of-type {
          animation: ${animation} ${speed}s linear infinite;
        }
      `;

            $("<style>")
                .prop("type", "text/css")
                .html(keyframes + animationStyle)
                .appendTo("head");

            const cl = $(container).attr("class");
            $(container).removeClass(cl).animate({ 'nothing': null }, 1, function () {
                $(this).addClass(cl);
            });
        };

        $(window).on('load', function () {
            initSmoothScrolling('.block', 'smoothscroll');
        });
    }, []);

    return (
        <div className="block">
            <div className="animation">
                <div className="col"><img className='FeaturedImg' src={FeaturedOnLogo} alt='Sun TV Logo'></img>
                </div>

                <div className="col"><img className='FeaturedImg' src={FeaturedOnLogo} alt='Sun TV Logo'></img>
                </div>

                <div className="col"><img className='FeaturedImg' src={FeaturedOnLogo} alt='Sun TV Logo'></img>
                </div>

                <div className="col"><img className='FeaturedImg' src={FeaturedOnLogo} alt='Sun TV Logo'></img>
                </div>

                <div className="col"><img className='FeaturedImg' src={FeaturedOnLogo} alt='Sun TV Logo'></img>
                </div>

                <div className="col"><img className='FeaturedImg' src={FeaturedOnLogo} alt='Sun TV Logo'></img>
                </div>

                <div className="col"><img className='FeaturedImg' src={FeaturedOnLogo} alt='Sun TV Logo'></img>
                </div>


            </div>
        </div>
    );
};

export default SmoothScroll;
