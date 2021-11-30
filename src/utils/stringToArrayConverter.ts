export const convertStringToArray = (receivedString: string) => {
  return receivedString.split(",").map((item) => item.trim());
};
