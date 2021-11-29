const sec = document.querySelector(".s"),
               min = document.querySelector(".m"),
               hour = document.querySelector(".h"),
               hourNumber = document.querySelector(".hours"),
               minNumber = document.querySelector(".minutes")
function clock() {
               const time = new Date(),
                              secondArr = time.getSeconds() * 6,
                              minutArr = time.getMinutes() * 6,
                              hourArr = time.getHours() * 30
               sec.style.transform = `rotate(${secondArr}deg)`
               min.style.transform = `rotate(${minutArr}deg)`
               hour.style.transform = `rotate(${hourArr}deg)`
               setTimeout(() => clock(), 100);
               hourNumber.innerHTML = time.getHours() < 10 ? "0" + time.getHours() : time.getHours()
               minNumber.innerHTML = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()
}
clock()

const tabsContentItem = document.querySelectorAll('.tabsContentItem'),
               tabsItem = document.querySelectorAll('.tabsItem')
for (let i = 0; i < tabsItem.length; i++) {
               tabsItem[i].addEventListener("click", function () {
                              for (let j = 0; j < tabsItem.length; j++) {
                                             tabsItem[j].classList.remove("active")
                                             tabsContentItem[j].classList.remove("active")
                              }
                              tabsItem[i].classList.add("active")
                              tabsContentItem[i].classList.add("active")
               })
}


const stopwatch__btn = document.querySelector(".stopwatch__btn"),
               tabsLink__span = document.querySelector(".tabsLink__span"),
               stopwatch__seconds = document.querySelector(".stopwatch__seconds"),
               stopwatch__minutes = document.querySelector(".stopwatch__minutes")

let stopWatchSeconds = 0
let stopWatchMinutes = 0
let stopWatchHours = 0

stopwatch__btn.addEventListener("click", function stopWatchParametr() {
               tabsLink__span.classList.remove("active_clear")
               tabsLink__span.classList.add("active")
               stopwatch__btn.innerHTML = "stop"
               stopwatch__btn.addEventListener("click", function () {
                              tabsLink__span.classList.remove("active")
                              tabsLink__span.classList.add("active_clear")
                              stopwatch__btn.innerHTML = "clear"
                              stopwatch__btn.addEventListener("click", function watch() {
                                             tabsLink__span.classList.remove("active_clear")
                                             stopwatch__btn.innerHTML = "start"
                                             stopwatch__btn.addEventListener("click", function () {
                                                            stopWatchParametr()
                                             })
                              })
               })
})








