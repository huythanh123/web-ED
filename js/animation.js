//Huy
let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Cuộn xuống -> ẩn header
    header.classList.add("header-hidden");
    header.classList.remove("header-active");
  } else {
    // Cuộn lên -> hiện header
    header.classList.remove("header-hidden");

    // Nếu cuộn không phải về top -> đổi màu header thành trắng
    if (scrollTop > 0) {
      header.classList.add("header-active");
    } else {
      // Nếu cuộn về vị trí đầu trang -> xóa lớp header-active để trở về như cũ
      header.classList.remove("header-active");
    }
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Tránh trường hợp giá trị âm
});

function openLogin() {
  const loginContainer = document.querySelector(".float-login-container");
  const floatContent = document.querySelector(".float-content");

  if (loginContainer.style.display === "block") {
    // Ẩn container
    floatContent.style.opacity = "0"; // Giảm độ trong suốt của nội dung
    floatContent.style.transform = "translateY(-20px)"; // Di chuyển nội dung lên
    loginContainer.style.opacity = "0"; // Giảm độ trong suốt của container
    loginContainer.style.transform = "translateY(-20px)"; // Di chuyển container lên
    setTimeout(() => {
      loginContainer.style.display = "none"; // Ẩn sau khi kết thúc hiệu ứng
    }, 500); // Thời gian tương ứng với thời gian chuyển động
  } else {
    // Hiển thị container
    loginContainer.style.display = "block"; // Hiển thị
    setTimeout(() => {
      loginContainer.style.opacity = "1"; // Tăng độ trong suốt của container
      loginContainer.style.transform = "translateY(0)"; // Di chuyển container xuống
      floatContent.style.opacity = "1"; // Tăng độ trong suốt của nội dung
      floatContent.style.transform = "translateY(0)"; // Di chuyển nội dung xuống
    }, 10); // Thời gian chờ một chút trước khi bắt đầu hiệu ứng
  }
}

// Đảm bảo rằng khi nhấp ra ngoài menu, nó sẽ đóng lại
document.addEventListener("click", function (event) {
  const loginContainer = document.querySelector(".float-login-container");
  const loginIcon = document.getElementById("login-icon");

  if (
    !loginIcon.contains(event.target) &&
    !loginContainer.contains(event.target)
  ) {
    loginContainer.style.display = "none"; // Ẩn khi nhấp bên ngoài
  }
});

function toggleMenu() {
  const hiddenList = document.querySelector(".hidden-list-mobile");
  hiddenList.classList.toggle("show-menu");
  document.body.classList.toggle("no-scroll");
  console.log(1);
}

document.getElementById("areas-of-work").addEventListener("click", function () {
  const dropMenu = document.querySelector(".drop-menu");
  dropMenu.classList.toggle("show");
});

const banner = document.querySelector(".banner");

function handleScroll(event) {
  const maxScrollLeft = banner.scrollWidth - banner.clientWidth;

  if (banner.scrollLeft >= maxScrollLeft && event.deltaY > 0) {
    // Nếu đã cuộn hết và cuộn tiếp, cho phép cuộn trang
    window.scrollBy({
      top: event.deltaY, // Cuộn xuống dưới phần body
      behavior: "smooth",
    });
  } else if (banner.scrollLeft === 0 && event.deltaY < 0) {
    // Nếu đã ở đầu danh sách và cuộn ngược lại, cho phép cuộn trang lên trên
    window.scrollBy({
      top: event.deltaY, // Cuộn lên trên phần body
      behavior: "smooth",
    });
  } else {
    // Vẫn ở trong vùng có thể cuộn ngang, ngăn cuộn trang và chỉ cuộn ngang
    event.preventDefault();
    banner.scrollBy({
      left: event.deltaY > 0 ? 200 : -200,
      behavior: "smooth",
    });
  }
}

// Gắn sự kiện cuộn cho phần banner
banner.addEventListener("wheel", handleScroll);

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Kiểm tra xem phần tử đã có lớp 'active' chưa
    const isActive = this.parentElement.classList.contains("active");

    // Xóa lớp 'active' khỏi tất cả các phần tử li
    navLinks.forEach((link) => link.parentElement.classList.remove("active"));

    // Nếu phần tử chưa có lớp 'active', thêm lớp 'active' cho nó
    if (!isActive) {
      this.parentElement.classList.add("active");
    }
  });
});

window.addEventListener("load", function () {
  const bannerContent = document.querySelector(".banner-content");
  bannerContent.classList.add("show"); // Thêm lớp `show` khi trang được tải
});

window.addEventListener("load", function () {
  const bannerImage = document.querySelector(".banner-image");
  bannerImage.classList.add("show"); // Thêm lớp `show` khi trang được tải
});


//

document.addEventListener('DOMContentLoaded', () => {
  // Kiểm tra kích thước màn hình
  if (window.innerWidth > 1200) {
    const jobsContentUp = document.getElementsByClassName('contact-container')[0];
    if (jobsContentUp) {
      const jobsChildren = document.querySelectorAll('.contact-row-content');

      jobsChildren.forEach(child => {
        const icons = child.querySelectorAll('.arrow-down');

        child.addEventListener('mouseover', () => {
          const contentLeft = document.querySelector('.content-left-top .title-content-left');
          const contentRight = document.querySelector('.content-right-top .title-content-left-2');

          if (contentLeft) {
            contentLeft.style.color = 'white';
          }

          if (contentRight) {
            contentRight.style.color = 'white';
          }

          const titleElement = child.querySelector('.icon-title');
          if (titleElement) {
            const text = titleElement.textContent;
            if (text === 'Facebook') {
              jobsContentUp.style.backgroundColor = '#296ae1';
            } else if (text === 'Messenger' || text === 'Tin nhắn') {
              jobsContentUp.style.background = 'linear-gradient(90deg, rgb(10, 124, 255) 0%, rgb(161, 14, 235) 40%, rgb(255, 82, 151) 60%, rgb(255, 108, 92) 100%)';
            } else if (text === 'Instagram') {
              jobsContentUp.style.background = 'linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)';
            } else if (text === 'WhatsApp') {
              jobsContentUp.style.backgroundColor = '#25D366';
            } else if (text === 'Meta Quest' || text === 'Nhiệm vụ Meta') {
              jobsContentUp.style.backgroundColor = '#000000';
            } else if (text === 'Workplace' || text === 'Nơi làm việc') {
              jobsContentUp.style.backgroundColor = '#20252D';
            }

            titleElement.style.color = 'white';
            titleElement.style.transition = 'color 0.3s ease';
          }

          // Đảm bảo chúng ta đang thay đổi màu cho phần tử path của SVG
          const iconColor = child.querySelectorAll('.svg-icon path');
          iconColor.forEach(icon => {
            icon.style.fill = 'white';
            icon.style.transition = 'fill 0.3s ease';
          });

          icons.forEach(icon => {
            icon.style.display = 'flex';
          });
        });

        child.addEventListener('mouseout', () => {
          jobsContentUp.style.backgroundColor = '#F5F6F6';
          jobsContentUp.style.background = '#F5F6F6';

          const contentLeft = document.querySelector('.content-left-top .title-content-left');
          const contentRight = document.querySelector('.content-right-top .title-content-left-2');

          if (contentLeft) {
            contentLeft.style.color = '';
          }

          if (contentRight) {
            contentRight.style.color = '';
          }

          const titleElement = child.querySelector('.icon-title');
          if (titleElement) {
            titleElement.style.color = '';
          }

          // Đặt lại màu của icon SVG sau khi di chuột ra ngoài
          const iconColor = child.querySelectorAll('.svg-icon path');
          iconColor.forEach(icon => {
            icon.style.fill = ''; // Quay lại màu gốc
          });

          icons.forEach(icon => {
            icon.style.display = 'none';
          });
        });
      });
    } else {
      console.error('Element with class "contact-container" not found.');
    }
  }
});


let activeImage = null;

function employImgClickSmall(index) {
    const containers = document.querySelectorAll('.container1');

    containers.forEach((container, idx) => {
        if (idx === index) {
            // Khi container được chọn
            if (activeImage !== index) {
                container.classList.add('active');
                container.style.flexBasis = "350%";
                container.style.flexGrow = "4";
                container.style.height = "auto";
                container.style.transform = "translateY(0)";
                activeImage = index;
            }
        } else {
            if (Math.abs(idx - index) === 0) {
                container.style.flexBasis = "20%";
                container.style.flexGrow = "1";
                container.style.height = "100%";
                container.style.transform = "translateY(0)";
                container.style.display = "block";
            } else if (Math.abs(idx - index) === 1) {
                container.style.flexBasis = "20%";
                container.style.flexGrow = "1";
                container.style.height = "100%";
                container.style.transform = "translateY(0)";
                container.style.display = "block";
            } else {
                container.style.display = "none";
            }
            container.classList.remove('active');
        }
    });
}

function employImgClickLarge(index) {
    const containers = document.querySelectorAll('.container1');

    containers.forEach((container, idx) => {
        if (idx === index) {
            if (activeImage !== index) {
                container.classList.add('active');
                container.style.flexBasis = "350%";
                container.style.flexGrow = "4";
                container.style.height = "auto";
                container.style.transform = "translateY(0)";
                activeImage = index;
            }
        } else {
            if (idx % 2 === 1) {
                container.style.flexBasis = "20%";
                container.style.flexGrow = "1";
                // container.style.marginTop = "100px";
                container.style.height = "90%";
                container.style.transform = "translateY(60px)";
            
                // if (window.matchMedia("(max-width: 2496px)").matches) {
                //     container.style.marginTop = "80px";
                //     container.style.height = "84%";
                //     container.style.transform = "translateY(0px)";
                // }
            } else {
                container.style.flexBasis = "20%";
                container.style.flexGrow = "1";
                container.style.height = "100%";
                container.style.transform = "translateY(0)";
            }
            container.classList.remove('active');
            
        }
    });
}

// Kiểm tra kích thước màn hình và áp dụng logic phù hợp
function setupImageClick() {
    const isSmallScreen = window.matchMedia("(max-width: 1199px)").matches;

    if (isSmallScreen) {
        // Dành cho màn hình nhỏ hơn hoặc bằng 480px
        employImgClickSmall(0); // Mở hình thứ 2 khi trang tải
        document.querySelectorAll('.container1').forEach((container, index) => {
            container.addEventListener('click', () => employImgClickSmall(index));
        });
    } else {
        // Dành cho màn hình lớn hơn 480px
        employImgClickLarge(1); // Mở hình thứ 2 khi trang tải
        document.querySelectorAll('.container1').forEach((container, index) => {
            container.addEventListener('click', () => employImgClickLarge(index));
        });
    }
}

// Gọi setupImageClick khi trang tải
window.onload = setupImageClick;

// Đảm bảo rằng chức năng sẽ cập nhật khi thay đổi kích thước màn hình
window.addEventListener('resize', setupImageClick);



//tuan
window.addEventListener('scroll',topDown = () => {
  var main = document.querySelector('.cn-title-1');
  var windowHeight = window.innerHeight;
  var revealtop = main.getBoundingClientRect().top;
  var revealpoint = 1300;

  if(revealtop < windowHeight - revealpoint){
    main.classList.add('topDown')
  }

})

window.addEventListener('scroll',fade_in = () => {
  var main = document.querySelector('.img-connect-1');
  var windowHeight = window.innerHeight;
  var revealtop = main.getBoundingClientRect().top;
  var revealpoint = 600;

  if(revealtop < windowHeight - revealpoint){
    main.classList.add('fade-in')
  }

})

window.addEventListener('DOMContentLoaded', function() {
  const wrapperScroll = document.querySelector('.wrapper-scroll');
  const img123 = document.querySelector('.img-123');

  wrapperScroll.addEventListener('scroll', function() {
      const scrollLeft = wrapperScroll.scrollLeft;
      const contentWidth = wrapperScroll.scrollWidth - wrapperScroll.clientWidth;

      if (scrollLeft > contentWidth / 3) {
        console.log('scrollLeft:', scrollLeft, 'contentWidth:', contentWidth);
          img123.classList.add('sideup');
      } 
  });
});

window.addEventListener('DOMContentLoaded', function() {
const wrapperScroll = document.querySelector('.wrapper-scroll');
const img123 = document.querySelector('.cn-title-2');

wrapperScroll.addEventListener('scroll', function() {
    const scrollLeft = wrapperScroll.scrollLeft;
    const contentWidth = wrapperScroll.scrollWidth - wrapperScroll.clientWidth;

    if (scrollLeft > contentWidth / 3) {
      console.log('scrollLeft:', scrollLeft, 'contentWidth:', contentWidth);
        img123.classList.add('topDown2');
    } 
});
});
//hau
function loginBar(){
  let contentLeft = document.querySelector('.float-login-container')
  if (contentLeft.style.display === "block") {
    contentLeft.style.display = "none";
  } else {
    contentLeft.style.display = "block";
    contentLeft.style.zIndex = "100";
  }
}

function listMobile(){
  let listMobile = document.querySelector('.hidden-list-mobile')
  let webContent = document.querySelector('.web-content')
  if (listMobile.style.display === "block") {
    listMobile.style.display = "none";
    webContent.style.display = "block";
  } else {
    webContent.style.display = "none";
    listMobile.style.display = "block";
  }
}


function employImg1Click(){
  let employImg1 = document.querySelector('#employ-img-1')
  employImg1.style.width = "80vw"
}

function employImg2Click(){
  let employImg1 = document.querySelector('#employ-img-1')
  let employImg2 = document.querySelector('#employ-img-2')

  employImg1.style.width = "6vw"
  employImg2.style.width = "80vw"
  employImg1.style.display = "block"


  if(employImg1.style.width !== "6vw" && employImg1.style.width === "80vw") {
    employImg2.style.width = "80vw"
    employImg1.style.width = "6vw"
    employImg1.style.display = "block"
  }
}

function employImg3Click(){
    let employImg1 = document.querySelector('#employ-img-1')
    let employImg2 = document.querySelector('#employ-img-2')
    let employImg3 = document.querySelector('#employ-img-3')
    
  employImg2.style.width = "6vw"
  employImg2.style.display = "block"
  employImg3.style.width = "80vw"
  employImg1.style.display = "none"


  if(employImg2.style.width !== "6vw" && employImg2.style.width === "80vw") {
    employImg3.style.width = "80vw"
    employImg2.style.width = "6vw"
    employImg2.style.display = "block"
  }
}

function employImg4Click(){
  let employImg1 = document.querySelector('#employ-img-1')
  let employImg2 = document.querySelector('#employ-img-2')
  let employImg3 = document.querySelector('#employ-img-3')
  let employImg4 = document.querySelector('#employ-img-4')
  let employImg5 = document.querySelector('#employ-img-5')
  let employImg6 = document.querySelector('#employ-img-6')
  let employImg7 = document.querySelector('#employ-img-7')
  
  employImg3.style.width = "6vw"
  employImg2.style.display = "none"
  employImg4.style.width = "80vw"
  employImg3.style.width = "6vw"  
  employImg3.style.display = "block"  

  if(employImg3.style.width !== "6vw" && employImg5.style.width === "80vw") {
    employImg4.style.width = "80vw"
    employImg3.style.width = "6vw"
    employImg3.style.display = "block"
  }
}

function employImg5Click(){
  let employImg1 = document.querySelector('#employ-img-1')
  let employImg2 = document.querySelector('#employ-img-2')
  let employImg3 = document.querySelector('#employ-img-3')
  let employImg4 = document.querySelector('#employ-img-4')
  let employImg5 = document.querySelector('#employ-img-5')
  let employImg6 = document.querySelector('#employ-img-6')
  let employImg7 = document.querySelector('#employ-img-7')
  
  employImg4.style.width = "6vw"
  employImg3.style.display = "none"
  employImg5.style.width = "80vw"
  employImg4.style.width = "6vw"  
  employImg4.style.display = "block"  
  
  if(employImg4.style.width !== "6vw" && employImg6.style.width === "80vw") {
    employImg5.style.width = "80vw"
    employImg4.style.width = "6vw"
    employImg4.style.display = "block"
  }
}

function employImg6Click(){
  let employImg1 = document.querySelector('#employ-img-1')
  let employImg2 = document.querySelector('#employ-img-2')
  let employImg3 = document.querySelector('#employ-img-3')
  let employImg4 = document.querySelector('#employ-img-4')
  let employImg5 = document.querySelector('#employ-img-5')
  let employImg6 = document.querySelector('#employ-img-6')
  let employImg7 = document.querySelector('#employ-img-7')
  
  employImg5.style.width = "6vw"
  employImg4.style.display = "none" 
  employImg6.style.width = "80vw"
  employImg5.style.width = "6vw"  
  employImg5.style.display = "block" 

  if(employImg5.style.width !== "6vw" && employImg7.style.width === "80vw") {
    employImg6.style.width = "80vw"
    employImg5.style.width = "6vw"
    employImg5.style.display = "block"
  }
}

function employImg7Click(){
  let employImg1 = document.querySelector('#employ-img-1')
  let employImg2 = document.querySelector('#employ-img-2')
  let employImg3 = document.querySelector('#employ-img-3')
  let employImg4 = document.querySelector('#employ-img-4')
  let employImg5 = document.querySelector('#employ-img-5')
  let employImg6 = document.querySelector('#employ-img-6')
  let employImg7 = document.querySelector('#employ-img-7')
  
  employImg6.style.width = "6vw"
  employImg5.style.display = "none"  
}

document.addEventListener('DOMContentLoaded', () => {
  const jobsContentUp = document.getElementsByClassName('jobs-container')[0];
  if (jobsContentUp) {
    const jobsChildren = document.querySelectorAll('.jobs-content-2-child');

    jobsChildren.forEach(child => {
      child.addEventListener('mouseover', () => {
        if (jobsContentUp) {
          jobsContentUp.style.backgroundColor = 'rgb(103,120,138)';
        }
        child.style.color = 'white';
        const icons = child.querySelectorAll(' .arrow-jobs');
        icons.forEach(icon => {
          icon.style.opacity = 1;
        });
        const icondots = child.querySelectorAll('.bi-dot');
        icondots.forEach(icon => {
          icon.style.opacity = 0;
        });
        
      });

      child.addEventListener('mouseout', () => {
        if (jobsContentUp) {
          jobsContentUp.style.backgroundColor = '#F5F6F6';
        }
        child.style.color = ''; // Trả lại màu văn bản ban đầu
        const icons = child.querySelectorAll('.arrow-jobs');
        icons.forEach(icon => {
          icon.style.opacity = 0; // Trả lại màu biểu tượng ban đầu
        });
        const icondots = child.querySelectorAll('.bi-dot');
        icondots.forEach(icon => {
          icon.style.opacity = 1;
        });
      });
    });
  } else {
    console.error('Element with ID "jobs-content-up" not found.');
  }
});





