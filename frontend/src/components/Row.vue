<template>
    <div class="row">
        <th style="width: 20px;">{{ id }}</th>
        <th>
            <input type="text" :disabled="disable" v-model="name">
        </th>
        <th>
            <input type="text" :disabled="disable" v-model="text">
        </th>
        <th>
            <input type="text" :disabled="disable" v-model="email">
        </th>
        <th>
        <div class="buttons">
            <button type="button" class="change-button" v-show="!changing" @click="change">Редактировать</button>
            <button type="button" class="save-button" v-show="changing" @click="save">Сохранить</button>
            <button class="delete-button" @click="remove">Удалить запись</button>
        </div>
    </th>
    </div>
</template>

<script>
    export default {
        name: 'SingleRow',
        props: ['info'],
        data () {
            return {
                changing: false,
                disable: true,
                id: 1,
                name: '',
                email: '',
                text: '',
                postsStore: usePostsStore()
            }
        },
        methods: {
            change () {
                this.changing = !this.changing
                this.disable = !this.changing
            },
            async save () {  
                const ans = this.postsStore.savePost({
                    id: this.id,
                    name: this.name,
                    email: this.email,
                    text: this.text
                })
                if (ans) {
                    this.changing = !this.changing
                    this.disable = !this.disable
                }
            },
            async remove () {
                this.postsStore.removePost(this.id)
            },
        },
        mounted () {
            this.name = this.info.name
            this.email = this.info.email
            this.text = this.info.text
            this.id = this.info.id
        }
    }
</script>

<script setup>
    import { usePostsStore } from './../stores/PostsStore'
</script>

<style>
    .buttons {
        display: flex;
        flex-direction: row;
        gap: 10px;
        width: 310px;
    }
    .buttons button {
        width: 150px;
    }
</style>