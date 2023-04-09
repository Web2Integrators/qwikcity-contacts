import { component$ } from "@builder.io/qwik";


export const Favorite = component$(()=>{
    return (
        <form
	
>
	<button
		disabled={loading}
		class="disabled:cursor-wait"
		name="favorite"
		value={favorite ? 'false' : 'true'}
		aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
	>
		{#if favorite}
			<span class="text-orange-500">
				<StarSolidIcon />
			</span>
		{:else}
			<StarIcon />
		{/if}
	</button>
</form>
    )
})