<<<<<<< HEAD
export default function formattedTime() {
  const time = new Date();

  const hours = time.getHours().toString().length > 1 ? time.getHours() : `0${time.getHours()}`
  const minutes = time.getMinutes().toString().length > 1 ? time.getMinutes() : `0${time.getMinutes()}`
  const seconds = time.getSeconds().toString().length > 1 ? time.getSeconds() : `0${time.getSeconds()}`
  const formatedTime = `${hours}:${minutes}:${seconds}`;
  return formatedTime;
}
=======
const dubbleZero = parseInt('00');
const time = new Date();
const formatedDate = `${dubbleZero + time.getHours()}:${dubbleZero + time.getMinutes()}:${dubbleZero + time.getSeconds()}`;
console.log(formatedDate);
>>>>>>> 2f6ef6812f5f5c2d004319d68aca073aa4053ad0
