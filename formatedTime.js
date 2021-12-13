const dubbleZero = parseInt('00');
const time = new Date();
const formatedDate = `
  ${dubbleZero + time.getHours()}:
  ${dubbleZero + time.getMinutes()}:
  ${dubbleZero + time.getSeconds()}`;
console.log(formatedDate);