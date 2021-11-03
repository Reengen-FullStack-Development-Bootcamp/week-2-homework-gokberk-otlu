import {
  required,
  minLength,
  email,
  numeric,
  helpers,
  between
} from "vuelidate/lib/validators";

    
const stringValidator = helpers.regex(
  "stringValidator",
  /^[a-zA-Z]+$/
);

const phoneValidator = helpers.regex(
  "phoneValidator",
  /^(05)([0-9]{2})\s?([0-9]{3})\s?([0-9]{2})\s?([0-9]{2})$/
);

const IdTcValidator = helpers.regex(
  "IdTcValidator",
  /^[1-9]{1}[0-9]{9}[02468]{1}$/
);

const hesValidator = helpers.regex(
  "hesValidator",
  /^[A-Za-z][0-9][A-Za-z][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/
);

export const validation = {
  validations: {
    form: {
      firstName: {
        required,
        minLength: minLength(4),
        stringValidator
      },
      lastName: {
        required,
        minLength: minLength(4),
        stringValidator
      },
      email: {
        required,
        email,
      },
      phoneNumber: {
        required,
        numeric,
        phoneValidator
      },
      age: {
        required,
        numeric,
        between: between(15, 100)
      },
      TcId: {
        required,
        numeric,
        IdTcValidator,
      },
      hesCode: {
        required,
        hesValidator,
      },
      gender: {
        required,
      },
    },
  },
  methods: {
    validateState(name) {
      // form validation for state attribute
      const {
          $dirty,
          $error
      } = this.$v.form[name];
      return $dirty ? !$error : null;
    }
  }
};