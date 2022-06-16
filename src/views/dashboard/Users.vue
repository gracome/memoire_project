<template>
  <div class="container py-5">
    <div class="py-5 container">
      <h3 class="font-weight-bold">Liste des utilisateurs</h3>
      <div>
        <b-table striped hover :items="items" :fields="fields"></b-table>
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
      // Note `isActive` is left out and will not appear in the rendered table
      fields: ["login","first_name", "last_name", "Sexe","Phone", "Email", "Rôle", "Status", ""],
      items: [
        {
          isActive: true,
          login: "Momo",
          first_name: "Dickerson",
          last_name: "Macdonald",
          Sexe: "Masculin",
          Phone: "61000254",
          Email: "momo@gmail.com",
          Rôle: "Admin",
          Status: "onLine",
                
        },
        { isActive: false, login: "Cokou", first_name: "Larsen", last_name: "Shaw", Sexe: "M", Phone: "51285547", Email: "Shwcokou@gmail.com", Rôle: "Superviseur", Status: "onLine" },
        { isActive: false, login: "Geneva", first_name: "Wilson", last_name: "Sowo", Sexe: "F", Phone: "51285557", Email: "Sowowilson@gmail.com", Rôle: "Superviseur", Status: "onLine" },
        { isActive: false, login: "Cokou", first_name: "Waren", last_name: "Hans", Sexe: "M", Phone: "51285547", Email: "Momo@gmail.com", Rôle: "Agent", Status: "offLine" },
        { isActive: false, login: "Cokou", first_name: "Lilia", last_name: "Mojito", Sexe: "F", Phone: "51285547", Email: "Mac@gmail.com", Rôle: "Superviseur", Status: "offLine" },
        { isActive: false, login: "Cokou", first_name: "Loren", last_name: "Shay", Sexe: "M", Phone: "51285547", Email: "Wilson@gmail.com", Rôle: "Superviseur", Status: "onLine" },
       
      ],
    };
  },
};
</script>
