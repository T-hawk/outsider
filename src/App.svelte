<script>
  import Form from "./Form.svelte"
  import Roles from "./Roles.svelte"
  import Timer from "./Timer.svelte"
  import SelectWord from "./SelectWord.svelte"
  import SelectMaster from "./SelectMaster.svelte"
  import NoSleep from 'nosleep.js'

  var noSleep = new NoSleep();

  let states = {
    SELECT_MASTER: 4,
    SELECT_WORD: 3,
    FORM: 2,
    ROLE_DISTRIB: 1,
    TIMER: 0
  }
  let possibleRoles = {
    INSIDER: "insider",
    COMMONS: "commons"
  }

  var state = states.FORM
  var roles = []
  var players = 4

  var words;
  var word;

  fetch("words.json", {headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}})
    .then(response => response.json())
    .then(json => {
      words = json;
    })

  function generateGame() {
    state = states.SELECT_MASTER;
    roles = [possibleRoles.INSIDER]
    for (let i = 2; i < players; i++) { roles.push(possibleRoles.COMMONS) }
    shuffle(roles)
  }

  function selectWord() {
    state = states.SELECT_WORD;
  }

  function showRoles() {
    state = states.ROLE_DISTRIB;
  }

  function startTimer() {
    state = states.TIMER
  }

  function reset() {
    state = states.FORM
    roles = []
    players = 4
  }

  function shuffle(array) {
    for(let i = array.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }

  document.addEventListener('click', function enableNoSleep() {
    document.removeEventListener('click', enableNoSleep, false);
    noSleep.enable();
  }, false);
</script>

<main>
  {#if state == states.FORM}
    <Form on:next={generateGame} bind:players={players} />
  {:else if state == states.SELECT_MASTER}
    <SelectMaster on:next={selectWord} />
  {:else if state == states.SELECT_WORD}
    <SelectWord words={words} bind:word={word} on:next={showRoles} />
  {:else if state == states.ROLE_DISTRIB}
    <Roles roles={roles} word={word} on:complete={startTimer} />
  {:else if state == states.TIMER}
    <Timer on:complete={reset} />
  {/if}
</main>
