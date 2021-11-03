<template>
<b-container>
    <div>
        <b-form>
            <b-row>
                <b-col>
                    <!-- FIRSTNAME -->
                    <b-form-group :id="`room-${roomNo}-input-group-${inputGroup}-first-name`" label="First Name" :label-for="`room-${roomNo}-input-${inputGroup}-first-name`">
                        <b-form-input ref="firstName" @input="formUpdate" :id="`room-${roomNo}-input-${inputGroup}-first-name`" :name="`room-${roomNo}-input-${inputGroup}`" v-model.trim="$v.form.firstName.$model"
                            :state="validateState('firstName')" aria-describedby="`input-1-live-feedback`" placeholder="Ex: John"></b-form-input>

                        <b-form-invalid-feedback id="input-1-live-feedback">
                            This is a required field and must be at least 4 characters.
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>
                <b-col>
                    <!-- LASTNAME -->
                    <b-form-group :id="`room-${roomNo}-input-group-${inputGroup}-last-name`" label="Last Name" :label-for="`room-${roomNo}-input-${inputGroup}-last-name`">
                        <b-form-input @input="formUpdate" :id="`room-${roomNo}-input-${inputGroup}-last-name`" :name="`room-${roomNo}-input-${inputGroup}`" v-model.trim="$v.form.lastName.$model"
                            :state="validateState('lastName')" aria-describedby="input-2-live-feedback" placeholder="Ex: Doe"></b-form-input>

                        <b-form-invalid-feedback id="input-2-live-feedback">
                            This is a required field and must be at least 4 characters.
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <!-- EMAIL -->
                    <b-form-group :id="`room-${roomNo}-input-group-${inputGroup}-email`" label="Email" :label-for="`room-${roomNo}-input-${inputGroup}-email`">
                        <b-form-input @input="formUpdate" :id="`room-${roomNo}-input-${inputGroup}-email`" :name="`room-${roomNo}-input-${inputGroup}`" v-model.trim="$v.form.email.$model"
                            :state="validateState('email')" aria-describedby="input-3-live-feedback" placeholder="Ex: example@info.com"></b-form-input>
                        
                        <b-form-invalid-feedback id="input-3-live-feedback">
                            The e-mail must be in the correct format.
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>
                <b-col>
                    <!-- PHONE -->
                    <b-form-group :id="`room-${roomNo}-input-group-${inputGroup}-phone`" label="Phone" :label-for="`room-${roomNo}-input-${inputGroup}-phone`">
                        <b-form-input @input="formUpdate" :id="`room-${roomNo}-input-${inputGroup}-phone`" :name="`room-${roomNo}-input-${inputGroup}`" v-model.trim="$v.form.phoneNumber.$model"
                            :state="validateState('phoneNumber')" aria-describedby="input-4-live-feedback" placeholder="Ex: 05551112233"></b-form-input>
                        <b-form-invalid-feedback id="input-4-live-feedback">
                            The phone number must be in the correct format.
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>
            </b-row>


            <b-row>
                <b-col>
                    <!-- AGE -->
                    <b-form-group :id="`room-${roomNo}-input-group-${inputGroup}-age`" label="Age" :label-for="`room-${roomNo}-input-${inputGroup}-age`">
                        <b-form-input @input="formUpdate" :id="`room-${roomNo}-input-${inputGroup}-age`" :name="`room-${roomNo}-input-${inputGroup}`" v-model.trim.number="$v.form.age.$model"
                            :state="validateState('age')" aria-describedby="input-5-live-feedback" placeholder="Ex: 23"></b-form-input>
                        <b-form-invalid-feedback id="input-5-live-feedback">
                            The age must be number and between 15-100.
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>
                <b-col>
                    <!-- TC ID -->
                    <b-form-group :id="`room-${roomNo}-input-group-${inputGroup}-tc`" label="TC" :label-for="`room-${roomNo}-input-${inputGroup}-tc`">
                        <b-form-input @input="formUpdate" :id="`room-${roomNo}-input-${inputGroup}-tc`" :name="`room-${roomNo}-input-${inputGroup}`" v-model.trim="$v.form.TcId.$model"
                            :state="validateState('TcId')" aria-describedby="input-6-live-feedback" placeholder="Ex: 11111111111"></b-form-input>
                        <b-form-invalid-feedback id="input-6-live-feedback">
                            The TC identity must be in the correct format.
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>
            </b-row>


            <b-row>
                <b-col>
                    <!-- HES CODE -->
                    <b-form-group :id="`room-${roomNo}-input-group-${inputGroup}-hes`" label="Hes Code" :label-for="`room-${roomNo}-input-${inputGroup}-hes`">
                        <b-form-input @input="formUpdate" :id="`room-${roomNo}-input-${inputGroup}-hes`" :name="`room-${roomNo}-input-${inputGroup}`" v-model="$v.form.hesCode.$model"
                            :state="validateState('hesCode')" aria-describedby="input-7-live-feedback" placeholder="Ex: E2A3123456"></b-form-input>
                        <b-form-invalid-feedback id="input-7-live-feedback">
                            The Hes Code identity must be in the correct format.
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>
                <b-col>
                    <!-- GENDER -->
                    <b-form-group :id="`room-${roomNo}-input-group-${inputGroup}-gender`" label="Gender" :label-for="`room-${roomNo}-input-${inputGroup}-gender`">
                        <b-form-select @input="formUpdate" :id="`room-${roomNo}-input-${inputGroup}-gender`" :name="`room-${roomNo}-input-${inputGroup}`" v-model="$v.form.gender.$model"
                            :options="genders" :state="validateState('gender')" aria-describedby="input-8-live-feedback">
                        </b-form-select>

                        <b-form-invalid-feedback id="input-8-live-feedback">
                            This is a required field.
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>
            </b-row>
            <hr>
        </b-form>
    </div>
    </b-container>
</template>

<style>
    body {
        padding: 1rem;
    }
</style>

<script>
    import {
        validation
    } from '../mixins/validation';
    import {
        validationMixin
    } from "vuelidate";

    export default {
        props: ['inputGroup', 'roomNo'],
        data() {
            return {
                form: {
                    firstName: null,
                    lastName: null,
                    email: null,
                    phoneNumber: null,
                    age: null,
                    TcId: null,
                    hesCode: null,
                    gender: null
                },
                genders: [
                    {
                        value: null,
                        text: "Choose..."
                    },
                    {
                        value: "Male",
                        text: "Male"
                    },
                    {
                        value: "Female",
                        text: "Female"
                    },
                    {
                        value: "Other",
                        text: "Other"
                    }
                ]
            };
        },
        methods: {
            formUpdate() {
                this.$emit('formUpdate');
            }
        },
        watch: {
            '$v.$invalid'() {
                // report changes to parent component, when form $invalid state is false
                if(!this.$v.$invalid) {
                    this.$emit("goNextInvalidForm");
                }
            }
        },
        mixins: [validationMixin, validation]
    };
</script>