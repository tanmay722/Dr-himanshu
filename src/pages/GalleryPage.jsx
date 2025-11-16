import Gallery from "../components/Gallery";

import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/4.jpg";
import img5 from "../assets/gallery/5.jpg";
const GalleryPage = ({ isDark }) => {
  const images = [img1, img2, img3, img4, img5];

  return <Gallery images={images} data="Gallery" isDark={isDark} />;
};

export default GalleryPage;
