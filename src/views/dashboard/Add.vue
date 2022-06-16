<template>
  <div class="py-5 container">
    <div class="container">
      <h3 class="font-weight-bold">Ajouter un utilisateur</h3>

      <ValidationObserver v-slot="{ handleSubmit }">
        <form class="mb-2" @submit.prevent="handleSubmit(add)">
          <validation-provider rules="required" v-slot="{ errors }">
            <div class="form-group">
              <label for="name">Login</label>
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
                v-model="form.password"
              />
              <span class="error-text">{{ errors[0] }}</span>
            </div>
          </validation-provider>

          <validation-provider rules="required" v-slot="{ errors }">
            <div class="form-group">
              <label for="name">Nom</label>
              <input
                type="text"
                class="form-control form-control-md"
                id="firstname"
                v-model="form.firstName"
              />
              <span class="error-text">{{ errors[0] }}</span>
            </div>
          </validation-provider>
          <validation-provider rules="required" v-slot="{ errors }">
            <div class="form-group">
              <label for="prénom">Prénom</label>
              <input
                type="text"
                class="form-control form-control-md"
                id="lastname"
                v-model="form.lastName"
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
              <!-- <label for="role">Rôle</label>
              <input
                type="select"
                class="form-control form-control-md"
                id="role"
                v-model="form.role"
            
              /> -->
              <label for="Sexe">Rôle</label>
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
              <!-- <label for="sexe">Sexe</label>
              <p>
                M: <input type="radio" name="sex" v-model="form.sexe"  id="sexe"/>
                F: <input type="radio" name="sex"  v-model="form.sexe" id="sexe"/>
              </p> -->
              <!-- <div class="col-12"> -->
                          <label for="Sexe">Sexe</label>
                            <select
                              class="form-control form-control-md"
                              aria-label="Default select example"
                              v-model="form.Sexe"
                            >
                              <option selected value="masculin">Masculin</option>
                              <option value="feminin">Féminin</option>
                            </select>
                        </div>
              <span class="error-text">{{ errors[0] }}</span>
            <!-- </div> -->
          </validation-provider>

          <button
            class="btn btn-primary text-uppercase font-weight-semibold"
            type="submit"
          >
            Ajouter
          </button>
        </form>
      </ValidationObserver>
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
        sexe: "",
        email: "",
        role: "",
     
      },
      on_loading: false,
    };
  },
};
</script>
