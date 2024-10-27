"use client";

import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="shadow-md flex items-center justify-between p-4 text-[#54585A] sticky top-0 z-50 bg-white">
      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden mr-4">
        <button
          onClick={toggleMenu}
          className="focus:outline-none p-2 text-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <div className="lg:ml-7 m-auto">
        {/* Boubyan Logo */}
        <svg
          width="134"
          height="49"
          viewBox="0 0 134 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.5718 21.2624C26.0312 21.2624 26.3885 21.1986 26.6437 21.071C27.0447 20.8705 27.2453 20.5095 27.2453 19.9882C27.2453 19.4632 27.032 19.1095 26.6054 18.9272C26.3648 18.8252 26.0075 18.7741 25.5335 18.7741H23.5921V21.2624H25.5718ZM25.9382 24.9702C26.6054 24.9702 27.0812 24.777 27.3656 24.3905C27.5442 24.1463 27.6335 23.8509 27.6335 23.5046C27.6335 22.9213 27.3729 22.5239 26.8515 22.3124C26.5744 22.1994 26.208 22.1429 25.7523 22.1429H23.5921V24.9702H25.9382ZM22.5257 17.8663H25.9765C26.9171 17.8663 27.5861 18.147 27.9835 18.7085C28.2169 19.0403 28.3335 19.4231 28.3335 19.8569C28.3335 20.3637 28.1895 20.7793 27.9015 21.1038C27.752 21.2752 27.5369 21.4319 27.2562 21.5741C27.6682 21.7309 27.9763 21.9077 28.1804 22.1046C28.5414 22.4546 28.7218 22.9377 28.7218 23.5538C28.7218 24.0715 28.5596 24.54 28.2351 24.9593C27.7502 25.5864 26.9791 25.8999 25.9218 25.8999H22.5257V17.8663ZM32.2164 25.2655C32.869 25.2655 33.3156 25.0194 33.5562 24.5272C33.8005 24.0314 33.9226 23.4809 33.9226 22.8757C33.9226 22.3288 33.8351 21.884 33.6601 21.5413C33.383 21.0017 32.9054 20.7319 32.2273 20.7319C31.6257 20.7319 31.1882 20.9616 30.9148 21.421C30.6414 21.8804 30.5046 22.4345 30.5046 23.0835C30.5046 23.7069 30.6414 24.2265 30.9148 24.6421C31.1882 25.0577 31.6221 25.2655 32.2164 25.2655ZM32.2546 19.8733C33.0093 19.8733 33.6473 20.1249 34.1687 20.628C34.6901 21.1312 34.9507 21.8713 34.9507 22.8483C34.9507 23.7926 34.721 24.5728 34.2617 25.189C33.8023 25.8051 33.0895 26.1132 32.1234 26.1132C31.3177 26.1132 30.6778 25.8416 30.2039 25.2983C29.7299 24.7515 29.4929 24.0187 29.4929 23.0999C29.4929 22.1155 29.7427 21.3317 30.2421 20.7483C30.7416 20.165 31.4125 19.8733 32.2546 19.8733ZM37.1109 20.0429V23.9312C37.1109 24.2301 37.1583 24.4744 37.2531 24.664C37.4281 25.014 37.7544 25.189 38.232 25.189C38.9174 25.189 39.3841 24.8827 39.632 24.2702C39.7669 23.9421 39.8343 23.4918 39.8343 22.9194V20.0429H40.8187V25.8999H39.889L39.9 25.0358C39.7723 25.2582 39.6138 25.446 39.4242 25.5991C39.0486 25.9054 38.5929 26.0585 38.057 26.0585C37.2221 26.0585 36.6533 25.7796 36.3507 25.2218C36.1867 24.9228 36.1046 24.5236 36.1046 24.0241V20.0429H37.1109ZM42.2843 17.839H43.2414V20.7538C43.4565 20.4731 43.7135 20.2598 44.0125 20.114C44.3114 19.9645 44.6359 19.8897 44.9859 19.8897C45.7151 19.8897 46.3057 20.1413 46.7578 20.6444C47.2135 21.1439 47.4414 21.8822 47.4414 22.8593C47.4414 23.7853 47.2171 24.5546 46.7687 25.1671C46.3203 25.7796 45.6986 26.0858 44.9039 26.0858C44.4591 26.0858 44.0835 25.9783 43.7773 25.7632C43.595 25.6356 43.4 25.4314 43.1921 25.1507V25.8999H42.2843V17.839ZM44.8437 25.2163C45.376 25.2163 45.7734 25.0049 46.0359 24.5819C46.302 24.159 46.4351 23.6012 46.4351 22.9085C46.4351 22.2924 46.302 21.7819 46.0359 21.3772C45.7734 20.9726 45.3851 20.7702 44.871 20.7702C44.4226 20.7702 44.0289 20.9361 43.6898 21.2679C43.3544 21.5996 43.1867 22.1465 43.1867 22.9085C43.1867 23.459 43.2559 23.9056 43.3945 24.2483C43.6533 24.8937 44.1364 25.2163 44.8437 25.2163ZM52.2539 20.0429H53.3421C53.2036 20.4184 52.8955 21.2752 52.4179 22.6132C52.0606 23.6194 51.7617 24.4397 51.521 25.0741C50.9523 26.5689 50.5513 27.4804 50.3179 27.8085C50.0846 28.1366 49.6835 28.3007 49.1148 28.3007C48.9763 28.3007 48.8687 28.2952 48.7921 28.2843C48.7192 28.2733 48.6281 28.2533 48.5187 28.2241V27.3272C48.6901 27.3746 48.814 27.4038 48.8906 27.4147C48.9671 27.4257 49.0346 27.4312 49.0929 27.4312C49.2752 27.4312 49.4083 27.4002 49.4921 27.3382C49.5796 27.2799 49.6526 27.2069 49.7109 27.1194C49.7291 27.0903 49.7947 26.9408 49.9078 26.671C50.0208 26.4012 50.1028 26.2007 50.1539 26.0694L47.9882 20.0429H49.1039L50.6734 24.8116L52.2539 20.0429ZM54.95 24.3413C54.95 24.6257 55.0539 24.8499 55.2617 25.014C55.4695 25.178 55.7156 25.2601 56 25.2601C56.3463 25.2601 56.6817 25.1799 57.0062 25.0194C57.5531 24.7533 57.8265 24.3176 57.8265 23.7124V22.9194C57.7062 22.996 57.5513 23.0598 57.3617 23.1108C57.1721 23.1619 56.9861 23.1983 56.8039 23.2202L56.2078 23.2968C55.8505 23.3442 55.5825 23.4189 55.4039 23.521C55.1013 23.6924 54.95 23.9658 54.95 24.3413ZM57.3343 22.3507C57.5604 22.3215 57.7117 22.2267 57.7882 22.0663C57.832 21.9788 57.8539 21.853 57.8539 21.689C57.8539 21.3535 57.7335 21.1111 57.4929 20.9616C57.2559 20.8085 56.9151 20.7319 56.4703 20.7319C55.9562 20.7319 55.5916 20.8705 55.3765 21.1476C55.2562 21.3007 55.1778 21.5285 55.1414 21.8312H54.2226C54.2408 21.1093 54.4742 20.608 54.9226 20.3272C55.3747 20.0429 55.8979 19.9007 56.4921 19.9007C57.1812 19.9007 57.7408 20.0319 58.171 20.2944C58.5976 20.5569 58.8109 20.9653 58.8109 21.5194V24.8937C58.8109 24.9957 58.8309 25.0778 58.871 25.1397C58.9148 25.2017 59.0041 25.2327 59.139 25.2327C59.1828 25.2327 59.232 25.2309 59.2867 25.2272C59.3414 25.22 59.3997 25.2108 59.4617 25.1999V25.9272C59.3085 25.971 59.1919 25.9983 59.1117 26.0093C59.0315 26.0202 58.9221 26.0257 58.7835 26.0257C58.4445 26.0257 58.1984 25.9054 58.0453 25.6647C57.9651 25.5371 57.9085 25.3567 57.8757 25.1233C57.6752 25.3858 57.3872 25.6137 57.0117 25.8069C56.6361 26.0002 56.2223 26.0968 55.7703 26.0968C55.227 26.0968 54.7822 25.9327 54.4359 25.6046C54.0932 25.2728 53.9218 24.859 53.9218 24.3632C53.9218 23.82 54.0914 23.3989 54.4304 23.0999C54.7695 22.8009 55.2143 22.6168 55.7648 22.5476L57.3343 22.3507ZM60.4296 20.0429H61.3648V20.8741C61.6419 20.5314 61.9354 20.2853 62.2453 20.1358C62.5552 19.9864 62.8997 19.9116 63.2789 19.9116C64.1101 19.9116 64.6716 20.2015 64.9632 20.7812C65.1236 21.0983 65.2039 21.5522 65.2039 22.1429V25.8999H64.2031V22.2085C64.2031 21.8512 64.1502 21.5632 64.0445 21.3444C63.8695 20.9799 63.5523 20.7976 63.0929 20.7976C62.8596 20.7976 62.6682 20.8213 62.5187 20.8687C62.2489 20.9489 62.0119 21.1093 61.8078 21.3499C61.6437 21.5431 61.5361 21.7437 61.4851 21.9515C61.4377 22.1556 61.414 22.4491 61.414 22.8319V25.8999H60.4296V20.0429ZM25.2546 34.3843V41.8999H27.4734C28.6088 41.8999 29.4005 41.34 29.8484 40.2202C30.0932 39.6056 30.2156 38.8739 30.2156 38.0249C30.2156 36.853 30.0307 35.9546 29.6609 35.3296C29.2963 34.6994 28.5671 34.3843 27.4734 34.3843H25.2546ZM27.8796 32.3843C28.5932 32.3947 29.1869 32.478 29.6609 32.6343C30.4682 32.8999 31.1218 33.3869 31.6218 34.0952C32.0229 34.6681 32.2963 35.2879 32.4421 35.9546C32.588 36.6213 32.6609 37.2567 32.6609 37.8608C32.6609 39.3921 32.3536 40.689 31.739 41.7515C30.9057 43.1838 29.6192 43.8999 27.8796 43.8999H22.9187V32.3843H27.8796ZM36.5906 34.3687H34.3328V32.314H36.5906V34.3687ZM34.3328 35.3843H36.5906V43.8999H34.3328V35.3843ZM42.4109 42.0718C42.9317 42.0718 43.3718 41.8765 43.7312 41.4858C44.0906 41.09 44.2703 40.4624 44.2703 39.603C44.2703 38.7957 44.0984 38.1812 43.7546 37.7593C43.4161 37.3374 42.9604 37.1265 42.3875 37.1265C41.6062 37.1265 41.0671 37.4937 40.7703 38.228C40.614 38.6187 40.5359 39.1004 40.5359 39.6733C40.5359 40.1681 40.6192 40.6082 40.7859 40.9937C41.088 41.7124 41.6296 42.0718 42.4109 42.0718ZM41.8562 35.1812C42.2833 35.1812 42.6557 35.2463 42.9734 35.3765C43.5151 35.6004 43.9526 36.0119 44.2859 36.6108V35.3843H46.45V43.4624C46.45 44.5614 46.2651 45.3895 45.8953 45.9468C45.2598 46.9051 44.0411 47.3843 42.239 47.3843C41.1505 47.3843 40.2625 47.1707 39.575 46.7437C38.8875 46.3166 38.5072 45.6785 38.4343 44.8296H40.8562C40.9187 45.09 41.0203 45.2775 41.1609 45.3921C41.4005 45.5952 41.8041 45.6968 42.3718 45.6968C43.1739 45.6968 43.7104 45.4285 43.9812 44.8921C44.1583 44.5483 44.2468 43.9702 44.2468 43.1577V42.6108C44.0333 42.9754 43.8041 43.2489 43.5593 43.4312C43.1166 43.7697 42.5411 43.939 41.8328 43.939C40.739 43.939 39.864 43.5562 39.2078 42.7905C38.5567 42.0197 38.2312 40.978 38.2312 39.6655C38.2312 38.3999 38.5463 37.3374 39.1765 36.478C39.8067 35.6134 40.7 35.1812 41.8562 35.1812ZM50.825 34.3687H48.5671V32.314H50.825V34.3687ZM48.5671 35.3843H50.825V43.8999H48.5671V35.3843ZM52.114 37.0483V35.4624H53.3015V33.0874H55.5046V35.4624H56.8875V37.0483H55.5046V41.5483C55.5046 41.8973 55.5489 42.116 55.6375 42.2046C55.726 42.2879 55.9968 42.3296 56.45 42.3296C56.5177 42.3296 56.588 42.3296 56.6609 42.3296C56.739 42.3244 56.8145 42.3192 56.8875 42.314V43.978L55.8328 44.0171C54.7807 44.0535 54.0619 43.8713 53.6765 43.4702C53.4265 43.215 53.3015 42.8218 53.3015 42.2905V37.0483H52.114ZM63.0125 39.7593C62.8718 39.8478 62.7286 39.9207 62.5828 39.978C62.4421 40.0301 62.2468 40.0796 61.9968 40.1265L61.4968 40.2202C61.0281 40.3035 60.6921 40.4051 60.489 40.5249C60.1453 40.728 59.9734 41.0431 59.9734 41.4702C59.9734 41.8504 60.0776 42.1265 60.2859 42.2983C60.4994 42.465 60.7572 42.5483 61.0593 42.5483C61.5385 42.5483 61.9786 42.4077 62.3796 42.1265C62.7859 41.8452 62.9968 41.3322 63.0125 40.5874V39.7593ZM61.6609 38.7202C62.0723 38.6681 62.3666 38.603 62.5437 38.5249C62.8614 38.3895 63.0203 38.1785 63.0203 37.8921C63.0203 37.5431 62.8979 37.3035 62.6531 37.1733C62.4135 37.0379 62.0593 36.9702 61.5906 36.9702C61.0645 36.9702 60.6921 37.1004 60.4734 37.3608C60.3171 37.5535 60.213 37.814 60.1609 38.1421H58.0125C58.0593 37.3973 58.2677 36.7853 58.6375 36.3062C59.226 35.5562 60.2364 35.1812 61.6687 35.1812C62.601 35.1812 63.4291 35.366 64.1531 35.7358C64.877 36.1056 65.239 36.8035 65.239 37.8296V41.7358C65.239 42.0067 65.2442 42.3348 65.2546 42.7202C65.2703 43.0119 65.3145 43.2098 65.3875 43.314C65.4604 43.4181 65.5697 43.5041 65.7156 43.5718V43.8999H63.2937C63.226 43.728 63.1791 43.5666 63.1531 43.4155C63.127 43.2645 63.1062 43.0926 63.0906 42.8999C62.7833 43.2332 62.4291 43.5171 62.0281 43.7515C61.5489 44.0275 61.0072 44.1655 60.4031 44.1655C59.6322 44.1655 58.9942 43.9468 58.489 43.5093C57.989 43.0666 57.739 42.4416 57.739 41.6343C57.739 40.5874 58.1427 39.8296 58.95 39.3608C59.3927 39.1056 60.0437 38.9233 60.9031 38.814L61.6609 38.7202ZM69.4968 43.8999H67.2703V32.3843H69.4968V43.8999ZM76.3093 32.3999H84.4734V34.4233H78.7V37.0718H83.7546V39.0718H78.7V43.8999H76.3093V32.3999ZM90.6062 39.7593C90.4656 39.8478 90.3223 39.9207 90.1765 39.978C90.0359 40.0301 89.8406 40.0796 89.5906 40.1265L89.0906 40.2202C88.6218 40.3035 88.2859 40.4051 88.0828 40.5249C87.739 40.728 87.5671 41.0431 87.5671 41.4702C87.5671 41.8504 87.6713 42.1265 87.8796 42.2983C88.0932 42.465 88.351 42.5483 88.6531 42.5483C89.1322 42.5483 89.5723 42.4077 89.9734 42.1265C90.3796 41.8452 90.5906 41.3322 90.6062 40.5874V39.7593ZM89.2546 38.7202C89.6661 38.6681 89.9604 38.603 90.1375 38.5249C90.4552 38.3895 90.614 38.1785 90.614 37.8921C90.614 37.5431 90.4916 37.3035 90.2468 37.1733C90.0072 37.0379 89.6531 36.9702 89.1843 36.9702C88.6583 36.9702 88.2859 37.1004 88.0671 37.3608C87.9109 37.5535 87.8067 37.814 87.7546 38.1421H85.6062C85.6531 37.3973 85.8614 36.7853 86.2312 36.3062C86.8197 35.5562 87.8302 35.1812 89.2625 35.1812C90.1947 35.1812 91.0229 35.366 91.7468 35.7358C92.4708 36.1056 92.8328 36.8035 92.8328 37.8296V41.7358C92.8328 42.0067 92.838 42.3348 92.8484 42.7202C92.864 43.0119 92.9083 43.2098 92.9812 43.314C93.0541 43.4181 93.1635 43.5041 93.3093 43.5718V43.8999H90.8875C90.8197 43.728 90.7729 43.5666 90.7468 43.4155C90.7208 43.2645 90.7 43.0926 90.6843 42.8999C90.377 43.2332 90.0229 43.5171 89.6218 43.7515C89.1427 44.0275 88.601 44.1655 87.9968 44.1655C87.226 44.1655 86.588 43.9468 86.0828 43.5093C85.5828 43.0666 85.3328 42.4416 85.3328 41.6343C85.3328 40.5874 85.7364 39.8296 86.5437 39.3608C86.9864 39.1056 87.6375 38.9233 88.4968 38.814L89.2546 38.7202ZM99.9031 38.439C99.8614 38.1213 99.7546 37.8348 99.5828 37.5796C99.3328 37.2358 98.9447 37.064 98.4187 37.064C97.6687 37.064 97.1557 37.4364 96.8796 38.1812C96.7338 38.577 96.6609 39.103 96.6609 39.7593C96.6609 40.3843 96.7338 40.8869 96.8796 41.2671C97.1453 41.9754 97.6453 42.3296 98.3796 42.3296C98.9005 42.3296 99.2703 42.189 99.489 41.9077C99.7078 41.6265 99.8406 41.2619 99.8875 40.814H102.161C102.109 41.491 101.864 42.1317 101.427 42.7358C100.729 43.7098 99.6947 44.1968 98.325 44.1968C96.9552 44.1968 95.9473 43.7905 95.3015 42.978C94.6557 42.1655 94.3328 41.1108 94.3328 39.814C94.3328 38.3504 94.6895 37.2124 95.4031 36.3999C96.1166 35.5874 97.101 35.1812 98.3562 35.1812C99.4239 35.1812 100.296 35.4207 100.973 35.8999C101.656 36.3791 102.059 37.2254 102.184 38.439H99.9031ZM102.848 37.0483V35.4624H104.036V33.0874H106.239V35.4624H107.622V37.0483H106.239V41.5483C106.239 41.8973 106.283 42.116 106.372 42.2046C106.46 42.2879 106.731 42.3296 107.184 42.3296C107.252 42.3296 107.322 42.3296 107.395 42.3296C107.473 42.3244 107.549 42.3192 107.622 42.314V43.978L106.567 44.0171C105.515 44.0535 104.796 43.8713 104.411 43.4702C104.161 43.215 104.036 42.8218 104.036 42.2905V37.0483H102.848ZM112.872 42.3296C113.523 42.3296 114.023 42.0978 114.372 41.6343C114.721 41.1707 114.895 40.5119 114.895 39.6577C114.895 38.8035 114.721 38.1473 114.372 37.689C114.023 37.2254 113.523 36.9937 112.872 36.9937C112.221 36.9937 111.718 37.2254 111.364 37.689C111.015 38.1473 110.841 38.8035 110.841 39.6577C110.841 40.5119 111.015 41.1707 111.364 41.6343C111.718 42.0978 112.221 42.3296 112.872 42.3296ZM117.231 39.6577C117.231 40.9077 116.872 41.978 116.153 42.8687C115.434 43.7541 114.343 44.1968 112.88 44.1968C111.416 44.1968 110.325 43.7541 109.606 42.8687C108.887 41.978 108.528 40.9077 108.528 39.6577C108.528 38.4285 108.887 37.3634 109.606 36.4624C110.325 35.5614 111.416 35.1108 112.88 35.1108C114.343 35.1108 115.434 35.5614 116.153 36.4624C116.872 37.3634 117.231 38.4285 117.231 39.6577ZM123.458 35.1812C123.499 35.1812 123.533 35.1838 123.559 35.189C123.591 35.189 123.656 35.1916 123.755 35.1968V37.478C123.614 37.4624 123.489 37.452 123.38 37.4468C123.27 37.4416 123.182 37.439 123.114 37.439C122.218 37.439 121.617 37.7306 121.309 38.314C121.137 38.6421 121.052 39.1473 121.052 39.8296V43.8999H118.809V35.3843H120.934V36.8687C121.278 36.3009 121.578 35.9129 121.833 35.7046C122.249 35.3556 122.791 35.1812 123.458 35.1812ZM125.411 45.5327L125.692 45.5483C125.911 45.5588 126.119 45.5509 126.317 45.5249C126.515 45.4989 126.682 45.439 126.817 45.3452C126.947 45.2567 127.067 45.0718 127.177 44.7905C127.291 44.5093 127.338 44.3374 127.317 44.2749L124.192 35.3843H126.669L128.528 41.6655L130.286 35.3843H132.653L129.731 43.7593C129.169 45.3739 128.723 46.3739 128.395 46.7593C128.067 47.1499 127.411 47.3452 126.427 47.3452C126.229 47.3452 126.07 47.3426 125.95 47.3374C125.83 47.3374 125.65 47.3296 125.411 47.314V45.5327Z"
            fill="#54585A"
          />
          <path
            d="M30.9909 1.17494C31.2508 1.19 31.3519 0.828529 31.1064 0.768283C29.0846 0.271256 27.0629 0.0302734 25.0411 0.0302734C14.8023 0.0302734 5.1411 6.31089 0.332182 16.4322C-0.129937 17.4112 0.101122 18.4203 1.12645 18.8119L6.65743 20.8903C7.5239 21.2217 8.49146 20.7849 8.80917 19.9264C13.4304 7.80197 21.4452 0.858652 30.9909 1.17494Z"
            fill="#D22630"
          />
          <path
            d="M39.9589 9.29293C37.475 4.86487 33.547 2.54541 29.1858 2.54541C28.7381 2.54541 28.2904 2.57553 27.8283 2.62072C27.7706 2.63578 27.7128 2.69602 27.6839 2.75627C27.6695 2.80145 27.655 2.84664 27.655 2.90688C27.655 3.02738 27.7272 3.13281 27.8139 3.17799L27.9005 3.19305C29.8501 3.7202 31.2076 5.04561 32.5073 7.5458C32.565 7.65123 32.7528 8.04283 33.3304 8.17838L39.4968 10.0611C39.5401 10.0761 39.569 10.0761 39.6123 10.0761C39.8578 10.0761 40.0456 9.8502 40.0456 9.56403C40.0456 9.47366 40.0167 9.3833 39.9589 9.29293Z"
            fill="#D22630"
          />
        </svg>
      </div>

      {/* Fullscreen overlay for mobile menu */}
      <div
        className={`lg:flex lg:ml-auto lg:mr-8 lg:relative lg:w-auto lg:h-auto transition-all duration-300 ${
          isOpen
            ? "block absolute top-0 left-0 w-full h-screen bg-white z-10"
            : "hidden"
        }`}
      >
        {/* Close button */}
        <div className="absolute top-4 right-4 lg:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none p-2 text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <nav className="flex flex-col lg:flex-row gap-4 font-bold h-full items-center justify-center">
          <span className="cursor-pointer text-2xl md:text-lg">Home</span>
          <span className="cursor-pointer text-2xl md:text-lg">About Us</span>
          <span className="cursor-pointer text-2xl md:text-lg">What we do</span>
          <span className="cursor-pointer text-2xl md:text-lg">
            Why join us
          </span>
          <span className="cursor-pointer text-2xl md:text-lg">Careers</span>
        </nav>
      </div>

      {/* Line separator */}
      <div className="border-2 border-[#979797] h-8 mr-8 hidden lg:block"></div>

      {/* Linkedin Logo */}
      <div className="top-6 md:mr-20 cursor-pointer">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.772 0H22.2213C23.2 0 24 0.773333 24 1.72933V22.2707C24 23.2267 23.2 24 22.2213 24H1.77067C0.792 24 0 23.2267 0 22.2707V1.72933C0 0.773333 0.790667 0 1.772 0ZM3.87661 6.82911C4.26372 7.21647 4.78905 7.43387 5.33667 7.43333L5.336 7.43333H5.33733L5.33667 7.43333C6.47628 7.43371 7.4006 6.51036 7.40133 5.37067C7.40207 4.23075 6.47858 3.30607 5.33867 3.30533C4.19875 3.3046 3.27407 4.22808 3.27333 5.368C3.27227 5.91585 3.48934 6.4416 3.87661 6.82911ZM16.8933 20.452H20.4467H20.448V14.1653C20.448 11.0813 19.7813 8.71067 16.1813 8.71067C14.448 8.71067 13.288 9.66133 12.8107 10.56H12.764V9H9.35067V20.452H12.9053V14.7853C12.9053 13.2907 13.188 11.8453 15.04 11.8453C16.8667 11.8453 16.8933 13.5547 16.8933 14.8827V20.452ZM3.55467 20.452V9H7.12V20.452H7.11867H3.55467Z"
            fill="black"
          />
        </svg>
      </div>
    </header>
  );
}

export default Navbar;
