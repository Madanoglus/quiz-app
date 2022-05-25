const mybtyn = document.getElementById('mybtn')
const header = document.getElementsByClassName('header')[0]
const a = document.querySelectorAll('label')[0]
const b = document.querySelectorAll('label')[1]
const c = document.querySelectorAll('label')[2]
const d = document.querySelectorAll('label')[3]
const h1 = document.getElementById('h1')
const nextbtn = document.getElementById('next')
const ul = document.querySelectorAll('ul')

const questions = [
  {
    question: "Mustafa Halil'in yaşı kaç ?",
    a: '26',
    b: '24',
    c: '19',
    d: '18',
    correct: 'd',
  },
  {
    question: 'En çok sevdiğin renk ne ?',
    a: 'kırmızı',
    b: 'yeşil',
    c: 'turuncu',
    d: 'mor',
    correct: 'b',
  },
  {
    question: 'Türkiyenin en kalabalık şehri hangisidir ?',
    a: 'izmir',
    b: 'ankara',
    c: 'istanbul',
    d: 'gaziantep',
    correct: 'c',
  },
  {
    question: 'Aslının yaşı annesinin yaşından büyük müdür?',
    a: 'büyüktür',
    b: 'küçüktür',
    c: 'aynı yaştalardır',
    d: 'hiçbirisi',
    correct: 'b',
  },
  {
    question: 'İzmir denilince akla gelen yiyecek nedir ?',
    a: 'kebap',
    b: 'gevrek',
    c: 'dürüm',
    d: 'iskender',
    correct: 'b',
  },
  {
    question: "2021'in en çok tercih edilen programlama dili hangisidir ?",
    a: 'Java',
    b: 'C#',
    c: 'JavaScript',
    d: 'C++',
    correct: 'c',
  },
]

var show = true
var i = 1
let answer = undefined

function getAnswer() {
  const answersEls = document.querySelectorAll('.answer')
  answersEls.forEach((answerEl) => {
    console.log(answerEl.checked)
  })
  
}

function getfirst() {
  h1.innerHTML = questions[0].question
  a.innerHTML = questions[0].a
  b.innerHTML = questions[0].b
  c.innerHTML = questions[0].c
  d.innerHTML = questions[0].d
}

getfirst()

function get() {
  getAnswer()
  if (i < questions.length) {
    h1.innerHTML = questions[i].question
    a.innerHTML = questions[i].a
    b.innerHTML = questions[i].b
    c.innerHTML = questions[i].c
    d.innerHTML = questions[i].d
    i++
  } else {
    h1.innerHTML = 'testi başarıyla bitirdiniz :)'
    ul[0].style = 'display:none;'
    nextbtn.style = 'display:none;'
    mybtyn.style = 'display:block;'
  }
}

mybtyn.addEventListener('click', function () {
  location.reload()
})
