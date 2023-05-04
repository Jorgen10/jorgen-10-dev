<script>
    import { onMount } from "svelte";

    
    let map;
    onMount(() => {
        
        map.height = window.innerHeight - 69;
        map.width = window.innerWidth-4;
        map.style["margin-top"] = "5px"
        map.style["margin-left"] = "0px"
    })
    
</script>
<iframe src="http://map.amicus.jorgen-10.no:38092/" title="Map" bind:this={map}></iframe>

<style>
    :global(body) {
        padding:0px;
        margin:0px;
    }
</style>