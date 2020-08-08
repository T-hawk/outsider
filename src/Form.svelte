<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export var players = 4
  const next = () => dispatch('next')
</script>

<main>
  <div class="card">
    <h2>Select the number of players</h2>
    <h2 class="white">{players}</h2>
    <input type="range" bind:value={players} class="slider" min=4 max=10>
    <br>
    <button on:click={next} class="btn">NEXT</button>
  </div>
</main>

<style>
  .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 25px;
    background: black;
    outline: none;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: white;
    cursor: pointer;
  }

  .slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: white;
    cursor: pointer;
  }
</style>
