<template>
    <div class="header-component">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand @click="goToHomePage">NavBar</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item>Link</b-nav-item>
                    <b-nav-item>Disabled</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
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