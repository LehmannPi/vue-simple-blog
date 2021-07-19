import { ref } from "vue";

const useTags = (posts) => {
    const tags = ref([])
    const tagSet = new Set()

    posts.forEach(element => {
        element.tags.forEach(tag => tagSet.add(tag))
    });

    tags.value = [...tagSet] 
    // "spreads" the elements of the Set/Object into de array

    return { tags }
}

export default useTags