<template>
  <div class="container py-5">
    <div class="py-5">
      <h3 class="font-weight-bold mb-3">Liste des utilisateurs</h3>
      <div>
        <div
          class="py-5 d-flex justify-content-center"
          v-if="on_loading == true"
        >
          <div class="big spinner-border" role="status"></div>
        </div>
        <table class="table table-hover" v-else-if="on_loading == false">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Login</th>
              <th scope="col">Email</th>
              <th scope="col">Nom</th>
              <th scope="col">Prénom</th>
              <th scope="col">Rôle</th>
              <th scope="col">Status</th>
              <th scope="col" class="action-col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users_table" :key="index">
              <td>{{ user.id }}</td>
              <td>{{ user.login }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.lastname }}</td>
              <td>{{ user.firstname }}</td>
              <td>{{ user.role }}</td>
              <td>{{ user.status }}</td>
              <td>
                <div class="d-flex align-items-center justify-content-center">
                  <b-button
                    @click="user_update(user)"
                    size="sm"
                    variant="primary"
                    class="mr-2"
                    >Editer
                  </b-button>

                  <b-button
                    size="sm"
                    variant="danger"
                    @click="user_delete(user)"
                  >
                    Supprimer
                  </b-button>
                </div>
              </td>
            </tr>
            <b-modal title="Suppimer un utilisateur" id="delete-modal" centered>
              Voulez vous vraiment supprimer cet utilisateur ?
              <template #modal-footer>
                <b-button size="sm" variant="danger" @click="cancel()">
                  Annuler
                </b-button>
                <b-button
                  size="sm"
                  variant="primary"
                  @click="delete_user_infos()"
                >
                  <span
                    v-if="on_loading_delete == true"
                    class="spinner-border"
                    role="status"
                  ></span>

                  <span v-else>Valider</span>
                </b-button>
              </template>
            </b-modal>
            <b-modal
              title="Modifier un utilisateur"
              id="update-modal"
              hide-footer
              centered
            >
              <form @submit.prevent="submit_update" class="py-3">
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <label for="lastName">Login</label>
                      <input
                        type="text"
                        class="form-control form-control-md"
                        id="lastName"
                        disabled
                        v-model="current_user.login"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 col-12">
                    <div class="form-group">
                      <label for="lastName">Nom</label>
                      <input
                        type="text"
                        class="form-control form-control-md"
                        id="lastName"
                        v-model="current_user.lastname"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 col-12">
                    <div class="form-group">
                      <label for="firstName">Prénom</label>
                      <input
                        type="text"
                        class="form-control form-control-md"
                        id="firstName"
                        v-model="current_user.firstname"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 col-12">
                    <div class="form-group">
                      <label for="mobileNumber">Numéro de téléphone</label>
                      <input
                        type="text"
                        class="form-control form-control-md"
                        id="mobileNumber"
                        v-model="current_user.phone"
                      />
                    </div>
                  </div>

                  <div class="col-md-6 col-12">
                    <div class="form-group">
                      <label for="emailAddress">Adresse Email</label>
                      <input
                        type="email"
                        class="form-control form-control-md"
                        id="emailAddress"
                        v-model="current_user.email"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 col-12">
                    <label for="Sexe">Sexe</label>

                    <div class="form-group">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        v-model="current_user.sexe"
                      >
                        <option selected value="masculin">Masculin</option>
                        <option value="feminin">Féminin</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-end mt-3">
                  <button type="submit" class="btn btn-primary">
                    <span
                      v-if="on_loading_update == true"
                      class="spinner-border"
                      role="status"
                    ></span>

                    <span v-else>Enrégistrer</span>
                  </button>
                </div>
              </form>
            </b-modal>
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
      fields: [
        "login",
        "first_name",
        "last_name",
        "Sexe",
        "Phone",
        "Email",
        "Rôle",
        "Status",
        "",
      ],
      users_table: [],
      on_loading: false,
      on_loading_delete: false,
      current_user: {},
      on_loading_update: false,
    };
  },
  computed: {},
  mounted() {
    this.loadUsersList();
  },
  methods: {
    user_delete(element) {
      this.current_user = element;
      this.$bvModal.show("delete-modal");
    },
    user_update(element) {
      this.current_user = element;
      this.$bvModal.show("update-modal");
    },
    async loadUsersList() {
      this.on_loading = true;
      setTimeout(async () => {
        await services.usersListe().then((response) => {
          if (!_.isNil(response.data.data)) {
            this.users_table = response.data.data;
          }
          this.on_loading = false;
          return this.users_table;
        });
      }, 1000);
    },
    async delete_user_infos() {
      console.log("okd");
      this.on_loading_delete = true;
      await services
        .delete_user({
          id: this.current_user.id,
        })
        .then((response) => {
          console.log("delete", response);
          this.on_loading_delete = false;
          return this.loadUsersList();
        });
    },
    async submit_update() {
      this.on_loading_update = true;
      setTimeout( async () =>{
        await services
        .update_profile({
          id: this.current_user.id,
          lastname: this.current_user.lastname,
          firstname: this.current_user.firstname,
          email: this.current_user.email,
          phone: this.current_user.phone,
          sexe: this.current_user.sexe,
        })
        .then((res) => {
          this.on_loading_update = false;
          console.log("Update", res);
          this.loadUsersList();
        });
      }, 1000)
    },
    cancel() {
      this.$bvModal.hide("delete-modal");
    },
  },
};
</script>
<style scoped>
.action-col {
  text-align: center;
}

.spinner-border {
  width: 20px !important;
  height: 20px !important;
  color: #ffffff !important;
}
.big.spinner-border {
  width: 4rem !important;
  height: 4rem !important;
  color: inherit !important;
}
.form-select {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
