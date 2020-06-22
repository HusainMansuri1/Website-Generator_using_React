import React from 'react';

const BannerEditor = (props) => {
  return ( 
    <div className="banner-editor input-block">
      <h3>Banner Editor</h3>
      <input type="text" placeholder="Banner Heading" className="heading" value={props.pushBannerState_2.heading} onChange={props.bannerChange_2} required>
      </input>

      <input type="text" placeholder="Banner Paragraph" className="para" value={props.pushBannerState_2.para} onChange={props.bannerChange_2} required>
      </input>
    </div>
   );
};
 
export default BannerEditor;