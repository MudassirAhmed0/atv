import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/assets/videos/head.mp4' autoPlay loop muted />
      <h1>قناة مسجد الموسوي الكبير</h1>
      <p>من مسجد الموسوي الكبير والى العالم لأحياء شعائر آل الرسول الأعظم تبث قناة مسجد الموسوي الكبير بالبصرة لنشر علوم اهل البيت واحياء امرهم ,مجالس التعزية الحسينية ومجالس الوفايات ومراسم الأعياد والمواليد وكل امور احياء ذكر اهل البيت عليهم السلام</p>
     
    </div>
  );
}

export default HeroSection;
