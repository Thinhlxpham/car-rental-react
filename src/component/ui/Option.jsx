import React from 'react';

const Option = ({image, title, paragraph}) => {
  return (
    <div class="choose__feature">
                    <figure class="choose__feature__img__wrapper">
                      <img src={image} alt="" class="choose__feature__img"/>
                    </figure>
                    <div class="choose__feature__text">
                      <h4 class="choose__feature__text__title">
                        {title}
                      </h4>
                      <p class="choose__feature__text__para">
                        {paragraph}
                      </p>
                    </div>
                  </div>
  );
}

export default Option;
