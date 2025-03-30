import React from 'react';

const Feature = ({ image, title, paragraph }) => {
  return (
            <div className="feature">
                <figure class="feature__img__wrapper">
                    <img src={image} alt="" class="feature__img" />
                    </figure>
                    <h4 class="feature__title">{title}</h4>
                    <p class="feature__para">
                      {paragraph}
                    </p>
                  
                </div>
  );
}

export default Feature;
