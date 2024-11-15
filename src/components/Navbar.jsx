import React from 'react'
import Solid from '../assets/image/solid.svg'

import { useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    const darkModeToggle = document.getElementById('darkmode-toggle');
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';

    document.body.classList.toggle('dark-mode', darkModeEnabled);
    darkModeToggle.checked = darkModeEnabled;

    darkModeToggle.addEventListener('change', function () {
      document.body.classList.toggle('dark-mode', this.checked);
      localStorage.setItem('darkMode', this.checked);
    });
  }, []);

  return (
    <div className="container">
    
    <a className="logo" href="Index.html"><svg width="122" height="44" viewBox="0 0 122 44" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path className="logo-text"
                                d="M60.6805 29.6489C61.4308 29.6489 62.1574 29.5534 62.86 29.3624C63.5695 29.1714 64.2039 28.8848 64.7633 28.5028C65.3226 28.114 65.766 27.6262 66.0935 27.0396C66.4277 26.4461 66.5949 25.7537 66.5949 24.9624C66.5949 24.2188 66.455 23.6048 66.1753 23.1205C65.9025 22.6362 65.5512 22.2473 65.1214 21.954C64.6984 21.6538 64.255 21.4219 63.7912 21.2582C63.3273 21.0876 62.9043 20.9512 62.5223 20.8489L59.9642 20.1531C59.6504 20.0712 59.3434 19.9689 59.0433 19.8461C58.7431 19.7233 58.4941 19.563 58.2963 19.3652C58.0984 19.1605 57.9995 18.8979 57.9995 18.5773C57.9995 18.2293 58.1189 17.9292 58.3577 17.6768C58.6033 17.4244 58.9171 17.2334 59.2991 17.1038C59.6879 16.9673 60.1006 16.9059 60.5372 16.9196C61.2057 16.94 61.8197 17.1379 62.3791 17.5131C62.9384 17.8883 63.3 18.434 63.4637 19.1503L66.4721 18.6387C66.1174 17.2538 65.4284 16.1931 64.4051 15.4563C63.3819 14.7196 62.1062 14.341 60.5781 14.3205C59.5685 14.3137 58.6476 14.4706 57.8153 14.7912C56.9831 15.1118 56.318 15.5996 55.82 16.2545C55.322 16.9093 55.073 17.7314 55.073 18.7205C55.073 19.4231 55.189 20.0064 55.4209 20.4703C55.6597 20.9273 55.9564 21.2957 56.3112 21.5754C56.6659 21.8551 57.0309 22.07 57.406 22.22C57.7881 22.3701 58.1223 22.4861 58.4088 22.568L62.2358 23.6935C62.8088 23.8641 63.1908 24.079 63.3819 24.3382C63.5729 24.5906 63.6684 24.8669 63.6684 25.167C63.6684 25.5763 63.5285 25.9208 63.2488 26.2005C62.976 26.4802 62.6246 26.6917 62.1949 26.8349C61.7651 26.9782 61.3217 27.0498 60.8646 27.0498C60.046 27.0498 59.3161 26.8213 58.6749 26.3642C58.0336 25.9072 57.6107 25.2557 57.406 24.4098L54.5 24.8396C54.6501 25.8355 55.0048 26.6951 55.5642 27.4182C56.1304 28.1345 56.8501 28.687 57.7233 29.0759C58.6033 29.4579 59.589 29.6489 60.6805 29.6489Z"
                                fill="#0B0F19" />
                            <path className="logo-text"
                                d="M69.0486 16.7559H71.8319V14.3H69.0486V16.7559ZM69.0486 29.3419H71.8319V18.2907H69.0486V29.3419Z"
                                fill="#0B0F19" />
                            <path className="logo-text" d="M75.1042 29.3419H77.8875V14.3H75.1042V29.3419Z" fill="#0B0F19" />
                            <path className="logo-text"
                                d="M81.1598 16.7559H83.9431V14.3H81.1598V16.7559ZM81.1598 29.3419H83.9431V18.2907H81.1598V29.3419Z"
                                fill="#0B0F19" />
                            <path className="logo-text"
                                d="M91.8814 29.6489C93.1639 29.6489 94.2417 29.3317 95.1149 28.6972C95.9881 28.0628 96.5816 27.159 96.8954 25.9856L94.0507 25.3921C93.887 25.9242 93.6414 26.3335 93.314 26.62C92.9865 26.9066 92.509 27.0498 91.8814 27.0498C91.0424 27.0498 90.4079 26.7531 89.9782 26.1596C89.5552 25.5593 89.3438 24.7782 89.3438 23.8163C89.3438 22.8954 89.545 22.128 89.9475 21.514C90.3568 20.8932 91.0014 20.5828 91.8814 20.5828C92.3931 20.5828 92.8501 20.7431 93.2526 21.0638C93.6619 21.3844 93.9484 21.8312 94.1121 22.4042L96.8954 21.6675C96.6498 20.5283 96.0836 19.6312 95.1968 18.9763C94.3168 18.3146 93.2253 17.9838 91.9224 17.9838C90.7968 17.9838 89.8213 18.2362 88.9959 18.741C88.1704 19.2458 87.5292 19.9382 87.0721 20.8182C86.6219 21.6982 86.3968 22.6976 86.3968 23.8163C86.3968 24.9214 86.6151 25.914 87.0517 26.794C87.4883 27.674 88.1159 28.3698 88.9345 28.8814C89.7531 29.3931 90.7354 29.6489 91.8814 29.6489Z"
                                fill="#0B0F19" />
                            <path className="logo-text"
                                d="M103.615 29.6489C104.72 29.6489 105.693 29.4033 106.532 28.9121C107.377 28.4141 108.036 27.7286 108.506 26.8554C108.984 25.9754 109.223 24.9624 109.223 23.8163C109.223 22.6771 108.987 21.6709 108.517 20.7977C108.046 19.9177 107.388 19.2287 106.542 18.7307C105.703 18.2328 104.727 17.9838 103.615 17.9838C102.524 17.9838 101.559 18.2293 100.719 18.7205C99.8804 19.2117 99.2221 19.8973 98.7446 20.7773C98.2671 21.6504 98.0283 22.6635 98.0283 23.8163C98.0283 24.9555 98.2603 25.9652 98.7241 26.8452C99.1948 27.7183 99.8497 28.4039 100.689 28.9019C101.528 29.3999 102.503 29.6489 103.615 29.6489ZM103.615 27.0498C102.749 27.0498 102.091 26.7599 101.64 26.18C101.197 25.5934 100.975 24.8055 100.975 23.8163C100.975 22.8545 101.187 22.0768 101.61 21.4833C102.039 20.883 102.708 20.5828 103.615 20.5828C104.495 20.5828 105.157 20.8762 105.6 21.4628C106.051 22.0495 106.276 22.834 106.276 23.8163C106.276 24.7645 106.054 25.5422 105.611 26.1493C105.174 26.7497 104.509 27.0498 103.615 27.0498Z"
                                fill="#0B0F19" />
                            <path className="logo-text"
                                d="M111.452 29.3419H114.277V23.7345C114.277 23.0455 114.352 22.4929 114.502 22.0768C114.659 21.6607 114.856 21.3469 115.095 21.1354C115.334 20.9171 115.59 20.7704 115.863 20.6954C116.136 20.6204 116.391 20.5828 116.63 20.5828C117.224 20.5828 117.681 20.7159 118.001 20.9819C118.329 21.248 118.564 21.5788 118.707 21.9745C118.851 22.3701 118.936 22.7658 118.963 23.1614C118.99 23.5503 119.004 23.8709 119.004 24.1233V29.3419H121.828V23.141C121.828 22.9568 121.815 22.6635 121.787 22.261C121.76 21.8585 121.682 21.4151 121.552 20.9307C121.422 20.4396 121.204 19.9689 120.897 19.5186C120.597 19.0684 120.174 18.6966 119.628 18.4033C119.083 18.11 118.376 17.9633 117.51 17.9633C116.712 17.9633 116.016 18.0963 115.423 18.3624C114.829 18.6284 114.331 18.9831 113.929 19.4266V18.2907H111.452V29.3419Z"
                                fill="#0B0F19" />
                            <path d="M10.2174 22L4.08696 12.2791L22.9891 0L22.4783 10.7442L10.2174 22Z"
                                fill="url(#paint0_linear_4632_11308)" />
                            <path
                                d="M22.4783 10.7442L22.9891 0L42.4022 8.69767L38.3152 26.093L12.2609 30.186L10.2174 22L22.4783 10.7442Z"
                                fill="url(#paint1_linear_4632_11308)" />
                            <path d="M31.163 44L12.2609 30.186L38.3152 26.093L42.913 30.6977L31.163 44Z"
                                fill="url(#paint2_linear_4632_11308)" />
                            <path d="M38.3152 26.093L42.913 30.6977L47 17.907L42.4022 8.69767L38.3152 26.093Z"
                                fill="url(#paint3_linear_4632_11308)" />
                            <path d="M12.2609 30.186L31.163 44L12.2609 41.4418L0 26.6046L12.2609 30.186Z"
                                fill="url(#paint4_linear_4632_11308)" />
                            <path d="M4.08696 12.2791L0 26.6046L12.2609 30.186L10.2174 22L4.08696 12.2791Z"
                                fill="url(#paint5_linear_4632_11308)" />
                            <path d="M31.1639 44L12.2617 30.186L38.3161 26.093L42.9139 30.6977L31.1639 44Z" fill="black"
                                fill-opacity="0.17" />
                            <path d="M38.3145 26.0931L42.9123 30.6977L46.9992 17.9071L42.4014 8.69775L38.3145 26.0931Z"
                                fill="black" fill-opacity="0.1" />
                            <path d="M12.2609 30.1861L31.163 44.0001L12.2609 41.4419L0 26.6047L12.2609 30.1861Z"
                                fill="black" fill-opacity="0.23" />
                            <path d="M4.08696 12.2791L0 26.6046L12.2609 30.186L10.2174 22L4.08696 12.2791Z"
                                fill="#C0C0C0" fill-opacity="0.05" />
                            <path d="M10.2174 22L4.08696 12.2791L22.9891 0L22.4783 10.7442L10.2174 22Z" fill="white"
                                fill-opacity="0.15" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M10.2174 22L22.4783 10.7442L22.9891 0L4.08696 12.2791L10.2174 22ZM10.2807 21.5255L22.1781 10.6033L22.6545 0.583262L4.50783 12.3716L10.2807 21.5255Z"
                                fill="white" fill-opacity="0.15" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M22.7784 10.885L10.559 22.1028L12.4903 29.8393L38.0641 25.8217L42.0458 8.87429L23.2739 0.4639L22.7784 10.885ZM22.4783 10.7442L10.2174 22L12.2609 30.186L38.3152 26.093L42.4022 8.69767L22.9891 0L22.4783 10.7442Z"
                                fill="white" fill-opacity="0.15" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M31.1183 43.5873L42.4924 30.7105L38.2087 26.4205L13.0388 30.3745L31.1183 43.5873ZM31.163 44L42.913 30.6977L38.3152 26.093L12.2609 30.186L31.163 44Z"
                                fill="white" fill-opacity="0.15" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M42.913 30.6977L47 17.907L42.4022 8.69767L38.3152 26.093L42.913 30.6977ZM38.6527 25.9969L42.7743 30.1246L46.67 17.9325L42.5066 9.59332L38.6527 25.9969Z"
                                fill="white" fill-opacity="0.15" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12.1235 30.4657L0.872793 27.1793L12.4206 41.1537L30.0047 43.5334L12.1235 30.4657ZM12.2609 30.186L0 26.6046L12.2609 41.4418L31.163 44L12.2609 30.186Z"
                                fill="white" fill-opacity="0.15" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.378475 26.3954L11.834 29.7416L9.93196 22.1222L4.19353 13.0229L0.378475 26.3954ZM0 26.6046L12.2609 30.186L10.2174 22L4.08696 12.2791L0 26.6046Z"
                                fill="white" fill-opacity="0.15" />
                            <path
                                d="M23.6972 19.0156H27.1656C27.1154 15.9651 24.6082 13.859 20.7971 13.859C17.0446 13.859 14.2949 15.9317 14.3117 19.0407C14.3033 21.5647 16.0835 23.0105 18.9752 23.7042L20.8389 24.1722C22.7026 24.6235 23.739 25.1584 23.7473 26.3118C23.739 27.5654 22.5522 28.4179 20.7135 28.4179C18.8331 28.4179 17.4792 27.5487 17.3622 25.8354H13.8604C13.9523 29.5378 16.6016 31.4517 20.7553 31.4517C24.9341 31.4517 27.3912 29.4542 27.3996 26.3201C27.3912 23.4702 25.2433 21.9575 22.2681 21.2889L20.7303 20.9211C19.2426 20.5785 17.9973 20.0269 18.0224 18.7983C18.0224 17.6951 19.0002 16.8844 20.7721 16.8844C22.5021 16.8844 23.5635 17.6701 23.6972 19.0156Z"
                                fill="white" />
                            <path d="M32.5507 19.3023H29.3182V31.2093H32.5507V19.3023Z" fill="white" />
                            <path
                                d="M31.3458 9.90698H30.1627L28.6888 10.8401V11.9564L30.0522 11.1017H30.0871V15.8605H31.3458V9.90698Z"
                                fill="white" />
                            <path
                                d="M32.6707 14.814H35.5282V15.8605H36.7317V14.814H37.4701V13.8052H36.7317V9.90698H35.1561L32.6707 13.8227V14.814ZM35.5515 13.8052H33.9381V13.7587L35.505 11.2791H35.5515V13.8052Z"
                                fill="white" />
                            <defs>
                                <linearGradient id="paint0_linear_4632_11308" x1="0" y1="22.1053" x2="47" y2="22.1053"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#6366F1" />
                                    <stop offset="0.5" stop-color="#8B5CF6" />
                                    <stop offset="1" stop-color="#D946EF" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_4632_11308" x1="0" y1="22.1053" x2="47" y2="22.1053"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#6366F1" />
                                    <stop offset="0.5" stop-color="#8B5CF6" />
                                    <stop offset="1" stop-color="#D946EF" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_4632_11308" x1="0" y1="22.1053" x2="47" y2="22.1053"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#6366F1" />
                                    <stop offset="0.5" stop-color="#8B5CF6" />
                                    <stop offset="1" stop-color="#D946EF" />
                                </linearGradient>
                                <linearGradient id="paint3_linear_4632_11308" x1="0" y1="22.1053" x2="47" y2="22.1053"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#6366F1" />
                                    <stop offset="0.5" stop-color="#8B5CF6" />
                                    <stop offset="1" stop-color="#D946EF" />
                                </linearGradient>
                                <linearGradient id="paint4_linear_4632_11308" x1="0" y1="22.1053" x2="47" y2="22.1053"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#6366F1" />
                                    <stop offset="0.5" stop-color="#8B5CF6" />
                                    <stop offset="1" stop-color="#D946EF" />
                                </linearGradient>
                                <linearGradient id="paint5_linear_4632_11308" x1="0" y1="22.1053" x2="47" y2="22.1053"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#6366F1" />
                                    <stop offset="0.5" stop-color="#8B5CF6" />
                                    <stop offset="1" stop-color="#D946EF" />
                                </linearGradient>
                            </defs>
                        </svg>
                        </a>
        

                        <nav id="main-menu" className="navbar">
        <a className="navigate" href="#">Features</a>
      </nav>

      <div id="darkmode-switch" className="button-switch">
        <span className="darkmode"></span>
        <input type="checkbox" id="darkmode-toggle" className="switch-input"/>
        <label htmlFor="darkmode-toggle" className="switch-label"></label>
      </div>

      <a id="sign-in" href="#" className="sign-in-buttonprime">
        <i className="fa-thin fa-user"></i>
        <span>Sign in / Sign up</span>
      </a>

      <button className="mobile-button">
        <i className="material-symbols-outlined">
          menu
        </i>
      </button>
    </div>
  )
}

export default Navbar