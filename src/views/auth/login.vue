<template class="login">
  <div>
    <h2 class="font-weight-bold">Connexion</h2>
    <!-- <p class="text-dark mb-3">We are Different, We Make You Different.</p> -->

    <ValidationObserver v-slot="{ handleSubmit }">
      <form class="mb-3" @submit.prevent="handleSubmit(login)">
        <validation-provider rules="required" v-slot="{ errors }">
          <div class="form-group">
            <label for="name">Nom d'utilisateur</label>
            <input
              type="text"
              class="form-control form-control-md"
              id="login"
              placeholder="Entrer votre nom d'utilisateur"
              v-model="form.login"
            />
            <span class="error-text">{{ errors[0] }}</span>
          </div>
        </validation-provider>
        <validation-provider rules="required" v-slot="{ errors }">
          <div class="form-group">
            <label for="password">Mot de passe</label>
            <input
              type="password"
              class="form-control form-control-md"
              id="password"
              placeholder="Entrer votre mot de passe"
              v-model="form.password"
            />
            <span class="error-text">{{ errors[0] }}</span>
          </div>
        </validation-provider>

        <p>
          Vous avez oublié vos identifiants ?
          <a class="font-weight-semibold" href="/reset-password"
            >Mot de passe oublié</a
          >.
        </p>

        <button
          class="
            btn btn-primary btn-lg btn-block
            text-uppercase
            font-weight-semibold
          "
          type="submit"
          :disabled="on_loading"
        >
          <span v-if="on_loading == true" class="spinner-border" role="status">
          </span>
          <span v-else-if="on_loading == false"> Se connecter </span>
        </button>
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
import { services, client } from "@/api";
import _ from "lodash";
extend("required", {
  ...required,
  message: "Champ obligatoire",
});
export default {
  data() {
    return {
      form: {
        login: "",
        password: "",
      },
      on_loading: false,
    };
  },
  methods: {
    async login() {
      this.on_loading = true;
      const data = {
        login: this.form.login,
        password: this.form.password,
      };

      await services.userLogin(data).then((response) => {
        this.on_loading = false;
        if (!_.isNil(response)) {
          if (!_.isNil(response.data.accessToken)) {
            client.setCookies(
              "auth_session",
              response.data.accessToken,
              response.data.expiresIn
            );
            if (!_.isNil(response.data.profile)) {
              client.setCookies(
                "yinwe",
                response.data.profile.id,
                response.data.expiresIn
              );
              this.$store.state.user_infos = response.data.profile;
              console.log("le profile", this.$store.state.user_infos);
            }
            this.$router.push({ name: "dashboard" });
          }
        }
      });
    },
  },
};
</script>
<style>
.spinner-border {
  width: 20px !important;
  height: 20px !important;
}
</style>