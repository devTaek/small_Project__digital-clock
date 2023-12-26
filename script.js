let handleId = 0;
const h1 = document.getElementById("time");
const go = document.getElementById("go");
const stop = document.getElementById("stop");


function getTime() {
  
  const date = new Date()
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const time = `${hour} : ${minutes} : ${seconds}`
  h1.textContent = time;
}



go.onclick = function() {
  if(handleId == 0) {
    handleId = setInterval(getTime, 1000)   // setInterval : 첫번째 인자로 전달되는 함수를 두번째 인자만큼 주기를 가지고 동작
  }
} 
stop.onclick = function() {
  clearInterval(handleId);
  handleId = 0;
}
