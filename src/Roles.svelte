<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export var roles = []
  export var word = ""
  var roleIdx = -1

  var timer
  var time = 0
  var showingRole = false

  const complete = () => dispatch("complete")

  function displayRole() {
    if (!showingRole) {
      startTimer()
      roleIdx++
      showingRole = true
    }
  }

  function startTimer() {
    time = 5
    timer = setInterval(tick, 1000)
  }

  function tick() {
    time--
    if (time <= 0) {
      clearInterval(timer)
      showingRole = false
      if (roleIdx >= roles.length - 1) {
        complete()
      }
    }
  }
</script>

<main>
  <div on:click={displayRole} class="card">
    {#if showingRole}
      <h2>Your role is <span class="white">{roles[roleIdx]}</span></h2>
      {#if roles[roleIdx] != "commons"}
        <h3>The word is <i class="white">{word}</i></h3>
      {/if}
      <br>
      <div class="card-btm">
        <h4>Keep looking at the screen for</h4>
        <h2>{time}</h2>
      </div>
    {:else}
      {#if roleIdx != -1}
        <h2>Pass it on</h2>
        <br>
      {:else}
        <h2 class="white">Master, pass it on</h2>
        <br>
      {/if}
      <h3>Tap to reveal role</h3>
    {/if}
  </div>
</main>
