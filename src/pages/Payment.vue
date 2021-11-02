<template>
    <div>
        <i v-if="isPending" class="fas fa-circle-notch fa-spin fa-3x"></i>
        <div v-else class="payment-window">
            <i class="far fa-list-alt fa-3x mb-2"></i>
            <p class="mb-3"><b>Total Price: </b>$ {{ $route.params.price }}</p>
            <b-button @click="navigateToHome" variant="outline-light">Make the Payment</b-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isPending: true
        }
    },
    created() {
        setTimeout(() => {
            this.isPending = false;
        }, 3000);
    },
    methods: {
        navigateToHome() {
            this.$router.push({ name: 'Home' });
        }
    }
}
</script>

<style scoped>
    .payment-window {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgb(0, 0, 0, .7);
        color: #fff;
        width: 40%;
        min-width: 300px;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
    }

    .fa-spin {
        position: absolute;
        top: 50%;
        left: 50%;
    }
</style>