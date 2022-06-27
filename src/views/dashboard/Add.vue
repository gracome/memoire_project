<template>
  <div class="py-5 container">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-2"></div>
        <div class="col-12 col-md-8">
          <h3 class="font-weight-bold">Nouvel utilisateur</h3>
          <p>Ajouter un utilisateur à la liste des utilisateurs</p>

          <ValidationObserver v-slot="{ handleSubmit }">
            <form class="py-4" @submit.prevent="handleSubmit(submitUserAdd)">
              <validation-provider rules="required" v-slot="{ errors }">
                <div class="form-group">
                  <label for="login">Login</label>
                  <input
                    type="text"
                    class="form-control form-control-md"
                    id="login"
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
                     pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Doit contenir au moins un chiffre et une lettre majuscule et minuscule, et au moins 8 caractères ou plus"
                    v-model="form.password"
                  />
                  <span class="error-text">{{ errors[0] }}</span>
                </div>
              </validation-provider>

              <validation-provider rules="required" v-slot="{ errors }">
                <div class="form-group">
                  <label for="firstname">Nom</label>
                  <input
                    type="text"
                    class="form-control form-control-md"
                    id="firstname"
                    v-model="form.firstname"
                  />
                  <span class="error-text">{{ errors[0] }}</span>
                </div>
              </validation-provider>
              <validation-provider rules="required" v-slot="{ errors }">
                <div class="form-group">
                  <label for="lastname">Prénom</label>
                  <input
                    type="text"
                    class="form-control form-control-md"
                    id="lastname"
                    v-model="form.lastname"
                  />
                  <span class="error-text">{{ errors[0] }}</span>
                </div>
              </validation-provider>

              <validation-provider rules="required" v-slot="{ errors }">
                <div class="form-group">
                  <label for="phone">Téléphone</label>
                  <input
                    type="int"
                    class="form-control form-control-md"
                    id="phone"
                    v-model="form.phone"
                  />
                  <span class="error-text">{{ errors[0] }}</span>
                </div>
              </validation-provider>
              <validation-provider rules="required" v-slot="{ errors }">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    class="form-control form-control-md"
                    id="email"
                    v-model="form.email"
                  />
                  <span class="error-text">{{ errors[0] }}</span>
                </div>
              </validation-provider>
              <validation-provider rules="required" v-slot="{ errors }">
                <div class="form-group">
                  <label for="role">Rôle</label>
                  <select
                    class="form-control form-control-md"
                    aria-label="Default select example"
                    v-model="form.role"
                    id="role"
                  >
                    <option value="Admin">Administrateur</option>
                    <option value="Superviseur">Superviseur</option>
                    <option value="Agent">Agent</option>
                  </select>

                  <span class="error-text">{{ errors[0] }}</span>
                </div>
              </validation-provider>

              <validation-provider rules="required" v-slot="{ errors }">
                <div class="form-group">
                  <label for="Sexe">Sexe</label>
                  <select
                    class="form-control form-control-md"
                    aria-label="Default select example"
                    v-model="form.Sexe"
                  >
                    <option selected value="masculin">Masculin</option>
                    <option value="feminin">Féminin</option>
                  </select>
                  <span class="error-text">{{ errors[0] }}</span>
                </div>
              </validation-provider>

              <div>
                <button
                  class="btn btn-primary text-uppercase font-weight-semibold"
                  type="submit"
                  :disabled="on_loading"
                >
                  <span
                    v-if="on_loading == true"
                    class="spinner-border"
                    role="status"
                  >
                  </span>
                  <span v-else-if="on_loading == false"> Ajouter </span>
                </button>
              </div>
            </form>
          </ValidationObserver>
        </div>
        <div class="col-12 col-md-2"></div>
      </div>
    </div>
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
        firstname: "",
        lastname: "",
        sexe: "",
        phone: "",
        email: "",
        role: "",
      },
      on_loading: false,
    };
  },
  methods: {
    async submitUserAdd() {
      this.on_loading = true;
      const data = {
        login: this.form.login,
        password: this.form.password,
        firstname: this.form.firstname,
        lastname: this.form.lastname,
        sexe: this.form.sexe,
        email: this.form.email,
        phone: this.form.phone,
        role: this.form.role,
      };
      await services.add_user(data).then((response) => {
        this.on_loading = false;
        if (response.status == 200) {
          this.$bvToast.toast("Utilisateur créé avec succèss", {
            title: `Création d'un utilisateur}`,
            variant: "success",
            solid: true,
          });
          this.$router.push({ name: "Liste_users" });
        } else {
          return { msg: `Une erreur s'est produite ` };
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
