<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  const next = () => dispatch('next')
</script>

<main>
  <div on:click={next} class="card">
    <h2 class="white">Choose someone to be the master and pass them the phone</h2>
    <br>
    <h3>Master, tap to see the word</h3>
  </div>
</main>
