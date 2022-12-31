export const newYear23 = () => {
  let wishes = [
    `As we bid farewell to 2022 and welcome in 2023, I hope that the new year brings you joy, happiness, and all the things you wish for. May this be a year of new beginnings, growth, and abundance for you. Here's to a wonderful 2023!`,
    `I hope 2023 brings you all the joy, prosperity, and success you desire. May the new year bring you new opportunities and experiences, and may you be surrounded by love and positivity. Here's to a wonderful year ahead!`,
    `I hope that 2023 brings you joy, health, and prosperity. May all of your dreams and goals come true, and may you have the strength and determination to pursue them. Here's to a wonderful new year filled with endless possibilities! Wishing you all the best.`,
    `As we ring in the new year, let's take a moment to reflect on the past and look forward to the future with hope and determination. Here's to a year filled with love, laughter, and all of the things that bring us joy. May 2023 be a year of growth, prosperity, and new opportunities for us all. Happy New Year!`,
    `I hope that this new year brings you joy, health, and success in all of your endeavors. May you have a wonderful year filled with love, laughter, and all of the things that bring you happiness. Wishing you all the best for the new year!`,
    `I wish you a year filled with happiness, prosperity, and success. May all your dreams and goals come true in the coming year. I hope that you have a wonderful time celebrating the start of a new year and that you make the most of every moment. May the new year bring you good health, joy, and all the things that are most important to you.`,
    `As we welcome the new year, may it bring joy, prosperity, and success to all of us. May 2023 be filled with new opportunities and adventures, and may we all find the strength and determination to pursue our goals and dreams. Here's to a happy, healthy, and prosperous new year!`,
  ];

  let wishNumber = Math.floor(Math.random() * wishes.length);
  return wishes[wishNumber];
};
