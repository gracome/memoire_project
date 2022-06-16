import Vue from "vue";
import {
  ValidationProvider,
  ValidationObserver,
  configure,
  extend
} from "vee-validate";
import { required, email, min, numeric, regex } from "vee-validate/dist/rules";
configure({ mode: "eager" });
extend("required", required);
extend("email", email);
extend("min", min);
extend("numeric", numeric);
extend("regex", regex);
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);