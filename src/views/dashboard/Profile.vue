<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12">
        <!-- Card Start -->
        <div class="d-flex flex-column align-items-center">
          <div class="avatar avatar-lg mb-3">
            <img class="avatar-img" src="../../styles/theme/img/1.png" alt="" />
          </div>

          <div class="d-flex flex-column align-items-center">
            <h5>Coco bou</h5>
          </div>

          <div class="d-flex">
            <h6>Administrateur</h6>
          </div>
        </div>
        <div class="my-3">
          <!-- Profile Settings Start -->
          <div class="profile">
            <div class="container-xl px-2 px-sm-3">
              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="card mb-3">
                    <div class="card-header">
                      <h5 class="mb-1">Informations générales</h5>
                    </div>

                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-6 col-12">
                          <div class="form-group">
                            <label for="lastName">Nom</label>
                            <input
                              type="text"
                              class="form-control form-control-md"
                              id="lastName"
                              v-model="genarals_infos.lastname"
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
                              v-model="genarals_infos.firstname"
                            />
                          </div>
                        </div>
                        <div class="col-md-6 col-12">
                          <div class="form-group">
                            <label for="mobileNumber"
                              >Numéro de téléphone</label
                            >
                            <input
                              type="text"
                              class="form-control form-control-md"
                              id="mobileNumber"
                              v-model="genarals_infos.phone"
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
                              v-model="genarals_infos.email"
                            />
                          </div>
                        </div>
                        <div class="col-12">
                          <label for="Sexe">Sexe</label>

                          <div class="form-group">
                            <select
                              class="form-select"
                              aria-label="Default select example"
                              v-model="genarals_infos.sexe"
                            >
                              <option selected value="masculin">Masculin</option>
                              <option value="feminin">Féminin</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card-footer d-flex justify-content-end">
                      <button type="button" class="btn btn-primary">
                        Sauvegarder
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="card mb-3">
                    <div class="card-header">
                      <h5 class="mb-1">Changement de mot de passe</h5>
                    </div>

                    <div class="card-body">
                      <form>
                        <div class="row">
                          <div class="col-12">
                            <div class="form-group">
                              <label for="current-password"
                                >Mot de passe actuel</label
                              >
                              <input
                                type="password"
                                class="form-control form-control-md"
                                id="current-password"
                                autocomplete="on"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6 col-12">
                            <div class="form-group">
                              <label for="new-password"
                                >Nouveau mot de passe</label
                              >
                              <input
                                type="password"
                                class="form-control form-control-md"
                                id="new-password"
                                autocomplete="off"
                              />
                            </div>
                          </div>
                          <div class="col-md-6 col-12">
                            <div class="form-group">
                              <label for="repeat-password"
                                >Confirmez le mot de passe</label
                              >
                              <input
                                type="password"
                                class="form-control form-control-md"
                                id="repeat-password"
                                placeholder=""
                                autocomplete="off"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div class="card-footer d-flex justify-content-end">
                      <button type="button" class="btn btn-primary">
                        Enrégistrer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Profile Settings End -->
        </div>
        <!-- Card End -->
      </div>
    </div>
  </div>
</template>

<script>
import { services, client } from "@/api";
import { userProfile } from "@/api/services";
import _ from "lodash";
export default {
  data() {
    return {
      genarals_infos: {
        lastname: '',
        firstname: '',
        email: '',
        phone: '',
        sexe: ''
      },
      password_infos: {
        old_password: '',
        new_password: '',
        confirm_password: ''
      }
    };
  },
  async mounted() {
    const user_id = client.getCookies('yinwe')
    console.log('...?', this.$store.state.user_infos)
    if (_.isEmpty(this.$store.state.user_infos)) {
      console.log('store vide')
      if (!_.isNil(user_id)) {
        await services.my_profile(user_id).then((res) => {
          if (res.status == 200) {
            this.genarals_infos = res.data
          }
        })
      }
    } else {
      console.log('non vide', user_id)
      this.genarals_infos = this.$store.state.user_infos
    }
  },
};
</script>
<style lang="scss" scoped>
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
