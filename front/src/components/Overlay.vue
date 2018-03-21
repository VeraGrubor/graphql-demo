<template>
<div class="overlay overlay-boxes" v-bind:class="{'open': show}" ref="overlay">
			<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="101%" viewBox="0 0 1440 806" preserveAspectRatio="none" :class="category">
        <linearGradient id="lifestyle" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="99%" style="stop-color:rgba(250, 208, 196, 0.95);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgba(250, 208, 196, 0.4);stop-opacity:1" />
        </linearGradient>
        <linearGradient id="nature" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="99%" style="stop-color:rgba(171, 236, 214, 0.95);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgba(251, 237, 150, 0.4);stop-opacity:1" />
        </linearGradient>
        <linearGradient id="tech" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="99%" style="stop-color:rgba(32, 156, 255, 0.95);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgba(104, 224, 207, 0.4);stop-opacity:1" />
        </linearGradient>
        <linearGradient id="arhitecture" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="100%" style="stop-color:rgba(161, 140, 209, 0.95);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgba(251, 194, 235, 0.4);stop-opacity:0" />
        </linearGradient>
				<path d="m0.005959,200.364029l207.551124,0l0,204.342453l-207.551124,0l0,-204.342453z"/>
				<path ref="box" d="m0.005959,400.45401l207.551124,0l0,204.342499l-207.551124,0l0,-204.342499z"/>
				<path ref="box" d="m0.005959,600.544067l207.551124,0l0,204.342468l-207.551124,0l0,-204.342468z"/>
				<path ref="box" d="m205.752151,-0.36l207.551163,0l0,204.342437l-207.551163,0l0,-204.342437z"/>
				<path ref="box" d="m204.744629,200.364029l207.551147,0l0,204.342453l-207.551147,0l0,-204.342453z"/>
				<path ref="box" d="m204.744629,400.45401l207.551147,0l0,204.342499l-207.551147,0l0,-204.342499z"/>
				<path ref="box" d="m204.744629,600.544067l207.551147,0l0,204.342468l-207.551147,0l0,-204.342468z"/>
				<path ref="box" d="m410.416046,-0.36l207.551117,0l0,204.342437l-207.551117,0l0,-204.342437z"/>
				<path ref="box" d="m410.416046,200.364029l207.551117,0l0,204.342453l-207.551117,0l0,-204.342453z"/>
				<path ref="box" d="m410.416046,400.45401l207.551117,0l0,204.342499l-207.551117,0l0,-204.342499z"/>
				<path ref="box" d="m410.416046,600.544067l207.551117,0l0,204.342468l-207.551117,0l0,-204.342468z"/>
				<path ref="box" d="m616.087402,-0.36l207.551086,0l0,204.342437l-207.551086,0l0,-204.342437z"/>
				<path ref="box" d="m616.087402,200.364029l207.551086,0l0,204.342453l-207.551086,0l0,-204.342453z"/>
				<path ref="box" d="m616.087402,400.45401l207.551086,0l0,204.342499l-207.551086,0l0,-204.342499z"/>
				<path ref="box" d="m616.087402,600.544067l207.551086,0l0,204.342468l-207.551086,0l0,-204.342468z"/>
				<path ref="box" d="m821.748718,-0.36l207.550964,0l0,204.342437l-207.550964,0l0,-204.342437z"/>
				<path ref="box" d="m821.748718,200.364029l207.550964,0l0,204.342453l-207.550964,0l0,-204.342453z"/>
				<path ref="box" d="m821.748718,400.45401l207.550964,0l0,204.342499l-207.550964,0l0,-204.342499z"/>
				<path ref="box" d="m821.748718,600.544067l207.550964,0l0,204.342468l-207.550964,0l0,-204.342468z"/>
				<path ref="box" d="m1027.203979,-0.36l207.550903,0l0,204.342437l-207.550903,0l0,-204.342437z"/>
				<path ref="box" d="m1027.203979,200.364029l207.550903,0l0,204.342453l-207.550903,0l0,-204.342453z"/>
				<path ref="box" d="m1027.203979,400.45401l207.550903,0l0,204.342499l-207.550903,0l0,-204.342499z"/>
				<path ref="box" d="m1027.203979,600.544067l207.550903,0l0,204.342468l-207.550903,0l0,-204.342468z"/>
				<path ref="box" d="m1232.659302,-0.36l207.551147,0l0,204.342437l-207.551147,0l0,-204.342437z"/>
				<path ref="box" d="m1232.659302,200.364029l207.551147,0l0,204.342453l-207.551147,0l0,-204.342453z"/>
				<path ref="box" d="m1232.659302,400.45401l207.551147,0l0,204.342499l-207.551147,0l0,-204.342499z"/>
				<path ref="box" d="m1232.659302,600.544067l207.551147,0l0,204.342468l-207.551147,0l0,-204.342468z"/>
				<path ref="box" d="m-0.791443,-0.360001l207.551163,0l0,204.342438l-207.551163,0l0,-204.342438z"/>
			</svg>
			<div class="overlay-close z-50 font-bold text-uppercase text-black" @click="closeOverlay"></div>

      <div class="relative py-md max-w-xl w-3/4 mx-auto">
        <h1 class="text-4xl md:text-3xl mb-4 font-bold title" v-if="active">{{this.title}}</h1>
        <div class="text-xl md:text-lg font-light block body" v-html="this.body" v-if="active">
        </div>
      </div>
		</div>
</template>

<script>
export default {
  name: 'overlay',
  props: ['show', 'category'],
  data() {
    return {
      active: undefined,
      overlay: null,
      paths: null,
      pathsTotal: null,
      title: null,
      body: null
    }
  },
  methods: {
    test: function(title, body, category) {
      var cnt = 0
      this.shuffle(this.paths)
      this.title = title
      this.body = body

      if (this.active === true) {
        // go through all paths
        this.paths.forEach(function(p, i) {
          setTimeout(function() {
            ++cnt
            p.style.display = 'none'
            if (cnt === this.pathsTotal) {
              this.active = false
            }
          }, i * 30)
        })
        this.active = false
      } else if (this.active === false) {
        console.warn('closing')
        this.active = true
        this.paths.forEach(function(p, i) {
          setTimeout(function() {
            p.style.display = 'block'
          }, i * 30)
        })
      }
    },
    shuffle: function(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex,
        temp = array

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        temp[currentIndex] = temp[randomIndex]
        temp[randomIndex] = temporaryValue
      }
      this.paths = temp
    },
    closeOverlay: function() {
      this.test()
      this.$parent.$emit('childOverlay')
    }
  },
  created() {
    // get refs
    this.$parent.$on('overlay', this.test)
    // handle esc
    document.onkeydown = evt => {
      evt = evt || window.event
      if (evt.keyCode == 27) {
        if (this.active) {
          this.closeOverlay()
        }
      }
    }
  },
  mounted() {
    // set refs
    this.overlay = this.$refs.overlay
    this.paths = [].slice.call(document.querySelectorAll('svg > path'))
    this.pathsTotal = this.paths.length
    this.active = false
  }
}
</script>

<style lang="scss" scoped>
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(153, 204, 51, 0.9);
  z-index: 25;

  .title,
  .body {
    animation: fadeInDown 0.4s 1;
    animation-fill-mode: both;
  }
  .title {
    animation-delay: 0.6s;
  }
  .body {
    animation-delay: 0.7s;
  }
}

/* Overlay closing cross */
.overlay .overlay-close {
  width: 40px;
  height: 40px;
  position: absolute;
  right: 20px;
  top: 20px;
  overflow: hidden;
  border: none;
  z-index: 100;
}

/* Effects */
.overlay-boxes {
  background: transparent;
  visibility: hidden;
  -webkit-transition: visibility 0s 0.8s;
  transition: visibility 0s 0.8s;
  pointer-events: none;

  svg {
    position: absolute;
    top: 0;
    left: 0;

    path {
      display: none;
    }

    &.lifestyle {
      path {
        fill: url('#lifestyle');
      }
    } //lifestyle
    &.nature {
      path {
        fill: url('#nature');
      }
    } //nature
    &.tech {
      path {
        fill: url('#tech');
      }
    } //tech
    &.arhitecture {
      path {
        fill: url('#arhitecture');
      }
    } //arhitecture
  }
}

.overlay-boxes.open {
  visibility: visible;
  -webkit-transition: none;
  transition: none;
  pointer-events: all;
}

.overlay-boxes nav,
.overlay-boxes .overlay-close {
  opacity: 0;
  -webkit-transition: opacity 0.5s 0.8s;
  transition: opacity 0.5s 0.8s;
}

.overlay-boxes.open nav,
.overlay-boxes.open .overlay-close {
  opacity: 1;
  -webkit-transition-delay: 0.8s;
  transition-delay: 0.8s;
  color: white;
}

.overlay-boxes.close nav,
.overlay-boxes.close .overlay-close {
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}

@media screen and (max-height: 30.5em) {
  .overlay nav {
    height: 70%;
    font-size: 34px;
  }
  .overlay ul li {
    min-height: 34px;
  }
}

.slide-fade-bottom-enter-active {
  transition: all 0.4s ease;
  transform: translateY(0);
  opacity: 0;
}
.slide-fade-bottom-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-bottom-enter,
.slide-fade-bottom--leave-to {
  transform: translateY(15px);
  opacity: 0;
}

.slide-fade-top-enter-active {
  transition: all 0.4s ease;
  transform: translateY(0);
}
.slide-fade-top-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-top-enter,
.slide-fade-top--leave-to {
  transform: translateY(-15px);
  opacity: 0;
}
</style>
