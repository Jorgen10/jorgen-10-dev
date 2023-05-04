<script>
  import { onMount } from "svelte";
    
    const test = [];
    let home;
    let nav;
    onMount(() => {
        let test;
    })
</script>

<div style="display: flex;" bind:this={nav} id="navbar">
    <a href="/"><img id="icon" src="images/icon.png" alt="Icon"></a>
    <a href="/" class="item" bind:this={home}>Home</a>
    <a href="/map" class="item">Map</a>
</div>

<style>
    #navbar {

        padding: 0px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        border: 2px black solid;
        border-radius: 10px;
    }
    .item {
        padding: 4px 2px 4px 2px;
        border-radius: 10px;
        margin: 2px;
        margin-bottom: 0px;
        border: 2px black solid;
        font-size: 30px;
        color: black;
        text-decoration: none;
    }
    #icon {
        border-radius: 50%;
        margin: 4px;
        height: 40px;
    }
</style>

<slot/>