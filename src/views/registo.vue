<template>
  <div>
    <h2><router-link :to="{ name: 'login' }">Login</router-link></h2>
    <h1>Register</h1>
    <b-form @submit.prevent="register">
      <!-- Username -->
      <b-form-group id="input-group-1" label="Username" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.username"
          type="text"
          required
        ></b-form-input>
      </b-form-group>
      <!-- Nacionalidade -->
      <b-form-group id="input-group-2" label="Nationality" label-for="input-2">
        <b-form-select
          id="input-2"
          v-model="form.nationality"
          :options="nationalities"
          required
        ></b-form-select>
      </b-form-group>
      <!-- Password -->
      <b-form-group id="input-group-3" label="Password" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.password"
          type="password"
          :state="validation"
          required
        ></b-form-input>
        <b-form-invalid-feedback :state="validation">
          Yourpassword must have more than 6 characters long.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validation">
          Looks Good.
        </b-form-valid-feedback>
      </b-form-group>
      <!-- Confirm Password -->
      <b-form-group
        id="input-group-4"
        label="Confirm Password"
        label-for="input-4"
      >
        <b-form-input
          id="input-4"
          v-model="form.passwordConfirm"
          type="password"
          :state="confirm"
          required
        ></b-form-input>
        <b-form-invalid-feedback :state="confirm">
          Password is not equal.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="confirm">
          Password is the same
        </b-form-valid-feedback>
      </b-form-group>
      <b-button type="submit" variant="primary">Register</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        nationality: "",
        password: "",
        passwordConfirm: "",
        type: "regular",
      },
      nationalities: [
        { text: "---Select your Nationality---", value: null },
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas (the)",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia (Plurinational State of)",
        "Bonaire, Sint Eustatius and Saba",
        "Bosnia and Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "British Indian Ocean Territory (the)",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cayman Islands (the)",
        "Central African Republic (the)",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos (Keeling) Islands (the)",
        "Colombia",
        "Comoros (the)",
        "Congo (the Democratic Republic of the)",
        "Congo (the)",
        "Cook Islands (the)",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Curaçao",
        "Cyprus",
        "Czechia",
        "Côte d'Ivoire",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic (the)",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Falkland Islands (the) [Malvinas]",
        "Faroe Islands (the)",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "French Southern Territories (the)",
        "Gabon",
        "Gambia (the)",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Heard Island and McDonald Islands",
        "Holy See (the)",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran (Islamic Republic of)",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea (the Democratic People's Republic of)",
        "Korea (the Republic of)",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People's Democratic Republic (the)",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands (the)",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia (Federated States of)",
        "Moldova (the Republic of)",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands (the)",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger (the)",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "Northern Mariana Islands (the)",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine, State of",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines (the)",
        "Pitcairn",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Republic of North Macedonia",
        "Romania",
        "Russian Federation (the)",
        "Rwanda",
        "Réunion",
        "Saint Barthélemy",
        "Saint Helena, Ascension and Tristan da Cunha",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Martin (French part)",
        "Saint Pierre and Miquelon",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Sint Maarten (Dutch part)",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia and the South Sandwich Islands",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan (the)",
        "Suriname",
        "Svalbard and Jan Mayen",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Taiwan",
        "Tajikistan",
        "Tanzania, United Republic of",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands (the)",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates (the)",
        "United Kingdom of Great Britain and Northern Ireland (the)",
        "United States Minor Outlying Islands (the)",
        "United States of America (the)",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela (Bolivarian Republic of)",
        "Viet Nam",
        "Virgin Islands (British)",
        "Virgin Islands (U.S.)",
        "Wallis and Futuna",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe",
        "Åland Islands",
      ],
    };
  },
  computed: {
    ...mapGetters(["isUsernameAvailable"]),
    validation() {
      return this.form.password.length > 5;
    },
    confirm() {
      return this.form.password === this.form.passwordConfirm;
    },
  },
  methods: {
    register() {
      if (
        !this.isUsernameAvailable(this.form.username) &&
        this.form.password !== this.form.passwordConfirm
      ) {
        alert("USER AND PASSWORD ARE WRONG!");
      } else if (!this.isUsernameAvailable(this.form.username)) {
        alert("USER ALREADY EXISTS!");
      } else if (this.form.password !== this.form.passwordConfirm) {
        alert("PASSWORD WRONG!");
      } else {
        this.SET_NEW_USER(this.form), this.$router.push({ name: "login" });
      }
    },

    ...mapMutations(["SET_NEW_USER"]),
  },
};
</script>

<style>
</style>