<script>
	import Form from "./Form.svelte"
	import Roles from "./Roles.svelte"

	let states = {
		FORM: 2,
		ROLE_DISTRIB: 1
	}
	let possibleRoles = {
		MASTER: "master",
		INSIDER: "insider",
		COMMONS: "commons"
	}

	var state = states.FORM
	var roles = []
	var players = 4
	
	var word;

	function generateGame() {
		fetch("words.json", {headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}})
			.then(response => response.json())
			.then(json => {
				word = json[Math.floor(Math.random()*json.length)];
			})

		state = states.ROLE_DISTRIB
		roles = [possibleRoles.MASTER, possibleRoles.INSIDER]
		for (let i = 2; i < players; i++) { roles.push(possibleRoles.COMMONS) }
		shuffle(roles)
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

</script>

<main>
	{#if state == states.FORM}
		<Form on:next={generateGame} bind:players={players} />
	{:else if state == states.ROLE_DISTRIB}
		<Roles roles={roles} word={word} on:complete={reset} />
	{/if}
</main>