document.addEventListener('DOMContentLoaded', () => {
  // Kiểm tra kích thước màn hình
  if (window.innerWidth > 1200) {
      const jobsContentUp = document.getElementsByClassName('contact-container')[0];
      if (jobsContentUp) {
          const jobsChildren = document.querySelectorAll('.contact-row-content');

          jobsChildren.forEach(child => {
              const icons = child.querySelectorAll('.arrow-down');

              child.addEventListener('mouseover', () => {
                  const contentLeft = document.querySelector('.content-left .title-content-left');
                  const contentRight = document.querySelector('.content-right .title-content-left-2');

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
                      } else if (text === 'Messenger'|| text === 'Tin nhắn') {
                          jobsContentUp.style.background = 'linear-gradient(90deg, rgb(10, 124, 255) 0%, rgb(161, 14, 235) 40%, rgb(255, 82, 151) 60%, rgb(255, 108, 92) 100%)';
                          const imgMessenger = child.querySelector('img');
                          if (imgMessenger) {
                              imgMessenger.style.filter = 'brightness(0) invert(1)';
                          }
                      } else if (text === 'Instagram') {
                          jobsContentUp.style.background = 'linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)';
                          const imgInstagram = child.querySelector('img');
                          if (imgInstagram) {
                              imgInstagram.style.filter = 'brightness(0) invert(1)';
                          }
                      } else if (text === 'WhatsApp') {
                          jobsContentUp.style.backgroundColor = '#25D366';
                      } else if (text === 'Meta Quest'|| text === 'Nhiệm vụ Meta') {
                          jobsContentUp.style.backgroundColor = '#000000';
                      } else if (text === 'Workplace' || text === 'Nơi làm việc') {
                          jobsContentUp.style.backgroundColor = '#20252D';
                      }

                      titleElement.style.color = 'white';
                      titleElement.style.transition = 'color 0.3s ease';
                  }

                  const iconColor = child.querySelectorAll('.svg-icon');
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

                  const contentLeft = document.querySelector('.content-left .title-content-left');
                  const contentRight = document.querySelector('.content-right .title-content-left-2');

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

                  const iconColor = child.querySelectorAll('.svg-icon');
                  iconColor.forEach(icon => {
                      icon.style.fill = '';
                  });

                  const imgMessenger = child.querySelector('img');
                  if (imgMessenger) {
                      imgMessenger.style.filter = '';
                  }

                  const imgInstagram = child.querySelector('img');
                  if (imgInstagram) {
                      imgInstagram.style.filter = '';
                  }

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
                container.style.transform = "translateY(50px)";
            
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







