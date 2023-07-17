<script>
    import categories from "../../assets/json/categories.json";
</script>

<article>
    <div class="full-section">
        <h1 class="title">/Commands</h1>
        <div class="categories width-w-header">
            {#each categories as category}
                <a class={"category " + category.name} href={category.url}>
                    <h2 class="category-name">{category.name}</h2>
                    <p>{category.description}</p>
                    <svg class="svg-icon">       
                        <image class="svg-icon" xlink:href={category.svgURL} />    
                   </svg>                   
                </a>
            {/each}
        </div>
    </div>
</article>

<style>
    .categories {
        display: flex;
        flex-direction: column;
        gap: var(--padding-m);
    }

    .category {
        position: relative;
        border-radius: var(--padding-s);
        overflow: hidden;
        padding: var(--padding-m);

        transition: margin .2s;
    }

    .category:hover {
        margin-top: .3rem;
    }

    .category-name {
        font-family: "Blocky";
        font-size: xx-large;
    }

    .svg-icon {
        position: absolute;
        height: 130%;
        bottom: -2rem;
        right:  -13rem;
        z-index: -1;
    }
</style>