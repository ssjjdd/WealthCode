/**
 * 使用步骤
 * 1.打开url:https://view.lottery.sina.com.cn/lotto/pc_zst/index?lottoType=p3&actionType=chzs&type=50&dpc=1
 * 2.打开控制台，也就是F12
 * 3.点击Console
 * 4.复制一下代码
 * 5.输出27个财富密码
 */
const nodeList = document.querySelector('#now_gross').querySelector('tr').querySelectorAll('td')
const nodeArr = Array.from(nodeList)
const arr100 = []
const arr10 = []
const arr1 = []

let br01 = 0
let n = 0
nodeArr.forEach(node => {
  if (node.className === 'br01') {
    br01++
    n = 0
  } else {
    if (br01 === 1) {
      arr100.push({
        n,
        value: parseInt(node.innerText)
      })
    }
    if (br01 === 2) {
      if (arr10.length >= 10 && arr1.length <= 10) {
        if (node.innerText) {
          arr1.push({
            n: n - 10,
            value: parseInt(node.innerText)
          })
        }

      } else {
        arr10.push({
          n,
          value: parseInt(node.innerText)
        })
      }
    }
    n++
  }
})
// console.log('arr100', arr100)
// console.log('arr10', arr10)
// console.log('arr1', arr1)
const splitIndex = 3
const result100 = arr100.sort((a, b) => a.value - b.value).slice(0, splitIndex).map(r => r.n)
const result10 = arr10.sort((a, b) => a.value - b.value).slice(0, splitIndex).map(r => r.n)
const result1 = arr1.sort((a, b) => a.value - b.value).slice(0, splitIndex).map(r => r.n)
// console.log('result100', result100)
// console.log('result10', result10)
// console.log('result1', result1)
const result = []
result100.forEach(r100 => {
  result10.forEach(r10 => {
    result1.forEach(r1 => {
      const r = String(r100) + String(r10) + String(r1)
      console.log(r)
      result.push(r)
    })
  })
})
console.log(result)
