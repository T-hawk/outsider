<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  const complete = () => dispatch("complete")

  var timer
  var time = 0

  var states = {
    WAITING: 2,
    RUNNING: 1,
    FINISHED: 0
  }

  var state = states.WAITING

  const toMMSS = (num) => {
    var sec_num = parseInt(num, 10); // don't forget the second param
    var minutes = Math.floor(sec_num / 60);
    var seconds = sec_num - (minutes * 60);

    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return minutes+':'+seconds;
  }

  function tick() {
    time--
    if (time < 0) {
      clearInterval(timer)
      time = 0
      state = states.FINISHED
    }
  }

  function advance() {
    if (state == states.WAITING) {
      state = states.RUNNING
      time = 60*5
      timer = setInterval(tick, 1000);
    } else if (state == states.FINISHED) {
      state = states.WAITING
      complete()
    }
  }
</script>

<main>
  <div on:click={advance} class="card">
    {#if state == states.WAITING}
      <h2>Tap to begin game</h2>
    {:else if state == states.RUNNING}
      <h1>{toMMSS(time.toString())}</h1>
    {:else if state == states.FINISHED}
      <h2>Game is complete</h2>
    {/if}
  </div>
</main>
