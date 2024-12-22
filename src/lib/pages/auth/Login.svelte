<script>
    let email = $state('');
</script>

<form class="form-login">
    <label for="email">Alamat Email</label>
    <input bind:value={email} type="text">
    <label for="email">Password</label>
    <input type="password">
    <button type="submit">submit</button>
</form>

<h3>Hasil Data {email}</h3>