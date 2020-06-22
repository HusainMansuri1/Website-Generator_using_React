import React from 'react';
import Banner from '../Custom_components/banner_comp';

const BannerEditor = (props) => {
  return ( 
    <div className="banner-editor input-block">
      <input type="text" placeholder="Banner Heading" className="heading" value={props.pushBannerState_1.heading} onChange={props.bannerChange_2} required>
      </input>

      <input type="text" placeholder="Banner Paragraph" className="para" value={props.pushBannerState_1.para} onChange={props.bannerChange_2} required>
      </input>
    </div>
   );
}
 
export default BannerEditor;