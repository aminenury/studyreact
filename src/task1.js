import React from 'react';
import './task1.css'; 
import img1 from './img1.png';

const Task1 = () => {
  return (
    <div className='container'>
      <div className='text'>
        <h2 className='firsttext'>Yeni bir başlangıç</h2>
        <h1 className='secondtext'>React Öğreniyorum, Yeni Hayaller Kuruyorum. Dönüşen Dünyada Yeni Şeyler Öğrenmek Gereklidir.</h1>
      </div>
      <div>
        <img className='image' src={img1} alt="Açıklama" />
      </div>
    </div>
  );
};

export default Task1;