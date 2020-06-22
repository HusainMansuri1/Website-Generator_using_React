import React from 'react';
import InputBlock from './input-block';
import BannerEditor from './banner-editor';
import Footer from '../Custom_components/footer';

const InputContainer = (props) => {
  let arr = [
    {id: 'banner', name: 
      <BannerEditor key="banner-editor"
        pushBannerState_2 = {props.pushBannerState_1}
        bannerChange_2 = {props.bannerChange_1}
      />
    },
    
    {id: 'people', name:
      <InputBlock key="people-editor" 
          pushBtnState_2 = {props.pushBtnState_1}
          change_2 = {props.change_1}
          clickedOn_2 =  {props.clickedOn_1}
          delete_2 =  {props.delete_1}
          add_2 = {props.add_1}
        />
    },

    {id: 'footer', name : <Footer />}
  ];

  const conditionalRendering = () => {
    return props.check_1.map(curr => {
      return arr.map(elem => {
        if(elem.id === curr.id && curr.show)  return elem.name; 
      });
    });
  };

  return ( 
    <section className="input-container">
      {conditionalRendering()}
    </section>
   );
}
 
export default InputContainer;