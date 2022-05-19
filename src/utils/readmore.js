export const readMore = (str) => {
  if (str.length > 50) {
    str = str.substring(0, 120) + " ... ";
  }
  return str;
};
