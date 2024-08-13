import React from 'react';
import ReactCompareImage from 'react-compare-image';

const BeforeAfterSlider = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <ReactCompareImage
        leftImage="/path/to/before-image.jpg"
        rightImage="/path/to/after-image.jpg"
        sliderPositionPercentage={0.5}
        hover={true}
      />
    </div>
  );
};

export default BeforeAfterSlider;