// State Tabbing and Change Content
let tabValue = 1
    
// Dropdown
document.getElementById("dropdown").innerHTML = '2018';
let dropdown = false

function dropDownOpen () {
  if(!dropdown) {
    document.querySelector("#dropdown-menu").style.display = 'block';
    dropdown = true
  }
  else {
    document.querySelector("#dropdown-menu").style.display = 'none';
    dropdown = false
  }
}
function clickDropdown (value) {
  let val = value
  if(val == 1) {
    document.getElementById("dropdown").innerHTML = '2018';
    clickLanding(val)
    tabValue = 1
  }
  if(val == 2) {
    document.getElementById("dropdown").innerHTML = '2019';
    clickLanding(val)
    tabValue = 2
  }
  if(val == 3) {
    document.getElementById("dropdown").innerHTML = '2020';
    clickLanding(val)
    tabValue = 3
  }
  if(val == 4) {
    document.getElementById("dropdown").innerHTML = '2021';
    clickLanding(val)
    tabValue = 4
  }
  if(val == 5) {
    document.getElementById("dropdown").innerHTML = '2022';
    clickLanding(val)
    tabValue = 5
  }
  document.querySelector("#dropdown-menu").style.display = 'none';
  dropdown = false
}
function next() {
  const elementNext = document.getElementById("next")
  const elementPrev = document.getElementById("prev")
  elementPrev.classList.remove('bg-[#D1AD0A]')
  elementPrev.classList.add('bg-transparent')
  elementNext.classList.remove('bg-transparent')
  elementNext.classList.add('bg-[#D1AD0A]')
  if(tabValue < 5) {
    tabValue = tabValue+1
    clickLanding(tabValue)
  }
}
function prev() {
  const elementNext = document.getElementById("next")
  const elementPrev = document.getElementById("prev")
  elementNext.classList.remove('bg-[#D1AD0A]')
  elementNext.classList.add('bg-transparent')
  elementPrev.classList.remove('bg-transparent')
  elementPrev.classList.add('bg-[#D1AD0A]')
  if(tabValue <= 5 && tabValue > 1) {
    tabValue = tabValue-1
    clickLanding(tabValue)
  }
}
document.querySelector("#content-1").style.display = 'block';
document.querySelector("#content-2").style.display = 'none';
document.querySelector("#content-3").style.display = 'none';
document.querySelector("#content-4").style.display = 'none';
document.querySelector("#content-5").style.display = 'none';

document.querySelector("#number-1").style.display = 'block';
document.querySelector("#number-2").style.display = 'none';
document.querySelector("#number-3").style.display = 'none';
document.querySelector("#number-4").style.display = 'none';
document.querySelector("#number-5").style.display = 'none';

document.querySelector("#point-line-1").style.display = 'block';
document.querySelector("#point-line-2").style.display = 'none';
document.querySelector("#point-line-3").style.display = 'none';
document.querySelector("#point-line-4").style.display = 'none';
document.querySelector("#point-line-5").style.display = 'none';

function clickLanding(val) {
  if(val == 1) {
    document.querySelector("#content-2").style.display = 'none';
    document.querySelector("#content-3").style.display = 'none';
    document.querySelector("#content-4").style.display = 'none';
    document.querySelector("#content-5").style.display = 'none';

    document.querySelector("#number-2").style.display = 'none';
    document.querySelector("#number-3").style.display = 'none';
    document.querySelector("#number-4").style.display = 'none';
    document.querySelector("#number-5").style.display = 'none';

    document.querySelector("#point-line-2").style.display = 'none';
    document.querySelector("#point-line-3").style.display = 'none';
    document.querySelector("#point-line-4").style.display = 'none';
    document.querySelector("#point-line-5").style.display = 'none';

    document.querySelector("#content-1").style.display = 'block';
    document.querySelector("#number-1").style.display = 'block';
    document.querySelector("#point-line-1").style.display = 'block';
    document.getElementById("dropdown").innerHTML = '2018';
  }
  if(val == 2) {
    document.querySelector("#content-1").style.display = 'none';
    document.querySelector("#content-3").style.display = 'none';
    document.querySelector("#content-4").style.display = 'none';
    document.querySelector("#content-5").style.display = 'none';

    document.querySelector("#number-1").style.display = 'none';
    document.querySelector("#number-3").style.display = 'none';
    document.querySelector("#number-4").style.display = 'none';
    document.querySelector("#number-5").style.display = 'none';

    document.querySelector("#point-line-1").style.display = 'none';
    document.querySelector("#point-line-3").style.display = 'none';
    document.querySelector("#point-line-4").style.display = 'none';
    document.querySelector("#point-line-5").style.display = 'none';

    document.querySelector("#content-2").style.display = 'block';
    document.querySelector("#number-2").style.display = 'block';
    document.querySelector("#point-line-2").style.display = 'block';
    document.getElementById("dropdown").innerHTML = '2019';
  }
  if(val == 3) {
    document.querySelector("#content-1").style.display = 'none';
    document.querySelector("#content-2").style.display = 'none';
    document.querySelector("#content-4").style.display = 'none';
    document.querySelector("#content-5").style.display = 'none';

    document.querySelector("#number-1").style.display = 'none';
    document.querySelector("#number-2").style.display = 'none';
    document.querySelector("#number-4").style.display = 'none';
    document.querySelector("#number-5").style.display = 'none';

    document.querySelector("#point-line-1").style.display = 'none';
    document.querySelector("#point-line-2").style.display = 'none';
    document.querySelector("#point-line-4").style.display = 'none';
    document.querySelector("#point-line-5").style.display = 'none';

    document.querySelector("#content-3").style.display = 'block';
    document.querySelector("#number-3").style.display = 'block';
    document.querySelector("#point-line-3").style.display = 'block';
    document.getElementById("dropdown").innerHTML = '2020';
  }
  if(val == 4) {
    document.querySelector("#content-1").style.display = 'none';
    document.querySelector("#content-2").style.display = 'none';
    document.querySelector("#content-3").style.display = 'none';
    document.querySelector("#content-5").style.display = 'none';

    document.querySelector("#number-1").style.display = 'none';
    document.querySelector("#number-2").style.display = 'none';
    document.querySelector("#number-3").style.display = 'none';
    document.querySelector("#number-5").style.display = 'none';

    document.querySelector("#point-line-1").style.display = 'none';
    document.querySelector("#point-line-2").style.display = 'none';
    document.querySelector("#point-line-3").style.display = 'none';
    document.querySelector("#point-line-5").style.display = 'none';

    document.querySelector("#content-4").style.display = 'block';
    document.querySelector("#number-4").style.display = 'block';
    document.querySelector("#point-line-4").style.display = 'block';
    document.getElementById("dropdown").innerHTML = '2021';
  }
  if(val == 5) {
    document.querySelector("#content-1").style.display = 'none';
    document.querySelector("#content-2").style.display = 'none';
    document.querySelector("#content-3").style.display = 'none';
    document.querySelector("#content-4").style.display = 'none';

    document.querySelector("#number-1").style.display = 'none';
    document.querySelector("#number-2").style.display = 'none';
    document.querySelector("#number-3").style.display = 'none';
    document.querySelector("#number-4").style.display = 'none';

    document.querySelector("#point-line-1").style.display = 'none';
    document.querySelector("#point-line-2").style.display = 'none';
    document.querySelector("#point-line-3").style.display = 'none';
    document.querySelector("#point-line-4").style.display = 'none';

    document.querySelector("#content-5").style.display = 'block';
    document.querySelector("#number-5").style.display = 'block';
    document.querySelector("#point-line-5").style.display = 'block';
    document.getElementById("dropdown").innerHTML = '2022';
  }
}

// Navbar
let navCollapse = false
if(screen.width <= 1023) {
  document.querySelector("#navbar").classList.add("hidden");
}
// handle screen onresize
window.onresize=function()
{
    if(window.innerWidth <= 1023) {
      document.querySelector("#navbar").classList.add("hidden");
    }
    else {
      document.querySelector("#navbar").classList.remove("hidden");
    }
}
function toggle() {
  if(!navCollapse) {
    navCollapse = true
    document.querySelector("#navbar").classList.remove("hidden");
  }
  else {
    navCollapse = false
    document.querySelector("#navbar").classList.add("hidden");
  }
}