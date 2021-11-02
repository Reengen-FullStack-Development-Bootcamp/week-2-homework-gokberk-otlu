<template>
    <div>
        <p>ReservationForms</p>
        <b-tabs content-class="mt-3">
            <b-tab v-for="(key, index) in Object.keys($route.query)" :key="key" :title="key" :active="index === 0">
                <p v-for="i in parseInt($route.query[key])" :key="i">
                    <reservation-form />
                </p>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
import ReservationForm from '../components/ReservationForm.vue'
export default {
    components: {
        ReservationForm
    }
}
</script>