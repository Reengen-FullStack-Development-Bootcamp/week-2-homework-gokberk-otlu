<template>
    <b-container>
        <b-tabs content-class="mt-3">
            <b-tab v-for="(key, index) in Object.keys($route.query)"
            :key="key"
            :title="key.split('-').join(' ')"
            :active="index === 0">
                <p v-for="i in parseInt($route.query[key])" :key="i">
                    <reservation-form :ref="`${key}-${i}`"
                    @formUpdate="checkValidState"
                    @goNextInvalidForm="goNextInvalidForm" />
                </p>
            </b-tab>
        </b-tabs>
        <b-button @click="checkForms" :disabled="validState" class="mt-3 mr-2" type="submit" variant="info">CHECK</b-button>
        <b-button @click="submitForms" :disabled="!validState" class="mt-3" type="submit" variant="success">GO TO PAYMENT</b-button>
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
        checkForms() {
            const refValues = Object.values(this.$refs);

            refValues.forEach(formItem => {
                formItem[0].$v.form.$touch();
            });
        },
        checkValidState() {
            const refValues = Object.values(this.$refs);

            let output = true;

            refValues.forEach(formItem => {
                output = output && !formItem[0].$v.$invalid;
            });

            this.validState = output;
        },
        submitForms() {
            if(this.validState) {
                this.$router.push({ name: 'Payment', params: { price: this.$route.params.price } });
            }
        },
        goNextInvalidForm() {
            const refValues = Object.values(this.$refs);
            refValues.forEach(formItem => {
                if(formItem[0].$v.$invalid) {
                    formItem[0].$refs['firstName'].focus();
                }
            });
        }
    }
}
</script>