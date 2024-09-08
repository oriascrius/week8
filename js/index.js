// 1.banner swiper
const swiper_banner = new Swiper(".swiper-banner", {
  breakpoints: {
    992: {
      // 假設 992px 是 lg 尺寸的斷點
      slidesPerView: 1,
      spaceBetween: 200,
      // enabled: true, // 啟用 Swiper
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 40,
      // enabled: true, // 啟用 Swiper
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 2.火熱募資課程 swiper
// 分類連結
const swiper_popular_courses_link = new Swiper(".swiper-popular-courses-link", {
  slidesPerView: 3,
  spaceBetween: 8,
  slidesPerGroup: 1, // 一次滑動 1 個
});
// 課程卡片
const swiper_popular_courses = new Swiper(".swiper-popular-courses", {
  //   768 以下時
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    //   768 以上時
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: "row",
      },
    },
  },
});
// 3.看看大家都買了什麼 swiper
const swiper_courses_list = new Swiper(".swiper-courses-list", {
  slidesPerView: 1,
  spaceBetween: 24,
  slidesPerGroup: 1, // 一次滑動 1 個
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 24,
      slidesPerGroup: 1, // 一次滑動 1 個
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 24,
      slidesPerGroup: 1, // 一次滑動 1 個
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
      slidesPerGroup: 1, // 一次滑動 1 個
    },
  },
});

// 4.想學什麼嗎？
const swiper_study_courses_swipere = new Swiper(".study-courses-swiper", {
  slidesPerView: 1,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// 5.頂尖講師帶你飛
const swiper_teacher_describe = new Swiper(".teacher-describe-swiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
      enabled: true, 
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 24  ,
      enabled: false, // 禁用 Swiper
    },
  },
});
