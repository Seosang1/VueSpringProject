<template>
	<header class="wrap_header">
	<nav class="navbar navbar-expand-sm navbar-light bg-light">
		<div class="container-fluid">
            <div 
                v-for="nav in navigations"
                :key="nav.name"
                class="nav-item f">
                <RouterLink
                :to="nav.href"
                active-class="active"   
                class="nav-link">
                {{ nav.name }}  
                </RouterLink> 
            </div>
            
		</div>
	</nav>
    </header>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      navigations: [
        {
          name: 'Home',
          href: '/'
        },
        {
          name: 'Board',
          href: '/boardList'
        },
      ]
    }
  }
}
</script>