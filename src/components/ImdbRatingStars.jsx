import React from 'react';

const Star = ({ starType }) => {
  if (starType === 'filled') {
    return (
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='current'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M10.0002 15.2292L6.12521 17.5625C6.0141 17.6319 5.89604 17.6632 5.77104 17.6563C5.64604 17.6493 5.53493 17.6111 5.43771 17.5417C5.34049 17.4722 5.26757 17.3819 5.21896 17.2708C5.17035 17.1597 5.15993 17.0347 5.18771 16.8958L6.20854 12.4792L2.79188 9.5C2.68076 9.40278 2.61479 9.29514 2.59396 9.17708C2.57313 9.05903 2.5766 8.94445 2.60438 8.83334C2.63215 8.72222 2.69465 8.62847 2.79188 8.55208C2.8891 8.4757 3.00715 8.43056 3.14604 8.41667L7.66688 8.02083L9.41688 3.85417C9.47243 3.72917 9.55576 3.63542 9.66688 3.57292C9.77799 3.51042 9.8891 3.47917 10.0002 3.47917C10.1113 3.47917 10.2224 3.51042 10.3335 3.57292C10.4447 3.63542 10.528 3.72917 10.5835 3.85417L12.3335 8.02083L16.8544 8.41667C16.9933 8.43056 17.1113 8.4757 17.2085 8.55208C17.3058 8.62847 17.3683 8.72222 17.396 8.83334C17.4238 8.94445 17.4273 9.05903 17.4065 9.17708C17.3856 9.29514 17.3197 9.40278 17.2085 9.5L13.7919 12.4792L14.8127 16.8958C14.8405 17.0347 14.8301 17.1597 14.7815 17.2708C14.7328 17.3819 14.6599 17.4722 14.5627 17.5417C14.4655 17.6111 14.3544 17.6493 14.2294 17.6563C14.1044 17.6632 13.9863 17.6319 13.8752 17.5625L10.0002 15.2292Z'
          fill='#FED430'
        />
      </svg>
    );
  }

  if (starType === 'halfFilled') {
    return (
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='current'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M10.0002 5.70833V13.7708L13.271 15.75L12.396 12.0417L15.271 9.54167L11.4794 9.20833L10.0002 5.70833ZM10.0002 15.2292L6.12521 17.5625C6.0141 17.6319 5.89604 17.6632 5.77104 17.6563C5.64604 17.6493 5.53493 17.6111 5.43771 17.5417C5.34049 17.4722 5.26757 17.3819 5.21896 17.2708C5.17035 17.1597 5.15993 17.0347 5.18771 16.8958L6.20854 12.4792L2.79188 9.5C2.68076 9.40278 2.61479 9.29514 2.59396 9.17708C2.57313 9.05903 2.5766 8.94445 2.60438 8.83333C2.63215 8.72222 2.69465 8.62847 2.79188 8.55208C2.8891 8.4757 3.00715 8.43056 3.14604 8.41667L7.66688 8.02083L9.41688 3.85417C9.47243 3.72917 9.55576 3.63542 9.66688 3.57292C9.77799 3.51042 9.8891 3.47917 10.0002 3.47917C10.1113 3.47917 10.2224 3.51042 10.3335 3.57292C10.4447 3.63542 10.528 3.72917 10.5835 3.85417L12.3335 8.02083L16.8544 8.41667C16.9933 8.43056 17.1113 8.4757 17.2085 8.55208C17.3058 8.62847 17.3683 8.72222 17.396 8.83333C17.4238 8.94445 17.4273 9.05903 17.4065 9.17708C17.3856 9.29514 17.3197 9.40278 17.2085 9.5L13.7919 12.4792L14.8127 16.8958C14.8405 17.0347 14.8301 17.1597 14.7815 17.2708C14.7328 17.3819 14.6599 17.4722 14.5627 17.5417C14.4655 17.6111 14.3544 17.6493 14.2294 17.6563C14.1044 17.6632 13.9863 17.6319 13.8752 17.5625L10.0002 15.2292Z'
          fill='#FED430'
        />
      </svg>
    );
  }

  if (starType === 'emptyStar') {
    return (
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='current'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M16.8383 9.07681L16.8382 9.07681L16.8383 9.07681ZM16.8383 9.07681L16.8156 9.07281L16.8383 9.07681ZM10.3097 14.7152L10.0002 14.5288L9.6907 14.7152L5.8157 17.0485L5.81566 17.0484L5.80721 17.0537C5.80481 17.0552 5.80293 17.0563 5.80152 17.057C5.79261 17.0563 5.78905 17.055 5.78901 17.055L5.78864 17.0548L5.78645 17.0534C5.78057 17.0492 5.77674 17.0459 5.77264 17.0385C5.77267 17.038 5.7727 17.0374 5.77274 17.0368C5.773 17.0329 5.77359 17.0272 5.7749 17.0197L6.79313 12.6143L6.8742 12.2635L6.60286 12.0269L3.18698 9.04846C3.18688 9.04837 3.18678 9.04828 3.18668 9.04819C3.18462 9.04638 3.18277 9.04471 3.18112 9.04317C3.1805 9.0341 3.18042 9.0256 3.18079 9.01756C3.18642 9.01629 3.19376 9.01499 3.20309 9.01397L7.71921 8.61855L8.07987 8.58697L8.22007 8.25317L9.9667 4.09453C9.96712 4.09364 9.96752 4.09284 9.96789 4.09213C9.98222 4.0846 9.99152 4.08145 9.99599 4.0802C9.99812 4.0796 9.99949 4.07933 10.0002 4.07921C10.0009 4.07933 10.0023 4.0796 10.0044 4.0802C10.0089 4.08145 10.0182 4.0846 10.0325 4.09213C10.0329 4.09284 10.0333 4.09364 10.0337 4.09453L11.7804 8.25317L11.9205 8.58697L12.2812 8.61855L16.7973 9.01397C16.8067 9.01499 16.814 9.01629 16.8196 9.01756C16.82 9.0256 16.8199 9.0341 16.8193 9.04317C16.8177 9.0447 16.8158 9.04637 16.8138 9.04817C16.8137 9.04827 16.8135 9.04836 16.8134 9.04846L13.3976 12.0269L13.1262 12.2635L13.2073 12.6143L14.2255 17.0197C14.2268 17.0272 14.2274 17.0329 14.2277 17.0368C14.2277 17.0374 14.2277 17.038 14.2278 17.0385C14.2237 17.0459 14.2198 17.0492 14.214 17.0534L14.2118 17.0548L14.2114 17.055C14.2114 17.055 14.2078 17.0563 14.1989 17.057C14.1975 17.0563 14.1956 17.0552 14.1932 17.0537L14.1933 17.0536L14.1847 17.0485L10.3097 14.7152ZM16.8398 9.07708L17.4065 9.17708L16.8398 9.07708L16.8398 9.07708Z'
          stroke='#FED430'
          strokeWidth='1.2'
        />
      </svg>
    );
  }
};

const ImdbRatingStars = ({ imdbRating }) => {
  if (imdbRating === 'N/A') {
    return null;
  }

  imdbRating = Math.floor(+imdbRating);
  const returnStarIcons = () => {
    let stars = [];
    console.log(imdbRating);
    if (imdbRating !== 0) {
      for (let i = 0; i < imdbRating / 2; i++) {
        stars.push(<Star key={i} starType='filled' />);
      }
    }

    if (imdbRating % 2 !== 0 && imdbRating !== 0) {
      stars.push(<Star key='halfStar' starType='halfFilled' />);
    }

    let imdbEmptyStars = (imdbRating % 2 === 0 ? 5 : 3) - imdbRating / 2;
    for (let k = 0; k < imdbEmptyStars; k++) {
      stars.push(<Star key={k + 'emptyStar'} starType='emptyStar' />);
    }
    console.log(stars);
    return stars;
  };

  return <div>{returnStarIcons()}</div>;
};

export default ImdbRatingStars;