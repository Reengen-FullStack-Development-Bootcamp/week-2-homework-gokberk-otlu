<template>
    <b-container>
        <b-row class="mb-5">
            <div class="hotel-detail-name hotel-detail mr-5">
                <span>{{ selectedHotel.title }}</span>
            </div>
            <div class="hotel-detail-location hotel-detail">
                <i class="fas fa-map-marker-alt mr-2"></i>
                <span>{{ selectedHotel.location }}</span>
            </div>
        </b-row>
        <b-row>
            <b-col>
                <Carousel :carouselImages="selectedHotel.carousel" />
            </b-col>
            <b-col>
                <h4>Total Price: {{ calculateTotalPrice }}</h4>
                <p>price : {{ selectedHotel.price }}</p>
                <hr>
                <div>
                    <h5>Available Room Number : {{ selectedHotel.availableRoomNumber }}</h5>
                    <h6>Selected Room Number : {{ roomNumber }}</h6>
                    <div @click="decreaseRoomNumber" class="btn btn-success mr-2">Decrease Room Number</div>
                    <div @click="increaseRoomNumber" class="btn btn-success">Increase Room Number</div>
                </div>
                <hr>
                <b-tabs content-class="mt-3">
                    <b-tab v-for="roomIndex in roomNumber" :key="roomIndex" :title="`Room ${roomIndex}`" :active="roomIndex === roomNumber">
                        <ReservationDate
                        @updateCheckIn="reservationList[`room_${roomIndex}`].checkIn = $event; 
                        reservationList = Object.assign({}, reservationList);"
                        @updateCheckOut="reservationList[`room_${roomIndex}`].checkOut = $event;
                        reservationList = Object.assign({}, reservationList);" />
                        <div class="btn btn-primary" @click="decreaseAdultGuestNumber(roomIndex)">Adult -</div>
                        <div class="btn btn-primary" @click="increaseAdultGuestNumber(roomIndex)">Adult +</div>
                        <br><br>
                        <div class="btn btn-primary" @click="decreaseChildGuestNumber(roomIndex)">Child -</div>
                        <div class="btn btn-primary" @click="increaseChildGuestNumber(roomIndex)">Child +</div>
                        <br><br>
                        <div>adult: {{ reservationList[`room_${roomIndex}`].adult }}</div>
                        <div>child: {{ reservationList[`room_${roomIndex}`].child }}</div>
                    </b-tab>
                </b-tabs>
                <div @click="reserve" class="btn btn-warning">RESERVE</div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import ReservationDate from '../components/ReservationDate.vue'
    import Carousel from '../components/Carousel.vue'

    const json = require("../data/db.json");

    export default {
        components: {
            ReservationDate,
            Carousel
        },
        data() {
            return {
                selectedHotel: json.hotels.filter(hotel => {
                    return hotel.key == this.$route.params.id;
                })[0],
                roomNumber: 1,
                totalPrice: 0,
                reservationList: {
                    "room_1": {
                        adult: 0,
                        child: 0,
                        checkIn: '',
                        checkOut: ''
                    }
                }
            }
        },
        methods: {
            decreaseRoomNumber() {
                if(this.roomNumber > 1) {
                    this.roomNumber -= 1;
                    let reservationListKeys = Object.keys(this.reservationList);
                    let lastRoomKey = reservationListKeys[reservationListKeys.length - 1];
                    delete this.reservationList[lastRoomKey];
                    this.reservationList = Object.assign({}, this.reservationList);
                }
            },
            increaseRoomNumber() {
                let addedRoom = {
                    adult: 0,
                    child: 0,
                    checkIn: '',
                    checkOut: ''
                }
                if(this.roomNumber < this.selectedHotel.availableRoomNumber) {
                    this.reservationList[`room_${this.roomNumber + 1}`] = addedRoom;
                    this.roomNumber += 1;
                }
            },
            decreaseAdultGuestNumber(roomIndex) {
                let specifiedRoom = this.reservationList[`room_${roomIndex}`];
                if(specifiedRoom.child + specifiedRoom.adult > 0 && specifiedRoom.adult > 0) {
                    specifiedRoom.adult -= 1;
                    this.reservationList = Object.assign({}, this.reservationList);
                }
            },
            increaseAdultGuestNumber(roomIndex) {
                let specifiedRoom = this.reservationList[`room_${roomIndex}`];
                if(this.selectedHotel.maxGuestLimit > specifiedRoom.child + specifiedRoom.adult) {
                    specifiedRoom.adult += 1;
                    this.reservationList = Object.assign({}, this.reservationList);
                }
            },
            decreaseChildGuestNumber(roomIndex) {
                let specifiedRoom = this.reservationList[`room_${roomIndex}`];
                if(specifiedRoom.child + specifiedRoom.adult > 0 && specifiedRoom.child > 0) {
                    specifiedRoom.child -= 1;
                    this.reservationList = Object.assign({}, this.reservationList);
                }
            },
            increaseChildGuestNumber(roomIndex) {
                let specifiedRoom = this.reservationList[`room_${roomIndex}`];
                if(this.selectedHotel.maxGuestLimit > specifiedRoom.child + specifiedRoom.adult) {
                    specifiedRoom.child += 1;
                    this.reservationList = Object.assign({}, this.reservationList);
                }
            },
            dateComparator(room) {
                // Check the check-in/checkout days difference
                var checkInDate = new Date(room.checkIn);
                var checkOutDate = new Date(room.checkOut);
                var diffDays = checkOutDate.getDate() - checkInDate.getDate();

                if(isNaN(diffDays)) {
                        diffDays = 0;
                } else if(diffDays < 0) {
                    diffDays = 0;
                    this.callToaster("Exit date cannot be entered retrospectively!");
                } else if(diffDays === 0) {
                    this.callToaster("The check-out date cannot be the same day as the check-in date!");
                }
                return diffDays;
            },
            reserve() {
                const reservationListValues = Object.values(this.reservationList);
                // filter room selections if they're valid
                let validReservations = reservationListValues
                .filter(value => value.adult + value.child > 0 && this.dateComparator(value) > 0);

                let queryData = {};
                validReservations.forEach((reservation, index) => {
                    queryData[`room-${index + 1}`] = reservation.adult + reservation.child;
                })
                
                // navigate with room and guest number informations
                this.$router.push({ name: 'ReservationForms', query: queryData });
            },
            callToaster(text) {
                this.$bvToast.toast(text, {
                    title: 'Alert',
                    autoHideDelay: 1000
                })
            }
        },
        computed: {
            calculateTotalPrice() {
                var totalPrice = 0;
                const reservationListKeys = Object.keys(this.reservationList);
                reservationListKeys.forEach(key => {
                    let room = this.reservationList[key];
                    
                    let diffDays = this.dateComparator(room);

                    if(room.adult > 0) {
                        totalPrice += (this.selectedHotel.price + (room.adult - 1) * this.selectedHotel.extraPriceForAdult + room.child * this.selectedHotel.extraPriceForChild) * diffDays;
                    } else {
                        if(room.child > 1) {
                            totalPrice += (this.selectedHotel.price + (room.child - 1) * this.selectedHotel.extraPriceForChild) * diffDays;
                        } else {
                            totalPrice += ((room.child === 0 ? 0 : this.selectedHotel.price) + room.child * this.selectedHotel.extraPriceForChild) * diffDays;
                        }
                    }
                })
                return totalPrice;
            }
        },
        watch: {
            $route(to, ) {
                this.selectedHotel = json.hotels.filter(hotel => {
                    return hotel.key = to.params.key
                })[0]
            }
        },
    }
</script>

<style>
    .hotel-detail-name {
        background-color: red;

    }

    .hotel-detail-location {
        background-color: blue;
    }

    .hotel-detail {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 15px 25px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        border-radius: 7px;
        background-color: gray;
        color: #f1e1e1;
        font-weight: 600;
    }

    .tabs {
        background-color: #fff;
        box-sizing: border-box;
        padding: 10px 15px;
    }
</style>