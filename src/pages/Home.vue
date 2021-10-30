<template>
    <b-container>
        <b-row>
            <hotel-card v-for="hotel in hotels" :key="hotel.title" :hotel="hotel" />
        </b-row>
    </b-container>
</template>

<script>
    import HotelCard from '../components/HotelCard.vue'
    const json = require("../data/db.json");
    export default {
        data() {
            return {
                hotels: json.hotels
            }
        },
        components: {
            HotelCard
        }
    }
</script>

<style>
    .container {
        margin-top: 40px;
        margin-bottom: 40px;
    }
</style>