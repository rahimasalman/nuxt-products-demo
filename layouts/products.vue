<template>
    <div>
        <header>
            <nav>
                <nuxt-link to="/products">Nuxt App Products</nuxt-link>
            </nav>
        </header>
        <!-- output the page content -->
        <div>
            <slot />
        </div>
        <footer>
            <ul>
                <li><nuxt-link to="/">Home</nuxt-link></li>
                <li><nuxt-link to="/about">About</nuxt-link></li>
                <li><nuxt-link to="/products">Products</nuxt-link></li>
            </ul>
        </footer>
    </div>
</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active {
    color: #12b488;
}
</style>