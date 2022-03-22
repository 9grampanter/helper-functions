export default function formattedTime() {
  const time = new Date();

  const hours = time.getHours().toString().length > 1 ? time.getHours() : `0${time.getHours()}`
  const minutes = time.getMinutes().toString().length > 1 ? time.getMinutes() : `0${time.getMinutes()}`
  const seconds = time.getSeconds().toString().length > 1 ? time.getSeconds() : `0${time.getSeconds()}`
  const formatedTime = `${hours}:${minutes}:${seconds}`;
  return formatedTime;
}
