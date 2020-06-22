import React from 'react';

const BannerEditor = (props) => {
  return (  
    <div className="banner-editor">
      <input className="heading" value={props.pushBannerState_1.heading} change={bannerChange_1}></input>
      <input className="para" value={pushBannerState_1.para} change={props.bannerChange_1}></input>
    </div>
  );
}
 
export default BannerEditor;