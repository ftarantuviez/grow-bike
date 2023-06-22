export const trimLargeText = (text: string, maxChar = 150) => {
  const substring = text.substring(0, maxChar);

  return maxChar > text.length ? substring : `${text.substring(0, maxChar)}...`;
};
