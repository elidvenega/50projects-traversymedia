// this variable target's number's
const nums = document.querySelectorAll('.nums span')
// this variable is for the div with the number's
const counter = document.querySelector('.counter')
// selects last div to replay animation
const finalMessage = document.querySelector('.final')
// this variable is for the button
const replay = document.querySelector('#replay')

// Why is this function been invoke at the top
// makes sure animation runs
// runs animation automatically
runAnimation()

function resetDOM() {
  // CSS classes been remove using classList property
  counter.classList.remove('hide')
  finalMessage.classList.remove('show')

  // loops through array
  nums.forEach((num) => {
    num.classList.value = ''
  })

  nums[0].classList.add('in')
}

function runAnimation() {
  // loops through array and count backwards
  nums.forEach((num, idx) => {
    const nextToLast = nums.length - 1

  //  try to understand this last part
  // num target' all numbers
  // The animationend event is fired when a CSS Animation has completed
    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        // removes animation
        num.classList.remove('in')
        // add's text
        num.classList.add('out')
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in')
      } else {
        counter.classList.add('hide')
        finalMessage.classList.add('show')
      }
    })
  })
}

replay.addEventListener('click', () => {
  resetDOM()
  runAnimation()
})


