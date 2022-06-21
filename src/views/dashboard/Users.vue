<template>
  <div class="container py-5">
    <div class="py-5 container">
      <h3 class="font-weight-bold">Liste des utilisateurs</h3>
      <div>
 <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Login</th>
      <th scope="col">Firstname</th>
      <th scope="col">Lastname</th>
       <th scope="col">Sexe</th>
        <th scope="col">Phone</th>
         <th scope="col">Email</th>
          <th scope="col">Rôle</th>
           <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
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
          login: '',
          first_name: "",
          last_name: "Macdonald",
          Sexe: "Masculin",
          Phone: "61000254",
          Email: "momo@gmail.com",
          Rôle: "Admin",
          Status: "onLine",
                
        },
        
       
      ],
    };
  },
};
</script>
