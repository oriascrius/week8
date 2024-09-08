//  桌機板下拉選單 - 第一層 > 第二層> 第三層

$(document).ready(function () {
  // 显示第二层菜单
  $(".firstOpen").on("mouseenter", function () {
    $(".second").addClass("d-block");
  });

  // 隐藏第二层菜单
  $(".firstOpen, .second").on("mouseleave", function () {
    setTimeout(() => {
      if (
        !$(".firstOpen").is(":hover") &&
        !$(".second").is(":hover") &&
        !$(".third").is(":hover")
      ) {
        $(".second").removeClass("d-block");
      }
    }, 100);
  });

  // 显示第三层菜单
  $(".secondOpen").on("mouseenter", function () {
    // 隐藏所有第三层菜单
    $(".third").removeClass("d-block");
    // 显示相关的第三层菜单
    const thirdLayer = $(this).closest("ul.second").next(".third");
    if (thirdLayer.length) {
      thirdLayer.addClass("d-block");
    }
  });

  // 隐藏第三层菜单
  $(".secondOpen, .third").on("mouseleave", function () {
    setTimeout(() => {
      if (!$(".secondOpen").is(":hover") && !$(".third").is(":hover")) {
        $(".third").removeClass("d-block");
      }
    }, 100);
  });

  // 处理第三层菜单的显示
  $(".third").on("mouseenter", function () {
    $(this).addClass("d-block");
  });
});

// 手機板下拉選單 - 第一層 > 第二層

$(document).ready(function () {
  // 當點擊第一層的 mobilefirstOpen 時
  $(".mobilefirstOpen").on("click", function (e) {
    e.preventDefault(); // 防止預設的鏈接行為

    // 隱藏 mobileFirst
    $(".mobileFirst").hide();
    $(".mobileLogin").hide();

    // 顯示 mobileSecond
    $(".mobileSecond").show();
  });
});

// 手機板下拉選單 - 第二層兩個區塊，分別是探索和會員、會員的登出按鈕

$(document).ready(function () {
  $(".exploreLink").on("click", function (e) {
    e.preventDefault(); // 防止預設的鏈接行為
    $(".header-member").hide();
    $(".mobileLogout").hide();
    $(".header-explore").show();
  });
});
$(document).ready(function () {
  $(".memberLink").on("click", function (e) {
    e.preventDefault(); // 防止預設的鏈接行為
    $(".header-explore").hide();
    $(".header-member").show();
    $(".mobileLogout").show();
  });
});
