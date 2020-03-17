<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8">
        <!-- {{totalResults}} -->
        <!-- <h1 class="display-1 font-weight-bold text-center mb-3">Popular articles in Russia</h1> -->
        <v-text-field 
          prepend-inner-icon="mdi-magnify" 
          autofocus
          :color="dark ? 'grey lighten-4' : 'grey darken-3'"
          clearable
          @click:clear="q=''"
          placeholder="Поиск..."
          v-model="q"
          @input="getArticles({q})"
          hide-details
          filled
          flat
          :loading="loading"
          class="mb-4"
        />
        <div 
          v-if="loading"
          class="d-flex justify-center"
        >
          <v-progress-circular indeterminate/>
        </div>
        <template v-else>
          <div 
            v-for="(article, index) in articles" 
            :key="index"
            class="d-flex flex-column justify-center elevation-5 pa-3 mb-9"
            :class="dark ? 'grey darken-4' : 'white'"
          >
            <div class="pa-6">
              <a :href="article.url" class="display-1	font-weight-bold" :class="dark ? 'grey--text text--lighten-4' : 'grey--text text--darken-4'" target="_blank">
                {{article.title}}
              </a>
              <div class="pt-1 caption">
                {{article.publishedAt}}
              </div>
              <v-img class="mt-2" :src="article.urlToImage"/>
            </div>
            <p class="px-6">
              {{article.description}}
            </p>
          </div>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
// new Date(temp1[0].publishedAt).toLocaleString()
import Vue from 'vue'
import {ref, computed, onMounted, defineComponent, watch} from '@vue/composition-api'

export default defineComponent({
  setup(props, {root}) {
    const articles = ref([]),
          dark = ref(false),
          q = ref(''),
          loading = ref(false),
          totalResults = ref(0)

    async function getArticles({q = '', country = 'us', pageSize = '5', apiKey='fda8939a86a3462ea943a82e28b91f18'}){
      loading.value = true

      const qp = {q, country, pageSize, apiKey},
            url = new URL('http://newsapi.org/v2/top-headlines')

      Object.keys(qp).forEach(key => {if((qp as any)[key]) url.searchParams.append(key, (qp as any)[key])})

      const data = await fetch(url.href),
            body = await data.json()

      articles.value = body.articles.map((item: any) => {
        const itemCopy = {...item}
        itemCopy.publishedAt = new Date(itemCopy.publishedAt).toLocaleString()
        return itemCopy
      })

      totalResults.value = body.totalResults
      loading.value = false
    }

    onMounted(() => getArticles({}))

    watch(() => {
      dark.value = root.$vuetify.theme.dark
    })
    

    return {
      articles,
      dark,
      q,
      loading,
      getArticles,
      totalResults
    }
  }
})
</script>