<template>
    <div class="tag-cloud">
        <h3>Tags</h3>
        <div v-for="tag in tags" :key="tag">
            <router-link :to="{ name: 'Tag', params: { tag: tag } }">
                #{{ tag }}
            </router-link>
        </div>
        <div></div>
    </div>
</template>

<script>
import useTags from "../composables/useTags";

export default {
    props: ["posts"],
    setup(props) {
        const { tags } = useTags(props.posts);

        return { tags };
    },
};
</script>

<style>
    .tag-cloud {
        padding: 10px;
    }
    .tag-cloud h3 {
        border-bottom: 1px solid #CEB77B;
        padding: 16px 8px;
        color: #8a6132;
    }
    .tag-cloud div {
        display: inline-block;
        padding: 10px;
    }
    .tag-cloud a {
        color: #CEB77B;
        text-decoration: none;
    }
    .tag-cloud a.router-link-active {
        color: #8a6132;
        font-weight: bold;
    }
</style>