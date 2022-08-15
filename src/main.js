import Vue from 'vue'
import App from './App.vue'
import VueSupabase from 'vue-supabase'

Vue.use(VueSupabase, {
  supabaseUrl: 'https://qjinrckfhxpxwvaqwjwt.supabase.co',
  supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqaW5yY2tmaHhweHd2YXF3and0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA1MzI0OTUsImV4cCI6MTk3NjEwODQ5NX0.9gcyc38sZIOX0WYmZdejvMc31zgpgv2EIO0SVw2uHAU',
  supabaseOptions: {}
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
