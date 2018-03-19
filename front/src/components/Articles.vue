<template>
  <div class="w-100 block relative mt-8">
      <loading :show="!articles.length" title="There are currently no articles available."></loading>
      <div class="articles" v-if="articles.length">
        <transition name="slide-fade-left" appear>
          <div class="article article--first rounded-lg overflow-hidden shadow-md relative" v-if="tran && firstPost">
            <progressive-img class="w-full"
                            v-if="firstImage"
                            :src="getPostImage(firstPost, firstImage)"
                            placeholder="/dist/img/blur.jpeg"
                            alt="firstPost.title"/>
            <div :class="'article__content flex items-start justify-start p-8 flex items-start justify-start pt-md pl-8 flex-col absolute pin-x pin-y w-full h-full z-10 text-white content--' + firstPost.category.name | lowercase">
              <div class="category uppercase opacity-75 text-lg">
                {{firstPost.category.name}}
              </div>
              <div class="title font-bold text-3xl max-w-xs">{{firstPost.title}}</div>
              <div class="author bg-white hover:bg-grey-lightest text-grey-darkest font-semibold py-2 px-4 rounded opacity-75 text-xs">{{firstPost.author.name}}</div>
            </div>
          </div><!-- first one -->
        </transition>

        <transition name="slide-fade-top" appear>
          <div class="article article--between" v-if="tran && middlePosts">
            <div v-for="(article,index) in middlePosts" :key="article.id" class="rounded-lg overflow-hidden shadow-md relative">
              <progressive-img class="w-full"
                              :src="getPostImage(article,middleImage,index)"
                              src-placeholder="/dist/img/blur.jpeg"
                              alt="article.title"/>
              <div :class="'article__content absolute p-8 flex flex-col items-start justify-start pin-x pin-y w-full h-full z-10 text-white content--' + article.category.name | lowercase">
              <div class="category uppercase opacity-75 text-lg">
                {{article.category.name}}
              </div>
              <div class="title font-bold text-3xl max-w-xs">{{article.title}}</div>
              <div class="author bg-white hover:bg-grey-lightest text-grey-darkest font-semibold py-2 px-4 rounded opacity-75 text-xs">{{article.author.name}}</div>
            </div>
            </div>
          </div><!-- between -->
          </transition>

        <transition name="slide-fade-bottom" appear>
          <div class="article article--last rounded-lg overflow-hidden shadow-md relative" v-if="tran && lastPost">
            <progressive-img class="w-full"
                            v-if="lastImage"
                            :src="getPostImage(lastPost,lastImage)"
                            src-placeholder="/dist/img/blur.jpeg"
                            alt="lastPost.title"/>
            <div :class="'article__content flex flex-col items-start justify-start p-8 absolute pin-x pin-y w-full h-full z-10 text-white content--' +  firstPost.category.name | lowercase">
              <div class="category uppercase opacity-75 text-lg">
                {{lastPost.category.name}}
              </div>
              <div class="title font-bold text-3xl max-w-xs">{{lastPost.title}}</div>
              <div class="author bg-white hover:bg-grey-lightest text-grey-darkest font-semibold py-2 px-4 rounded opacity-75 text-xs">{{lastPost.author.name}}</div>
            </div>
          </div><!-- last one -->
        </transition>
      </div>
  </div>
</template>

<script>
import Loading from './Loading'

export default {
  name: 'articles',
  props: ['articles', 'tran'],
  components: {
    Loading: Loading
  },
  data() {
    return {}
  },
  methods: {
    getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    getPostImage(post, image, index = null) {
      let category = post.category.name.toLowerCase().trim()
      if (index) {
        return 'dist/static/img/' + category + '/' + (image + index) + '.jpg'
      } else {
        return 'dist/static/img/' + category + '/' + image + '.jpg'
      }
    }
  },
  /*watch: {
    active: function(newVal, oldVal) {
      console.log('Prop changed: ', newVal, ' | was: ', oldVal)
    }
  },*/
  computed: {
    firstPost: function() {
      return this.articles[0]
    },
    lastPost: function() {
      return this.articles.length > 1 ? this.articles[this.articles.length - 1] : null
    },
    middlePosts: function() {
      return this.articles.length > 1 ? this.articles.slice(0, this.articles.length) : null
    },
    firstImage: function() {
      return this.getRandomNumber(0, 10)
    },
    lastImage: function() {
      return this.getRandomNumber(0, 10)
    },
    middleImage: function() {
      return this.getRandomNumber(0, 10)
    }
  },
  filters: {
    lowercase(value) {
      return value.toLowerCase().trim()
    }
  }
}
</script>

<style lang="less">
.articles {
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    'fi fi fi fi bt bt bt bt'
    'fi fi fi fi bt bt bt bt'
    'fi fi fi fi la la la la'
    'fi fi fi fi la la la la';
  grid-auto-rows: 150px;

  .article {
    &__content {
      // gradients
      &.content--lifestyle {
        background-image: linear-gradient(
          45deg,
          rgba(255, 154, 158, 0.3) 0%,
          rgba(250, 208, 196, 0.3) 99%,
          rgba(250, 208, 196, 0.3) 100%
        );
      } // lifestyle
      &.content--nature {
        background-image: linear-gradient(
          60deg,
          rgba(171, 236, 214, 0.3) 0%,
          rgba(251, 237, 150, 0.3) 100%
        );
      } // nature
      &.content--tech {
        background-image: linear-gradient(
          to top,
          rgba(32, 156, 255, 0.3) 0%,
          rgba(104, 224, 207, 0.3) 100%
        );
      } // tech
      &.content--arhitecture {
        background-image: linear-gradient(
          to top,
          rgba(161, 140, 209, 0.3) 0%,
          rgba(251, 194, 235, 0.3) 100%
        );
      } // arhitecture
    } // article content

    .title {
      letter-spacing: 1px;
    } // content title

    .author {
      margin-top: auto;
    } // author

    &--first {
      grid-area: fi;
    } // first article

    &--between {
      grid-area: bt;
      display: grid;
      grid-gap: 15px;
      grid-template-rows: 2fr 2fr;
      grid-auto-flow: column;

      .title {
        font-size: 1rem;
      }

      .category {
        font-size: 0.8rem;
      }
    } // articles in middle

    &--last {
      grid-area: la;
    } // last article
  } // article
} // articles

.slide-fade-left-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-left-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-left-enter,
.slide-fade-left-leave-to {
  transform: translateX(15px);
  opacity: 0;
}

.slide-fade-right-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-right-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-right-enter,
.slide-fade-right-leave-to {
  transform: translateX(-15px);
  opacity: 0;
}

.slide-fade-bottom-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-bottom-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-bottom-enter,
.slide-fade-bottom--leave-to {
  transform: translateY(15px);
  opacity: 0;
}

.slide-fade-top-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-top-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-top-enter,
.slide-fade-top--leave-to {
  transform: translateY(-15px);
  opacity: 0;
}

.article--first {
  .progressive-image {
    height: 100%;
  }
  .progressive-image-main {
    object-fit: cover;
    height: 100%;
  }
}
</style>
