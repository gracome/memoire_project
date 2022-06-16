<template>
  <div class="reset_password">
    <h3 class="font-weight-bold">Changer votre mot de passe</h3>
    <p class="text-dark mb-3">Entrer votre ancien mot de passe.</p>
    <form class="mb-3">
      <!-- Ancien mot de passe -->
      <div class="form-group">
        <label for="password" class="sr-only">Ancien mot de passe</label>
        <input
          type="password"
          class="form-control form-control-md"
          id="password"
          placeholder="Entrer votre ancien mot de passe"
        />
      </div>
            <!-- nouveau mot de passe-->
      <div class="form-group">
        <label for="password" class="sr-only">Nouveau mot de passe</label>
        <input
          type="password"
          class="form-control form-control-md"
          id="password"
          placeholder="Entrer votre nouveau mot de passe"
        />
      </div>
        <!-- Confirmer nouveau mot de passe-->
      <div class="form-group">
        <label for="password" class="sr-only">Confirmez</label>
        <input
          type="password"
          class="form-control form-control-md"
          id="password"
          placeholder="Confirmez votre nouveau mot de passe"
        />
      </div>

      <!-- Submit -->
      <button
        class="
          btn btn-lg btn-block btn-primary
          text-uppercase
          font-weight-semibold
        "
        type="submit"
      >
        Changez
      </button>
    </form>
    <p>
      Vous avez déjà un compte?
      <a class="font-weight-semibold" href="/">Se connecter</a>.
    </p>
  </div>
</template>
<script>
export default {
  name: "Reset_password",
  components: {},
};
</script>
