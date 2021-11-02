<template>
    <div>
        <p>ReservationForms</p>
        <b-tabs content-class="mt-3">
            <b-tab v-for="key in Object.keys($route.query)" :key="key" title="First" active>
                <p v-for="i in parseInt($route.query[key])" :key="i">I'm the first tab</p>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
export default {
    created() {
        console.log(this.$route.query);
    }
}
</script>