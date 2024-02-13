document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById("app");

  const Menu = () => {
    return `
          <div class="header__main">
          <div class="logo-container">
            <img src="/assets/TECHN.png" alt="TECHN" />
            <svg
              width="29"
              height="28"
              viewBox="0 0 29 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_884_49)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.1652 8.17971C17.014 7.41055 15.6606 7 14.2762 7V0C17.0451 0 19.7519 0.821086 22.0542 2.35943C24.3565 3.89776 26.1508 6.08427 27.2105 8.64241C28.2701 11.2006 28.5474 14.0155 28.0072 16.7313C27.467 19.447 26.1336 21.9416 24.1757 23.8995C22.2178 25.8574 19.7232 27.1908 17.0074 27.731C14.2917 28.2712 11.4767 27.9939 8.91859 26.9343C6.36045 25.8747 4.17394 24.0803 2.63561 21.778C1.09727 19.4757 0.276184 16.7689 0.276184 14H7.27618C7.27618 15.3845 7.68673 16.7378 8.45589 17.889C9.22505 19.0401 10.3183 19.9373 11.5974 20.4672C12.8765 20.997 14.284 21.1356 15.6418 20.8655C16.9997 20.5954 18.2469 19.9287 19.226 18.9498C20.2049 17.9708 20.8716 16.7235 21.1416 15.3656C21.4118 14.0078 21.2732 12.6003 20.7433 11.3212C20.2135 10.0421 19.3163 8.94887 18.1652 8.17971Z"
                  fill="#B15FFF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.27618 3.03188e-06C7.27618 0.919257 7.09513 1.82951 6.74334 2.67878C6.39156 3.52807 5.87594 4.29974 5.22593 4.94975C4.57592 5.59977 3.80425 6.11538 2.95497 6.46716C2.10569 6.81894 1.19543 7 0.276184 7L0.276184 14C2.11469 14 3.93519 13.6379 5.63376 12.9343C7.33232 12.2308 8.87568 11.1995 10.1757 9.89947C11.4757 8.5995 12.5069 7.05614 13.2105 5.35757C13.9141 3.65901 14.2762 1.8385 14.2762 0L7.27618 3.03188e-06Z"
                  fill="#B15FFF"
                />
              </g>
              <defs>
                <clipPath id="clip0_884_49">
                  <rect
                    width="28"
                    height="28"
                    fill="white"
                    transform="translate(0.276184)"
                  />
                </clipPath>
              </defs>
            </svg>
            <img src="/assets/PARK.png" alt="PARK" />
          </div>
          <div class="menu-icon" onclick="showMenu()">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div class="menu-container">
          <div class="header-menu">
            <div class="logo-container">
              <img src="/assets/TECHN-white.png" alt="TECHN" />
              <svg
                width="29"
                height="28"
                viewBox="0 0 29 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_884_49)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.1652 8.17971C17.014 7.41055 15.6606 7 14.2762 7V0C17.0451 0 19.7519 0.821086 22.0542 2.35943C24.3565 3.89776 26.1508 6.08427 27.2105 8.64241C28.2701 11.2006 28.5474 14.0155 28.0072 16.7313C27.467 19.447 26.1336 21.9416 24.1757 23.8995C22.2178 25.8574 19.7232 27.1908 17.0074 27.731C14.2917 28.2712 11.4767 27.9939 8.91859 26.9343C6.36045 25.8747 4.17394 24.0803 2.63561 21.778C1.09727 19.4757 0.276184 16.7689 0.276184 14H7.27618C7.27618 15.3845 7.68673 16.7378 8.45589 17.889C9.22505 19.0401 10.3183 19.9373 11.5974 20.4672C12.8765 20.997 14.284 21.1356 15.6418 20.8655C16.9997 20.5954 18.2469 19.9287 19.226 18.9498C20.2049 17.9708 20.8716 16.7235 21.1416 15.3656C21.4118 14.0078 21.2732 12.6003 20.7433 11.3212C20.2135 10.0421 19.3163 8.94887 18.1652 8.17971Z"
                    fill="#B15FFF"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.27618 3.03188e-06C7.27618 0.919257 7.09513 1.82951 6.74334 2.67878C6.39156 3.52807 5.87594 4.29974 5.22593 4.94975C4.57592 5.59977 3.80425 6.11538 2.95497 6.46716C2.10569 6.81894 1.19543 7 0.276184 7L0.276184 14C2.11469 14 3.93519 13.6379 5.63376 12.9343C7.33232 12.2308 8.87568 11.1995 10.1757 9.89947C11.4757 8.5995 12.5069 7.05614 13.2105 5.35757C13.9141 3.65901 14.2762 1.8385 14.2762 0L7.27618 3.03188e-06Z"
                    fill="#B15FFF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_884_49">
                    <rect
                      width="28"
                      height="28"
                      fill="white"
                      transform="translate(0.276184)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <img src="/assets/PARK-white.png" alt="PARK" />
            </div>
            <img src="/assets/close-icon.png" alt="close-icon" class="close-icon" onclick="closeMenu()"/>
          </div>
          <div id="navigationContainer" class="navigation-container">
            <div class="navigation-item">
              <span class="navigation-text">Go to product page</span>
              <img class="icon-arrow" src="/assets/arrow.png" alt="arrow" />
            </div>
            <div class="navigation-item">
              <span class="navigation-text">Track your order</span>
              <img class="icon-arrow" src="/assets/arrow.png" alt="arrow" />
            </div>
            <div class="navigation-item">
              <span class="navigation-text">Contact us</span>
              <img class="icon-arrow" src="/assets/arrow.png" alt="arrow" />
            </div>
            <div class="navigation-item">
              <span class="navigation-text">FAQ</span>
              <img class="icon-arrow" src="/assets/arrow.png" alt="arrow" />
            </div>
            <div class="menu-line"><div/>
          </div>
        </div>
  
    `;
  };

  app.innerHTML = Menu();
});

function showMenu() {
  const headerMain = document.querySelector(".header__main");
  const menuСontainer = document.querySelector(".menu-container");
  headerMain.style.display = "none";
  menuСontainer.style.display = "block";
}

function closeMenu() {
  const headerMain = document.querySelector(".header__main");
  const menuСontainer = document.querySelector(".menu-container");
  headerMain.style.display = "flex";
  menuСontainer.style.display = "none";
}

function scrollToFooter() {
  document.querySelector(".footer").scrollIntoView({ behavior: "smooth" });
}

const sliderProgress = document.querySelectorAll(".slider-progress");
const slides = document.querySelectorAll(".slide");

sliderProgress.forEach((progress) => {
  progress.addEventListener("click", () => {
    const slideIndex = parseInt(progress.getAttribute("data-slide"));

    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    slides[slideIndex].classList.add("active");

    sliderProgress.forEach((prog) => {
      prog.classList.add("inactive");
    });

    progress.classList.remove("inactive");
  });
});

const updateProgress = (percentage) => {
  const progressBarFilled = document.querySelector(".progress-bar-filled");
  const itemsLeft = document.querySelector(".items-left");

  progressBarFilled.style.width = `${percentage}%`;
  itemsLeft.textContent = `${percentage} items left`;
};

updateProgress(35);

document.addEventListener("DOMContentLoaded", function () {
  const textContent = `The Handheld Gateway to Your PS5® Games Play Your Game Collection
            Experience Breathtaking Immersion with DualSense® Wireless Controller Features 

            Feel the incredible immersion of haptic feedback and adaptive triggers in supported games`;

  const textContainer = document.getElementById("textContent");
  textContainer.innerText = textContent;
});

function startCountdown(duration, display) {
  let timer = duration,
    hours,
    minutes,
    seconds;
  setInterval(function () {
    hours = parseInt(timer / 3600, 10);
    minutes = parseInt((timer % 3600) / 60, 10);
    seconds = parseInt(timer % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = hours + ":" + minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  let duration = 60 * 60 * 17 + 34 * 60 + 53;
  let display = document.querySelector(".timer-text");
  startCountdown(duration, display);
};

const arrowIcon = document.querySelector(".icon-arrow.shipping-arrow");
const containerContent = document.querySelector(".container-content");

arrowIcon.addEventListener("click", function () {
  if (
    containerContent.style.display === "none" ||
    containerContent.style.display === ""
  ) {
    containerContent.style.display = "block";
    arrowIcon.style.transform = "rotate(270deg)";
  } else {
    containerContent.style.display = "none";
    arrowIcon.style.transform = "rotate(0deg)";
  }
});

document
  .querySelector(".disclaimer-more")
  .addEventListener("click", function () {
    let fullTextDiv = document.querySelector(".footer-disclaimer");
    let isExpanded = fullTextDiv.getAttribute("data-expanded") === "true";

    if (isExpanded) {
      document.querySelector(".disclaimer-text:nth-of-type(2)").textContent =
        "This site is not part of the Facebook or Facebook Inc. website. Also, this site is not endorsed by Facebook in any way FACEBOOK is a trademark of FACEBOOK, Inc. Facebook provides a platform for serving advertising, but the opinions and/or views expressed on this website are not  representative of Facebook, Inc. Opinions and/or views expressed on our website's social media platforms, including but not limited to our blogs and Facebook pages, represent the thoughts of individual bloggers and online communities, and not necessarily those of our website or any of its business partners, affiliates or any of their respective officers, employees, staff or board members. The views and opinions expressed on these pages do not in any way reflect the opinions of the site on which they are published, other sites affiliated with the site, the personnel involved in the maintenance of the site or any member of the site. Any opinions or views expressed on this website's social media platforms are not representative of Facebook, Inc. Although our website makes reasonable efforts to monitor and/or moderate content posted on its social media platforms, we do not moderate all comments and cannot always respond to online inquiries in a timely manner. All new customers are entered into the raffle for the displayed campaign product. If you are the lucky winner, you will be contacted directly by email. This special offer includes a three-day trial to an affiliated service, after which the subscription fee will be thirty-three euros every fourteen days - automatically deducted from your credit card. If for any reason you are not satisfied with the service, you can cancel your account within three days. The service will renew every thirty days until cancelled. This campaign will expire on December 31 of this year. If you would like to participate without signing up for a three-day trial at Toolsandtoys, please email.";
    } else {
      document.querySelector(".disclaimer-text:nth-of-type(2)").textContent =
        "This site is not part of the Facebook or Facebook Inc. website. Also, this site is not endorsed by Facebook in any way FACEBOOK is a trademark of FACEBOOK, Inc.";
    }

    fullTextDiv.setAttribute("data-expanded", !isExpanded);
    this.textContent = isExpanded ? "Read less" : "Read more";
  });

document
  .querySelector(".buy-now-button")
  .addEventListener("click", function () {
    document.querySelector(".modal").style.display = "block";
  });

document.querySelector(".close-button").addEventListener("click", function () {
  document.querySelector(".modal").style.display = "none";
});
