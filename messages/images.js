export const newYearBG = () => {
  let images = [
    `/Ebony_Gold_Modern_New_Year_Instagram_Story_sxpui5.jpg`,
    `/Gold_And_Green_Modern_Happy_New_Year_Your_Story_nodwux.gif`,
    `/Golden_Black_Happy_New_Year_Greeting_Elegant_Mobile_Video_zlt6mx.gif`,
  ];

  let imageNumber = Math.floor(Math.random() * images.length);

  return images[imageNumber];
};
