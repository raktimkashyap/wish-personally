export const newYearBG = () => {
  let images = [
    `/Gold_And_Green_Modern_Happy_New_Year_Your_Story_nodwux.gif`,
    `/Golden_Black_Happy_New_Year_Greeting_Elegant_Mobile_Video_zlt6mx.gif`,
    `/Navy_Gold_Festive_Sparkler_Happy_New_Year_Mobile_Video_scl3lc.gif`,
    `/Gold_Blue_Foil_Animated_Happy_New_Year_2023_Mobile_Video_hid8it.gif`,
  ];

  let imageNumber = Math.floor(Math.random() * images.length);

  return images[imageNumber];
};
