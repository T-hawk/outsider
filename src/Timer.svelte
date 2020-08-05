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
            time = 120
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
            <h1>Tap to begin game</h1>
        {:else if state == states.RUNNING}
            <h1>{Math.floor(time/60)}:{time%60}</h1>
        {:else if state == states.FINISHED}
            <h1>Game is complete</h1>
        {/if}
    </div>
</main>