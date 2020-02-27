<template>
  <div class="cryflow" />
</template>

<script>
export default {
  name: 'Cryflow',
  props: {
    chars: {
      type: String,
      default: '!<>-_\\/[]{}—=+*^?#________'
    },
    phrases: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      el: null,
      updatedText: null,
      resolve: null,
      queue: [],
      frameRequest: null,
      frame: null
    }
  },
  methods: {
    setText (newText) {
      const oldText = this.el.innerText
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => {
        this.resolve = resolve
        return this.resolve
      })
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.updateText()
      return promise
    },
    updateText () {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += `<span class="dud">${char}</span>`
        } else {
          output += from
        }
      }
      this.el.innerHTML = output
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.updateText.bind(this))
        this.frame++
      }
    },
    randomChar () {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  },
  mounted () {
    this.el = this.$el
    this.updatedText = this.updateText.bind(this)
    let counter = 0
    const next = () => {
      this.setText(this.phrases[counter]).then(() => {
        setTimeout(next, 800)
      })
      counter = (counter + 1) % this.phrases.length
    }
    next()
  }
}
</script>
