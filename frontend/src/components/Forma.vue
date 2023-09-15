<template>
    <div class="form-div">
        <h2 class="forma-title">Отправить запись</h2>
        <form class="form">
            <input type="text" class="name" v-model="name" placeholder="Введите имя">
            <input type="text" class="text" v-model="text" placeholder="Введите текст">
            <input type="text" class="email" v-model="email" placeholder="Введите email">
            <button class="btn-send" @click="send" type="submit">Отправить</button>
        </form>
        <p class="success-sending" v-show="success">Запись была успешно добавлена</p>
    </div>
</template>

<script>
    import { usePostsStore } from './../stores/PostsStore'
    import { mapStores } from 'pinia';

    export default {
        name: 'MyForma',
        data () {
        return {
            name: '',
            text: '',
            email: '',
            success: false,
        }
        },
        methods: {
            async send (event) {
                event.preventDefault();
                const ans = await this.postsStoreStore.send({
                    name: this.name,
                    email: this.email,
                    text: this.text
                })
                if (ans === true) {
                    this.name = ''
                    this.text = ''
                    this.email = ''
                    this.success = true
                }
            } 
        },
        computed: {
            ...mapStores(usePostsStore)
        }
    }
</script>

<style scoped>
    .name, .text, .email {
        margin-right: 1rem;
    }
    .errors {
        color: red;
    }
    .success-sending {
        color: green;
    }
</style>