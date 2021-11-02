<template>
    <div>
        <b-carousel id="carousel" :interval="4000" controls indicators background="#ababab"
            img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;">
            <b-carousel-slide v-for="(image, index) in carouselImages" :img-src="image" :key="index"></b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
    export default {
        props: ["carouselImages"]
    }
</script>

<style>
    .carousel-item {
        position: relative;
        height: 456px;
    }

    .carousel-item img {
        width: 100%;
        height: 100% !important;
    }
</style>