<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  export let word;
  export let words;

  const next = () => dispatch('next')

  word = words[Math.floor(Math.random() * words.length)];

  const changeWord = () => word = words[Math.floor(Math.random() * words.length)];
</script>


<main>
  <div class="card">
    <h2>The word is <i class="white">{word}</i></h2>
    <br>
    <button on:click={changeWord} class="btn gray">DIFFERENT WORD</button>
    <br>
    <button on:click={next} class="btn">CONFIRM</button>
  </div>
</main>
