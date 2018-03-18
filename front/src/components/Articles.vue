<template>
  <div class="w-100 block relative mt-8">
      <h1 v-if="!articles.length">There is currently no articles available.</h1>
      <div class="articles" v-if="articles">
        <div class="article article--first rounded-lg overflow-hidden shadow-md relative" v-if="firstPost">
          <progressive-img class="w-full"
                           v-if="firstImage"
                           :src="'https://picsum.photos/1024/768?image=' + firstImage"
                           :placeholder="'https://picsum.photos/5/5?image=' + firstImage"
                           alt="firstPost.title"/>
          <div :class="'article__content absolute pin-x pin-y w-full h-full z-10 text-white content--' + firstPost.category.name | lowercase">
            <div class="category uppercase opacity-75">
              {{firstPost.category.name}}
            </div>
            <div class="title font-bold">{{firstPost.title}}</div>
            <div class="author"></div>
          </div>
        </div><!-- first one -->

        <div class="article article--between" v-if="middlePosts">
          <div v-for="(article,index) in middlePosts" :key="article.id" class="rounded-lg overflow-hidden shadow-md relative">
            <progressive-img class="w-full"
                             :src="'https://picsum.photos/1024/768?image=' + (middleImage + index)"
                             :placeholder="'https://picsum.photos/5/5?image=' + (middleImage + index)"
                             alt="article.title"/>
            <div :class="'article__content absolute pin-x pin-y w-full h-full z-10 text-white content--' + article.category.name | lowercase">
            <div class="category uppercase opacity-75">
              {{article.category.name}}
            </div>
            <div class="title font-bold">{{article.title}}</div>
            <div class="author"></div>
          </div>
          </div>
        </div><!-- between -->

        <div class="article article--last rounded-lg overflow-hidden shadow-md relative" v-if="lastPost">
          <progressive-img class="w-full"
                           v-if="lastImage"
                           :src="'https://picsum.photos/1024/768?image=' + lastImage"
                           :placeholder="'https://picsum.photos/5/5?image=' + lastImage"
                           alt="lastPost.title"/>
          <div :class="'article__content absolute pin-x pin-y w-full h-full z-10 text-white content--' +  firstPost.category.name | lowercase">
            <div class="category uppercase opacity-75">
              {{lastPost.category.name}}
            </div>
            <div class="title font-bold">{{lastPost.title}}</div>
            <div class="author"></div>
          </div>
        </div><!-- last one -->
      </div>
  </div>
</template>

<script>
export default {
  name: 'articles',
  props: ['articles'],
  data() {
    return {}
  },
  methods: {
    getRandomNumber(min = 100, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
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
      return this.getRandomNumber(100, 150)
    },
    lastImage: function() {
      return this.getRandomNumber(200, 290)
    },
    middleImage: function() {
      return this.getRandomNumber(411, 900)
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

    &--first {
      grid-area: fi;
    } // first article

    &--between {
      grid-area: bt;
      display: grid;
      grid-gap: 15px;
      grid-template-rows: 2fr 2fr;
      grid-auto-flow: column;
    } // articles in middle

    &--last {
      grid-area: la;
    } // last article
  } // article
} // articles

.progressive-image {
  height: 100%;
}
.progressive-image-main {
  height: 100% !important;
}
</style>
