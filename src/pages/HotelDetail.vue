<template>
    <div>
        <h1>{{ $route.params.id }}</h1>
        <h4>HOTEL DETAIL</h4>
        <b-img :src="selectedHotel.image" width=150 fluid alt="Fluid image"></b-img>
        <p>{{ selectedHotel.key }}</p>
        <p>{{ selectedHotel.title }}</p>
        <p>{{ selectedHotel.location }}</p>
        <p>{{ selectedHotel.rating }}</p>
    </div>
</template>

<script>
const json = require("../data/db.json");
export default {
    data() {
        return {
            selectedHotel : json.hotels.filter(hotel => {
                if(hotel.key === this.$route.params.id) {
                    return true;
                }
                return false;
            })[0]
        }
    },
    watch: {
        // $route(to,) {
        //     this.selectedHotel = json.hotels.filter(hotel => {
        //         return hotel.key = to.params.key
        //     })[0]
        // }
    }
}
</script>