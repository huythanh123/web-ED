//Huy



function showArenaContent() {
  document.getElementById("nav-content").style.display = "none"; // Ẩn nội dung chính
  document.getElementById("arena-content").style.display = "block"; // Hiển thị nội dung Arena
}

function hideArenaContent() {
  document.getElementById("nav-content").style.display = "block"; // Hiển thị lại nội dung chính
  document.getElementById("arena-content").style.display = "none"; // Ẩn nội dung Arena
}




let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Cuộn xuống -> ẩn header
    header.classList.add("header-hidden");
    header.classList.remove("header-active", "header-border"); // Xóa border khi ẩn
  } else {
    // Cuộn lên -> hiện header
    header.classList.remove("header-hidden");

    // Nếu cuộn không phải về top -> đổi màu header thành trắng
    if (scrollTop > 0) {
      header.classList.add("header-active");
      header.classList.add("header-border"); // Thêm border khi cuộn lên
    } else {
      // Nếu cuộn về vị trí đầu trang -> xóa lớp header-active để trở về như cũ
      header.classList.remove("header-active", "header-border"); // Xóa border khi ở đầu trang
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




function showMenuDrop() {
  const dropMenu = document.querySelector(".drop-menu");
  dropMenu.classList.toggle("show");
  dropMenu.classList.toggle("show-menu-drop");
}

document.getElementById("areas-of-work").addEventListener("click", function () {
  const dropMenu = document.querySelector(".drop-menu");
  dropMenu.classList.toggle("show");
});

const banner = document.querySelector(".banner");
const bannerImage = document.querySelector(".banner-image img");

function handleScroll(event) {
  const maxScrollLeft = banner.scrollWidth - banner.clientWidth;
  const scrollRatio = banner.scrollLeft / maxScrollLeft;

  // Điều chỉnh vị trí hình ảnh dựa trên vị trí cuộn
  const translateX = scrollRatio * 60; // Tùy chỉnh hệ số này để điều chỉnh tốc độ dịch chuyển
  bannerImage.style.transform = `translateX(${translateX}%)`;

  // Kiểm tra nếu cuộn hết chiều ngang của banner
  if (banner.scrollLeft >= maxScrollLeft && event.deltaY > 0) {
    // Cho phép cuộn xuống trang khi đã cuộn hết chiều ngang
    window.scrollBy({
      top: event.deltaY, // Sử dụng event.deltaY để cuộn xuống
      behavior: "smooth",
    });
  } else if (banner.scrollLeft === 0 && event.deltaY < 0) {
    // Cho phép cuộn lên trang khi ở đầu banner và cuộn ngược lại
    window.scrollBy({
      top: event.deltaY,
      behavior: "smooth",
    });
  } else {
    // Khi chưa cuộn hết banner, ngăn cuộn trang và chỉ cuộn ngang trong banner
    event.preventDefault();
    banner.scrollBy({
      left: event.deltaY > 0 ? 300 : -300, // Cuộn ngang khi cuộn chuột
      behavior: "smooth",
    });
  }
}

document.getElementById('searchButton').addEventListener('click', function() {
  const searchInput = document.getElementById('searchInput');
  searchInput.focus(); // Đặt tiêu điểm vào ô tìm kiếm
  setTimeout(() => {
      searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 300); // Thời gian chờ để đảm bảo bàn phím hiển thị
});

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
  if (window.innerWidth > 1201) {
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

          // Đổi màu biểu tượng hiện tại thành trắng
          const iconColor = child.querySelectorAll('.svg-icon path');
          iconColor.forEach(icon => {
            icon.style.fill = 'white';
            icon.style.transition = 'fill 0.3s ease';
          });

          // Các biểu tượng khác sẽ mờ đi khi di chuột vào biểu tượng hiện tại
          jobsChildren.forEach(otherChild => {
            if (otherChild !== child) {
              const otherIcons = otherChild.querySelectorAll('.svg-icon path');
              otherIcons.forEach(icon => {
                icon.style.fill = 'white';  // Màu trắng mờ
                icon.style.opacity = '0.3'; // Đặt opacity thấp hơn
              });
            }
          });

          icons.forEach(icon => {
            icon.style.display = 'flex';
          });
        });

        // Reset lại màu và opacity khi di chuột ra khỏi biểu tượng
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

          // Đặt lại màu gốc và opacity cho biểu tượng hiện tại
          const iconColor = child.querySelectorAll('.svg-icon path');
          iconColor.forEach(icon => {
            icon.style.fill = ''; // Quay lại màu gốc
            icon.style.opacity = ''; // Reset lại opacity
          });

          // Reset lại các biểu tượng khác
          jobsChildren.forEach(otherChild => {
            const otherIcons = otherChild.querySelectorAll('.svg-icon path');
            otherIcons.forEach(icon => {
              icon.style.fill = '';  // Trả lại màu ban đầu
              icon.style.opacity = ''; // Reset opacity
            });
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
                container.style.flexBasis = "300%";
                container.style.flexGrow = "4%";
                container.style.marginTop = "0%";
                container.style.height = "auto";
                container.style.transform = "translateY(0)";
                activeImage = index;
            }
        } else {
            if (idx % 2 === 1) {
                container.style.flexBasis = "20%";
                container.style.flexGrow = "1";
                container.style.marginTop = "4%";
                container.style.height = "90%";
                container.style.transform = "translateY(0px)";
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
    const isSmallScreen = window.matchMedia("(max-width: 1201px)").matches;

    if (isSmallScreen) {
        employImgClickSmall(0); // Mở hình thứ 2 khi trang tải
        document.querySelectorAll('.container1').forEach((container, index) => {
            container.addEventListener('click', () => employImgClickSmall(index));
        });
    } else {
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
// Tạo phần tử con trỏ tùy chỉnh lớn hơn bao ngoài
const customCursorWrapper = document.createElement('div');
customCursorWrapper.classList.add('custom-cursor-wrapper');

// Tạo phần tử con trỏ tùy chỉnh
const customCursor = document.createElement('div');
customCursor.classList.add('custom-cursor');
customCursor.textContent = 'D R A G'; // Thay đổi text theo nhu cầu

// Thêm con trỏ nhỏ vào con trỏ lớn
customCursorWrapper.appendChild(customCursor);
document.body.appendChild(customCursorWrapper);

// Lấy vùng div mà bạn muốn hiển thị con trỏ tùy chỉnh
const scrollConnectContent = document.querySelector('.sroll-connect-content');

// Cập nhật vị trí con trỏ tùy chỉnh dựa trên vị trí chuột
scrollConnectContent.addEventListener('mousemove', (e) => {
  customCursorWrapper.style.top = `${e.pageY}px`;
  customCursorWrapper.style.left = `${e.pageX}px`;
});

// Khi di chuyển ra khỏi vùng div thì ẩn con trỏ tùy chỉnh
scrollConnectContent.addEventListener('mouseleave', () => {
  customCursorWrapper.style.display = 'none';
});

// Khi di chuyển vào vùng div thì hiển thị lại con trỏ
scrollConnectContent.addEventListener('mouseenter', () => {
  customCursorWrapper.style.display = 'block';
});

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





