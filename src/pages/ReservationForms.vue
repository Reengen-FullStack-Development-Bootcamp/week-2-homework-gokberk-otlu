<template>
    <b-container>
        <b-tabs content-class="mt-3">
            <b-tab v-for="(key, index) in Object.keys($route.query)"
            :key="key"
            :title="key.split('-').join(' ')"
            :active="index === 0">
                <p v-for="i in parseInt($route.query[key])" :key="i">
                    <reservation-form :ref="`${key}-${i}`" />
                </p>
            </b-tab>
        </b-tabs>
        <b-button @click="submitForms" class="mt-3" type="submit" variant="success">GO TO PAYMENT</b-button>
    </b-container>
</template>

<script>
import ReservationForm from '../components/ReservationForm.vue'
export default {
    data() {
        return {
            validState: false
        }
    },
    components: {
        ReservationForm
    },
    methods: {
        submitForms() {
            const refValues = Object.values(this.$refs);

            let output = true;

            refValues.forEach(formItem => {
                formItem[0].$v.form.$touch();
                output = output & !formItem[0].$v.$anyError;
            });

            this.validState = output;
            console.log(output);
        }
    },
}
</script>