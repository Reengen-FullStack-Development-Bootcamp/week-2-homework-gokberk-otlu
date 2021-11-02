<template>
    <div class="header-component">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand @click="goToHomePage">Hotel App</b-navbar-brand>
        </b-navbar>
    </div>
</template>

<script>
export default {
    methods: {
        goToHomePage() {
            this.$router.push({path : '/'}).catch(error => {
                if (error.name != "NavigationDuplicated") {
                    throw error;
                }
            });
        }
    }
}
</script>

<style>
    .header-component {
        position: sticky;
        top: 0;
        z-index: 1;
    }

    .navbar-brand {
        cursor: pointer;
    }
</style>