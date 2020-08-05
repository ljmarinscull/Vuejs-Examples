<template>
    <header class="hero">
        <div class="banner">
            <h1 class="banner-title">furniture colletion</h1>
            <button class="banner-btn">shop now</button>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Hero'
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hero {
  min-height: calc(100vh - 60px);
  background: url("/images/hero-bcg.jpeg") center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
.banner {
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  display: inline-block;
  padding: 2rem;
}
.banner-title {
  font-size: 3.4rem;
  text-transform: uppercase;
  letter-spacing: var(--mainSpacing);
  margin-bottom: 3rem;
}
.banner-btn {
  padding: 1rem 3rem;
  text-transform: uppercase;
  letter-spacing: var(--mainSpacing);
  font-size: 1rem;
  background: var(--primaryColor);
  color: var(--mainBlack);
  border: 1px solid var(--primaryColor);
  transition: var(--mainTransition);
  cursor: pointer;
}
.banner-btn:hover {
  background: transparent;
  color: var(--primaryColor);
}
</style>