<template>
  <nav>
    <ul
      class="list-none flex flex-row items-center justify-center space-x-8 p-0"
    >
      <li v-for="link in links" :key="link">
        <NuxtLink :to="link.path">
          <div :class="`${link.icon} text-3xl`" />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'Home',
          path: '/',
          icon: 'i-solar-home-2-broken',
        },
        {
          name: 'About',
          path: '/about',
          icon: 'i-solar-sunset-broken'
        },
      ]
    }
  }
}
</script>
