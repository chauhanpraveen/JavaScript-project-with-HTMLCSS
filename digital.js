const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");

function updateclock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"
    // for change ap to pm
    if (h > 12) {
        h = h - 12;
        ampm = "PM"
    }
    // for prefix 0 agr time 12 se kam ho,ya minutes,ya second//😀
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl, (innerText = ampm);
    setTimeout(() => {
        updateclock();
    }, 1000)
}
updateclock();