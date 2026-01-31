//timer
var mins = document.getElementById("mins")
var secs = document.getElementById("secs")
var srtbtn = document.getElementById("srtbtn")
var resetbtn = document.getElementById("resetbtn")
var timemsg = document.getElementById("timemsg")
var calmsg = document.getElementById("calmsg")
var daysrk = document.getElementById("daysrk")
var toast = document.getElementById("toast")
var trendcard = document.querySelectorAll(".trendingcard")
var workoutcard = document.querySelectorAll(".workoutcard")
var timepart = document.querySelector(".timepart")
var allcard = document.querySelectorAll(".allcard")
let total = 45 * 60
let interval = null
let cal = 0
let day = 0


//streak
let savesrk = localStorage.getItem("daystreak")

if(savesrk)
{  day = parseInt(savesrk)
   daysrk.textContent = day +" Day" 
}
else
{
    day = 0
    daysrk.textContent = "0 Day"
}



function timer() {
    let minutes = Math.floor(total / 60)
    let seconds = total % 60

    mins.textContent = minutes
    secs.textContent = (seconds >= 10) ? seconds : "0" + seconds
    timemsg.textContent = "🕒" + minutes + " min"
    calmsg.textContent = "🔥 " + cal + " kcal"

}

srtbtn.addEventListener("click", () => {
    if (interval != null) return

    interval = setInterval(() => {

        if (total > 0) {
            total--
            cal = cal + 2
            timer()
        }
        else {
            clearInterval(interval)
            interval = null

            toast.classList.add("opacity-100")
            toast.classList.remove("opacity-0")

            setTimeout(() => {
                toast.classList.remove("opacity-100")
                toast.classList.add("opacity-0")
            }, 3000)

            day = day + 1
            localStorage.setItem("daystreak",day)
            daysrk.textContent = day + " Day"

        }

    }, 1000)

})

resetbtn.addEventListener("click", () => {
    clearInterval(interval)
    interval = null

    toast.classList.remove("opacity-100")
    toast.classList.add("opacity-0")


    total = 45 * 60
    timer()
})

//scroll
trendcard.forEach(card=>{card.addEventListener("click",()=>{
  timepart.scrollIntoView({
    behavior: "smooth"
  })
})
})

workoutcard.forEach(card=>card.addEventListener("click",()=>{
     timepart.scrollIntoView({
        behavior: "smooth"
     })
}))


//filter
var level = document.getElementById("level")

level.addEventListener("change",()=>{
    let selectedlevel = level.value

    allcard.forEach(card=>{
        if (selectedlevel == "all" || card.dataset.level == selectedlevel)
        {
               card.style.display = "block"
        }
        else
        {
            card.style.display = "none"
        }
    })
})

//today btn
var srttoday = document.getElementById("srttoday")
var trending = document.querySelector(".trending")

srttoday.addEventListener("click",()=>{
       trending.scrollIntoView({
        behavior: "smooth"
       })
})

//feature btn
var srttodaybtn = document.getElementById("srttodaybtn")
var excercise = document.querySelector(".excercise")

srttodaybtn.addEventListener("click",()=>{
       excercise.scrollIntoView({
        behavior: "smooth"
       })
})

//resnav
var resnav = document.getElementById("resnav")
var closetag= document.getElementById("closetag")
var navicon = document.getElementById("navicon")

navicon.addEventListener("click",()=>{
      resnav.style.right = "0"
})

closetag.addEventListener("click",()=>{
      resnav.style.right = "-50%"
})

