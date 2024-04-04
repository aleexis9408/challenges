export const formatPoint = (point: number) => {
  return point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};
