<template>
  <div :class="[{ 'hidden': loading }, 'gallery']">
    <div v-masonry="containerId" class="grid" stagger="0.03s" destroy-delay="0" transition-duration="0.3s"
      item-selector=".grid__item">
      <div v-for="(image, index) in images" :key="index" v-masonry-tile class="grid__item">
        <img :src="image" alt="" class="grid__item-img">
      </div>
    </div>
  </div>
  <p v-show="loading">
    Изображения загружаются...
  </p>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'https://cdn.ascgroup.ru/news_media/13099/ACH02568.jpg',
        'https://cdn.ascgroup.ru/news_media/13099/ACH02578.jpg',
        'https://cdn.ascgroup.ru/news_media/13099/ACH02602.jpg',
        'https://cdn.ascgroup.ru/news_media/13099/ACH02671.jpg',
        'https://cdn.ascgroup.ru/news_media/13099/ACH02674.jpg',
        'https://cdn.ascgroup.ru/news_media/13099/ACH02715.jpg',
        'https://cdn.ascgroup.ru/news_media/13099/ACH02759.jpg',
        'https://cdn.ascgroup.ru/news_media/13099/ACH02838.jpg',
        'https://cdn.ascgroup.ru/news_media/13099/ACH02907.jpg',
        'https://cdn.ascgroup.ru/news_media/13099/ACH02923.jpg',
        'https://cdn.ascgroup.ru/news_media/13099/ACH02948.jpg',
        'https://cdn.ascgroup.ru/news_media/13099/ACH03008.jpg',
        'https://cdn.ascgroup.ru/news_media/13099/ACH03020.jpg',
        'https://cdn.ascgroup.ru/news_media/13099/ACH03048.jpg',
        'https://cdn.ascgroup.ru/news_media/13099/ACH03061.jpg',
        'https://cdn.ascgroup.ru/news_media/13099/ACH03096.jpg',
        'https://cdn.ascgroup.ru/news_media/13099/ACH03170.jpg',
        'https://cdn.ascgroup.ru/news_media/13099/ACH03186.jpg',
        'https://cdn.ascgroup.ru/news_media/13099/ACH03211.jpg',
        'https://cdn.ascgroup.ru/news_media/13099/ACH03271.jpg',
        'https://cdn.ascgroup.ru/news_media/13099/ACH03306.jpg',
        'https://cdn.ascgroup.ru/news_media/13099/ACH03451.jpg',
        'https://cdn.ascgroup.ru/news_media/13099/ACH03471.jpg',
        'https://cdn.ascgroup.ru/news_media/13099/ACH03559.jpg',
        'https://cdn.ascgroup.ru/news_media/13099/ACH03567.jpg',
        'https://cdn.ascgroup.ru/news_media/13099/ACH03579.jpg',
        'https://cdn.ascgroup.ru/news_media/13099/ACH03707.jpg',
        'https://cdn.ascgroup.ru/news_media/13099/ACH03754.jpg',
        'https://cdn.ascgroup.ru/news_media/13099/ACH03777.jpg',
        'https://cdn.ascgroup.ru/news_media/13099/ACH03813.jpg',
        'https://cdn.ascgroup.ru/news_media/13099/ACH03910.jpg',
        'https://cdn.ascgroup.ru/news_media/13099/ACH04011.jpg',
      ],
      loading: false,
    };
  },
  async mounted() {
    this.loading = true;
    window.onload = () => {
      this.loading = false;
    };
  },
}
</script>

<style>
.gallery {
  overflow: hidden;
}

.gallery.hidden {
  height: 1px;
  visibility: hidden;
}

.grid {
  transition-duration: 0s;
  margin-right: -5px;
}

.grid>* {
  width: calc(25% - 5px);
}

.grid__item {
  margin-bottom: 5px;
  margin-right: 5px;
}

.grid__item:nth-child(2) {
  height: 100px;
}

.grid__item:nth-child(3) {
  height: 300px;
}

.grid__item-img {
  display: block;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  width: 100%;
}

@media (max-width: 1250px) {
  .grid>* {
    width: calc(33.3% - 5px);
  }
}

@media (max-width: 768px) {
  .grid>* {
    width: calc(50% - 5px);
  }
}
</style>
