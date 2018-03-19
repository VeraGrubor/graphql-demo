import Vue from 'vue'
import ToastInst from './Toast'

document.body.insertAdjacentHTML('beforeend', '<div id="toast"></div>')

const Toast = new Vue(
  Object.assign({}, ToastInst, { // app body
    el: '#toast'
  })
)

module.exports = Toast
