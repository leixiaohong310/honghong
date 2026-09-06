<template>
  <section class="latest-section">
    <div class="section-title">
      <p class="eyebrow">最新更新</p>
      <h2>近期值得先看的文章</h2>
    </div>
    <div class="latest-list">
      <router-link v-for="article in latestArticles" :key="article.key || article.path" :to="article.path">
        <span>{{ formatDate(article) }}</span>
        <strong>{{ article.title }}</strong>
      </router-link>
    </div>
    <router-link class="more-link" to="/archives/">查看全部文章</router-link>
  </section>
</template>

<script>
export default {
  name: 'HomeLatestArticles',
  props: {
    limit: {
      type: Number,
      default: 4
    }
  },
  computed: {
    latestArticles() {
      return this.$sortPostsByDate ? this.$sortPostsByDate.slice(0, this.limit) : []
    }
  },
  methods: {
    formatDate(article) {
      const date = article.frontmatter.date || article.lastUpdated
      return typeof date === 'string' ? date.slice(5, 10) : ''
    }
  }
}
</script>
