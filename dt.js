let downloadBtn = document.querySelector(".download-btn");
    let fileUrl = "https://drive.google.com/uc?export=download&id=16rTAYacGftyvTG1q2Edxnr7fXlurJwGy";
    
let initTimer = () => {
  if (downloadBtn.classList.contains("disable-timer")) {
    return (location.href = fileUrl);
  }

  let timer = downloadBtn.dataset.time;

  downloadBtn.classList.add("timer");

  downloadBtn.innerHTML = `Your download will begin in
  <b>${timer}</b> seconds`;

  let initCount = setInterval(() => {
    if (timer > 0) {
      timer--;

      return (downloadBtn.innerHTML = `Your download will begin in
      <b>${timer}</b> seconds`);
    }

    clearInterval(initCount);

    location.href = fileUrl;

    downloadBtn.innerHTML = 'Your file is downloading....';

    setTimeout(() => {

        downloadBtn.classList.replace("timer", "disable-timer");

      downloadBtn.innerHTML = `<span class="icon bx bx-arrow-to-bottom"></span>
      <span class="text">Download File</span>`;
    }, 3000);
  }, 1000);
};

downloadBtn.addEventListener("click", initTimer);