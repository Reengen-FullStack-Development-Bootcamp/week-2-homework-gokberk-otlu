<template>
    <b-col class="hotel-card" sm="6" md="4" lg="3" xl="3">
        <div class="inner-hotel-card">
            <div class="hotel-card-img-container">
                <b-img :src="hotel.image" fluid alt="Fluid image"></b-img>
            </div>
            <div>
                <b-form-rating id="rating-inline" readonly no-border
                    style="background-color: transparent; padding: 0; box-shadow: none;" color="rgb(248, 152, 8)" inline v-model="hotel.rating">
                </b-form-rating>
            </div>
            <p class="hotel-card-title">{{ hotel.title }}</p>
            <p class="hotel-card-location">
                <i class="fas fa-map-marker-alt mr-2"></i>
                <span>{{ hotel.location }}</span>
            </p>
            <p class="hotel-card-price">$ {{ hotel.price }}</p>
            <div @click="directToHotelDetail" class="reservation-btn btn btn-primary mt-2">Reservation</div>
        </div>
    </b-col>
</template>

<script>
    export default {
        props: ["hotel"],
        methods: {
            directToHotelDetail() {
                this.$router.push({name: 'HotelDetail', params: { id: this.hotel.key }})
            }
        }
    }
</script>

<style scoped>
    .hotel-card {
        padding: 0 10px;
        margin-bottom: 25px;
    }

    .inner-hotel-card {
        border-radius: 10px;
        overflow: keyden;
        transition: box-shadow .6s;
        padding: 10px;
        background-color: rgb(233, 230, 227);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .hotel-card:hover .inner-hotel-card {
        box-shadow: 4px 2px 8px 2px rgba(92,84,92,1);
    }

    .hotel-card-img-container {
        width: 100%;
        height: 200px;
        border-radius: 10px;
        position: relative;
        overflow: hidden;
    }

    .hotel-card-img-container:hover img {
        transform: scale(1.1);
    }

    .hotel-card-img-container img {
        width: 100%;
        height: 100%;
        transition: transform 1s;
    }

    .hotel-card-title {
        font-weight: 600;
    }

    .hotel-card-price {
        font-size: 1.1rem;
        font-weight: 600;
    }

    .hotel-card-location {
        font-weight: 400;
    }

    .reservation-btn {
        width: 90%;
    }
</style>