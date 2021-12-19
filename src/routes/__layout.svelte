<script>
	import { page } from '$app/stores';
</script>


<main>
	<div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 240px;">
		<a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
		<!-- <i id="pms-icon" class="fas fa-dice-d20"></i> -->
		<!-- <span class="fs-4">PMS</span><span class="fs-6 version">v1.0</span> -->
		<img src="/img/logo2.png" style="width: 85px;" alt="logo">
		<span class="fs-6 version">v1.0</span>
	  </a>
	  <hr>
	  <ul class="nav nav-pills flex-column mb-auto">
		<li>
			<a href="/admin" class:active="{$page.path === '/admin'}" class="nav-link text-white">
				<i class="icon fas fa-database"></i>
			  Admin
			</a>
		</li>
		<li class="nav-item">
		  	<a href="/pcto" class:active="{$page.path === '/pcto'}" class="nav-link text-white">
			<i class="icon fas fa-user"></i>
			PCTO
		  </a>
		</li>
		<li>
		  <a href="/studenti" class:active="{$page.path === '/studenti'}" class="nav-link text-white">
			<i class="icon far fa-user"></i>
			Studenti
		  </a>
		</li>
		<li>
		  <a href="/tutor" class:active="{$page.path === '/tutor'}" class="nav-link text-white">
			<i class="icon fas fa-user-plus"></i>
			Tutor
		  </a>
		</li>
		<hr>
		<li>
			<a href="/help" class:active="{$page.path === '/help'}" class="nav-link text-white">
			  <i class="icon fas fa-question"></i>
			  Help
			</a>
		  </li>
		  <li>
			<a href="/about" class:active="{$page.path === '/about'}" class="nav-link text-white">
			  <i class="icon fas fa-address-card"></i>
			  About
			</a>
		  </li>
	  </ul>
	  <hr>
	  <div class="dropdown">
		<a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
		  <img src="img/avatar.png" alt="" width="32" height="32" class="rounded-circle me-2">
		  <strong>John</strong>
		</a>
		<ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
		  <li><a class="dropdown-item" href="#">New project...</a></li>
		  <li><a class="dropdown-item" href="#">Settings</a></li>
		  <li><a class="dropdown-item" href="#">Profile</a></li>
		  <li><hr class="dropdown-divider"></li>
		  <li><a class="dropdown-item" href="#">Sign out</a></li>
		</ul>
	  </div>
	</div>
	
	<div class="container-fluid py-5 h-100">
		<slot />
	</div>

</main>

<style>

main {
  display: flex;
  flex-wrap: nowrap;
  height: 100vh;
  max-height: 100vh;
  overflow-x: auto;
  overflow-y: hidden; 
}

.version {
	padding-left: 4px;
	padding-top: 16px;
	color: var(--logo-light-color);
}
.dropdown-toggle { outline: 0; }

.nav-link {
  border-radius: 0;
}

.icon {
	padding-right: 8px;
	font-size: 18px;
}

#pms-icon {
	padding-right: 16px;
	font-size: 40px;
}

.text-white {
	color: var(--logo-light-color) !important;
}

.active {
	background-color:var(--logo-dark-color) !important;
}

</style>