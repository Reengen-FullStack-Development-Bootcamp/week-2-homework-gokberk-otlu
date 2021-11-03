<template>
  <div>
    <label for="checkin-datepicker">Choose Check-in Date</label>
    <b-form-datepicker id="checkin-datepicker" v-model="checkin" class="mb-2"></b-form-datepicker>
    <label for="checkout-datepicker">Choose Check-out Date</label>
    <b-form-datepicker id="checkout-datepicker" v-model="checkout" class="mb-2"></b-form-datepicker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checkin: '',
        checkout: ''
      }
    },
    watch: {
        checkin() {
          // emit updated checkin date when it's changed inside component
          this.$emit("updateCheckIn", this.checkin);
        },
        checkout() {
          // emit updated checkout date when it's changed inside component
          this.$emit("updateCheckOut", this.checkout);
        }
    }
  }
</script>