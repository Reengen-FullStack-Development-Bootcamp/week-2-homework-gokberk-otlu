<template>
<b-container>
    <div>
        <b-form>
            <b-row>
                <b-col>
                    <!-- FIRSTNAME -->
                    <b-form-group id="example-input-group-1" label="First Name" label-for="example-input-1">
                        <b-form-input ref="firstName" @input="formUpdate" id="example-input-1" name="example-input-1" v-model.trim="$v.form.firstName.$model"
                            :state="validateState('firstName')" aria-describedby="input-1-live-feedback" placeholder="Ex: John"></b-form-input>

                        <b-form-invalid-feedback id="input-1-live-feedback">
                            This is a required field and must be at least 4 characters.
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>
                <b-col>
                    <!-- LASTNAME -->
                    <b-form-group id="example-input-group-2" label="Last Name" label-for="example-input-2">
                        <b-form-input @input="formUpdate" id="example-input-2" name="example-input-2" v-model.trim="$v.form.lastName.$model"
                            :state="validateState('lastName')" aria-describedby="input-2-live-feedback" placeholder="Ex: Doe"></b-form-input>

                        <b-form-invalid-feedback id="input-1-live-feedback">
                            This is a required field and must be at least 4 characters.
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <!-- EMAIL -->
                    <b-form-group id="example-input-group-3" label="Email" label-for="example-input-3">
                        <b-form-input @input="formUpdate" id="example-input-3" name="example-input-3" v-model.trim="$v.form.email.$model"
                            :state="validateState('email')" aria-describedby="input-3-live-feedback" placeholder="Ex: example@info.com"></b-form-input>
                        
                        <b-form-invalid-feedback id="input-1-live-feedback">
                            The e-mail must be in the correct format.
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>
                <b-col>
                    <!-- PHONE -->
                    <b-form-group id="example-input-group-4" label="Phone" label-for="example-input-4">
                        <b-form-input @input="formUpdate" id="example-input-4" name="example-input-4" v-model.trim="$v.form.phoneNumber.$model"
                            :state="validateState('phoneNumber')" aria-describedby="input-4-live-feedback" placeholder="Ex: 05551112233"></b-form-input>
                        <b-form-invalid-feedback id="input-1-live-feedback">
                            The phone number must be in the correct format.
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>
            </b-row>


            <b-row>
                <b-col>
                    <!-- AGE -->
                    <b-form-group id="example-input-group-5" label="Age" label-for="example-input-5">
                        <b-form-input @input="formUpdate" id="example-input-5" name="example-input-5" v-model.trim.number="$v.form.age.$model"
                            :state="validateState('age')" aria-describedby="input-5-live-feedback" placeholder="Ex: 23"></b-form-input>
                        <b-form-invalid-feedback id="input-1-live-feedback">
                            The age must be number and between 15-100.
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>
                <b-col>
                    <!-- TC ID -->
                    <b-form-group id="example-input-group-6" label="TC" label-for="example-input-6">
                        <b-form-input @input="formUpdate" id="example-input-6" name="example-input-6" v-model.trim="$v.form.TcId.$model"
                            :state="validateState('TcId')" aria-describedby="input-6-live-feedback" placeholder="Ex: 11111111111"></b-form-input>
                        <b-form-invalid-feedback id="input-1-live-feedback">
                            The TC identity must be in the correct format.
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>
            </b-row>


            <b-row>
                <b-col>
                    <!-- HES CODE -->
                    <b-form-group id="example-input-group-7" label="Hes Code" label-for="example-input-7">
                        <b-form-input @input="formUpdate" id="example-input-7" name="example-input-7" v-model="$v.form.hesCode.$model"
                            :state="validateState('hesCode')" aria-describedby="input-7-live-feedback" placeholder="Ex: E2A3123456"></b-form-input>
                        <b-form-invalid-feedback id="input-1-live-feedback">
                            The Hes Code identity must be in the correct format.
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>
                <b-col>
                    <!-- GENDER -->
                    <b-form-group id="example-input-group-8" label="Gender" label-for="example-input-8">
                        <b-form-select @input="formUpdate" id="example-input-8" name="example-input-8" v-model="$v.form.gender.$model"
                            :options="genders" :state="validateState('gender')" aria-describedby="input-8-live-feedback">
                        </b-form-select>

                        <b-form-invalid-feedback id="input-2-live-feedback">
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
        mixins: [validationMixin, validation],
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
                if(!this.$v.$invalid) {
                    this.$emit("goNextInvalidForm");
                }
            }
        }
    };
</script>