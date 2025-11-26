import Gallery from "../components/Gallery";

import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/4.jpg";
import img5 from "../assets/gallery/5.jpg";
import img6 from "../assets/gallery/6.jpg";
import img7 from "../assets/gallery/7.jpg";
import img8 from "../assets/gallery/8.jpg";
import img9 from "../assets/gallery/9.jpg";
import img10 from "../assets/gallery/10.jpg";
import img11 from "../assets/gallery/11.jpg";
import img12 from "../assets/gallery/12.jpg";
import img13 from "../assets/gallery/13.jpg";
import img14 from "../assets/gallery/14.jpg";
import img15 from "../assets/gallery/15.jpg";
import img16 from "../assets/gallery/16.jpg";
import img17 from "../assets/gallery/17.jpg";
import img18 from "../assets/gallery/18.jpg";
import img19 from "../assets/gallery/19.jpg";
import img20 from "../assets/gallery/20.jpg";
import img21 from "../assets/gallery/21.jpg";
import img22 from "../assets/gallery/22.jpg";
import img23 from "../assets/gallery/23.jpg";
import img24 from "../assets/gallery/24.jpg";
import img25 from "../assets/gallery/25.jpg";
import img26 from "../assets/gallery/26.jpg";
import img27 from "../assets/gallery/27.jpg";
import img28 from "../assets/gallery/28.jpg";
import img29 from "../assets/gallery/29.jpg";
import img30 from "../assets/gallery/30.jpg";
import img31 from "../assets/gallery/31.jpg";

const GalleryPage = ({ isDark }) => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
  ];

  return <Gallery images={images} data="Gallery" isDark={isDark} />;
};

export default GalleryPage;
