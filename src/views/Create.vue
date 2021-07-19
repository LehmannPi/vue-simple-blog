<template>
    <div class="create">
        <form @submit.prevent="submission">
            <label>Title:</label>
            <input v-model="title" type="text" required />
            <label>Content:</label>
            <textarea v-model="body" required></textarea>
            <label>Tags (hit ente to add a tag): </label>
            <input
                v-model="tag"
                type="text"
                @keydown.enter.prevent="handleKeyDown"
            />
            <div class="pill" v-for="tag in tags" :key="tag">#{{ tag }}</div>
            <button>Add Post</button>
        </form>
    </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
    setup() {
        const title = ref("");
        const body = ref("");
        const tag = ref("");
        const tags = ref([]);

        const router = useRouter();
        // Can use log(router) to check methods and whatnot

        const handleKeyDown = () => {
            if (!tags.value.includes(tag.value)) {
                tag.value = tag.value.replace(/\s/g, ""); // removes whitespaces
                tags.value.push(tag.value);
            }
            tag.value = "";
        };

        const submission = async () => {
            const post = {
                title: title.value,
                body: body.value,
                tags: tags.value,
            };
            await fetch("http://localhost:3000/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(post),
            });

            router.push({ name: "Home" });
        };

        return { title, body, tag, handleKeyDown, tags, submission };
    },
};
</script>

<style>
form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
}
input,
textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
}
textarea {
    height: 160px;
}
label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
}
label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #8a6132;
    /* NEEDS label position: relative */
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
}
button {
    display: block;
    margin-top: 30px;
    background: #8a6132;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px;
}
.pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: white;
    background: #71231b;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
}
</style>