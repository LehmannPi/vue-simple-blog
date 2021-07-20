<template>
    <header>
        <h1>The Dojo</h1>
        <!-- Fazer transição de telas com swipe de Firebase -->
        <nav>
            <router-link :to="{ name: 'Home' }">Home</router-link>
            <router-link :to="{ name: 'Create' }">Create post</router-link>
        </nav>
    </header>
</template>

<script>
export default {};
</script>

<style>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
}
header h1 {
    color: #71231B;
    font-size: 48px;
}
header a {
    color: #71231B;
    text-decoration: none;
    margin-left: 20px;
}
header a.router-link-active {
    color: #71231B;
    font-weight: bold;
}
</style>