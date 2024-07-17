// const refreshGsapAnimations = () => {
//   // Kill existing ScrollTriggers
//   ScrollTrigger.getAll().forEach(trigger => trigger.kill());
// (function() {
//   gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);
//   ScrollTrigger.refresh();
//   const intro = document.querySelector(".intro--banner");
//   if (!intro) return;

//   const isNonScroll = document.querySelector('[data-current]');


//   const introTitle = document.querySelector(".intro--banner_title");
//   const introBackground = document.querySelector(".intro--banner_bg");
  
//   if(isNonScroll.getAttribute('data-current') == "board"){ // 특정 페이지에서 기능 미작동을 위한 조건문
    
//   } else {
//     let introStroy = gsap.timeline({
//       scrollTrigger: {
//           id: 'sub_introTitle',
//           trigger : intro,
//           start : 'top top',
//           end : 'bottom center',
//           //toggleClass : 'scroll',
//           pin : false,
//           //markers : true,
//           scrub: 0.3,
//           onUpdate : (self) => {
//               const scrollPos = self.progress * (window.innerHeight - introTitle.offsetHeight) / 2;
//                   introTitle.style.top= `${scrollPos}px`;
//           }
//       }
//     })
//     introStroy.to(introTitle, { color : '#fff' , duration : 0.4});
//   }
  
//   if(isNonScroll.classList.contains('promotion')){ 
//     return
//   };
//   let introStroyBg = gsap.timeline({ 
//     scrollTrigger: {
//         id: 'sub_intro',
//         trigger : intro,
//         start : 'top top-=10%',
//         end : 'bottom center',
//         pin : false,
//         scrub: 0.3,
//         onLeave : () => {
//             //console.log('introStroy end');
//         }
//     }
//   })
//   introStroyBg.to(introBackground, { maxWidth : '100%' , duration : 2 , borderRadius : '0rem'})
//   .to(introTitle.querySelectorAll("h2, p"), {
//     color: '#fff',
//     ease: 'none',
//   }, 0)

  
// })();
// };
// //refreshGsapAnimations();
// window.addEventListener('resize', function() { 
//   //refreshGsapAnimations();
// })






function introBanner() {

const isNonScroll = document.querySelector('[data-current]');

const bannerTitle = document.querySelector('.intro--banner_title');
const visualElement = document.querySelector('.intro--visual');
const visualWrap = document.querySelector('.intro--banner_bg');
const intro = document.querySelector(".intro--banner");


if (!intro) return;

if(isNonScroll.getAttribute('data-current') == "board"){
  
} else {
  var introHeadAction = {
    enter: function(){
      bannerTitle.classList.add('is-break');
      bannerTitle.style.marginTop = '0';
      bannerTitle.style.top = '45%';
      bannerTitle.style.transform = 'translateY(-50%)';
    },
    leave: function(){
      bannerTitle.classList.remove('is-break');
      bannerTitle.removeAttribute('style');
    }
  };

  gsap.to('.page_title', { color: '#ffffff', duration: 1,
    scrollTrigger: {
        trigger: visualWrap,
        start: 'top 50%',
        end: 'top',
        scrub: 1,
        toggleClass: { targets: bannerTitle , className: 'is-active' }
    }
  });

  gsap.to('.sub_title_desc', { color: '#ffffff', duration: 1,
    scrollTrigger: {
        trigger: visualWrap,
        start: 'top 50%',
        end: 'top',
        scrub: 1,
        toggleClass: { targets: bannerTitle, className: 'is-active' }
    }
  });
  gsap.to(bannerTitle, {
    scrollTrigger: {
        trigger: visualElement,
        start: 'top 12%',
        end: 'bottom',
        onEnter: function(){
            introHeadAction.enter();
        },
        onLeave: function(){
            // 클래스 추가
            bannerTitle.classList.add('is-break');

            // top 스타일을 현재 윈도우 스크롤 위치로 설정
            bannerTitle.style.top = `${window.scrollY}px`;
            introHeadAction.enter();
        },
        onEnterBack: function(){
            introHeadAction.enter();
        },
        onLeaveBack: function(){
            introHeadAction.leave();
        }
    }
  });
}



ScrollTrigger.matchMedia({
  // Mobile
  "(max-width: 767px)": function() {
    visualElement.removeAttribute('style');
      gsap.to(visualElement, { width: '100vw', duration: 1,
          scrollTrigger: {
              trigger: visualElement,
              start: 'top 250px',
              end: 'bottom top',
              scrub: 1,
              ease: 'power4',
              //markers: true
          }
      });
  },
  "(max-width: 1279px)": function() {
      visualElement.removeAttribute('style');
      gsap.to(visualElement, { width: '100vw', duration: 1,
          scrollTrigger: {
              trigger: visualElement,
              start: 'top 200px',
              end: 'top',
              scrub: 1,
              ease: 'power4',
              //markers: true
          }
      });
  },
  // Desktop
  "(min-width: 1280px)": function() {
    visualElement.removeAttribute('style');
      gsap.to(visualElement, { width: '100vw', duration: 1,
          scrollTrigger: {
              trigger: visualElement,
              start: 'top 400px',
              end: 'top',
              scrub: 1,
              ease: 'power4',
              //markers: true
          }
      });
  }
});
}
introBanner()
// 윈도우 리사이즈 이벤트 핸들러 추가
window.addEventListener('resize', function() {
  // ScrollTrigger.refresh() 호출
  ScrollTrigger.refresh();
});