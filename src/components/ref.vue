<template>
  <div class="row">
    <form class="col s12">
        <h5 style="color : green"> (Pas de register encore, on est directement a l'ajout de son magasin)</h5>
        <h5>Entrez vos coordonees pour que nous vous ajoutions a notre liste de magasins : </h5>
      <div class="row">
        <div class="input-field col s6">
            <p>Nom: </p>
          <input placeholder="Prenom" id="first_name" type="text" class="validate">
        </div>
        <div class="input-field col s6">
            <p>Prenom : </p>
          <input placeholder="Nom" id="last_name" type="text" class="validate">
        </div>
      </div>
      <div class="row">
       
          <div class="input-field col s6">
              <p>Code postal :</p>
            <input id="postal" type="number" class="validate">
        </div>
        <div class="input-field col s6">
            <p>Adresse :</p>
          <input placeholder="adresse" id="adresse" type="text" class="validate">
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12 ">
            <p>Nom du magasin : </p>
          <input placeholder="Nom du magasin" id="magasin" type="text" class="validate">
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12 ">
            <p>Email: </p>
          <input placeholder="Email" id="email" type="email" class="validate">
        </div>
      </div>

        <button class="btn waves-effect waves-light" type="submit" name="action">Suivant
    <i class="material-icons right">Horaires Dates fermeture </i>
  </button>
     
    </form>
  </div>
</template>

<script>
export default {
  name: 'ref',
}
</script>

<style>

</style>
