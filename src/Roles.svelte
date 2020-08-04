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
            <h1 class="white">{roles[roleIdx]}</h1>
            {#if roles[roleIdx] != "commons"}
                <h2>The word is <i class="white">{word}</i></h2>
            {/if}
            <br>
            <div class="card-btm">
                <h3>Keep looking at the screen for</h3>
                <h1>{time}</h1>
            </div>
        {:else}
            {#if roleIdx != -1}
                <h1>Pass it on</h1>
                <br>
            {/if}
            <h2>Tap to reveal role</h2>
        {/if}
    </div>
</main>