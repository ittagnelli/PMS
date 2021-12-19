<script context="module">
</script>

<svelte:head>
	<title>PMS</title>
</svelte:head>

<div class="row d-flex justify-content-center align-items-center h-100">
  <div class="col-xl-10">
    <div class="card rounded-3 text-black">
      <div class="row g-0">
        <div class="col-lg-6">
          <div class="card-body p-md-5 mx-md-4">
            <div class="text-center">
              <img src="/img/logo2.png" style="width: 185px;" alt="logo">
              <!-- <h4 class="mt-1 mb-5 pb-1">PMS</h4> -->
              <br /><br /><br /><br />
            </div>

            <form>
              <p>Per favore fai il login con il tuo account</p><br />

              <div class="form-outline mb-4">
                <label class="form-label" for="form2Example11">Username</label>
                <input type="email" id="form2Example11" class="form-control" placeholder="email address"/>
              </div>

              <div class="form-outline mb-4">
                <label class="form-label" for="form2Example22">Password</label>
                <input type="password" id="form2Example22" class="form-control" />
              </div>

              <div class="text-center pt-1 mb-5 pb-1">
                <button type="button" class="btn btn-warning btn-lg">Sign in</button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
          <div class="text-white px-3 py-4 p-md-5 mx-md-4">
            <h2 class="mb-4">PCTO Management System</h2>
            <p class="h5 mb-0">Sistema di gestion delle attività PCTO per studenti, tutor scolastici e aziendali.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 
<style>

.gradient-custom-2 {
  background: #fccb90;
  background: -webkit-linear-gradient(to right, var(--logo-light-color), var(--logo-dark-color));
  background: linear-gradient(to right, var(--logo-light-color), var(--logo-dark-color));
}

</style>