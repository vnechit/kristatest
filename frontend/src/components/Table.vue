<template>
    <div class="div-table">
        <h2 class="table-title">Записи</h2>
        <table class="posts">
            <thead class="posts-head">
                <tr>
                    <div class="row">
                        <th style="width: 20px;">id</th>
                        <th>name</th>
                        <th>text</th>
                        <th>email</th>
                        <th></th>
                    </div>
                </tr>
            </thead>
            <tbody class="posts-body">
                <tr v-for="post of posts" :key="post.id" >
                    <app-row :info="post"></app-row>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import SingleRow from './Row.vue'

export default {
    name: 'MyTable',
    components: {
        'app-row': SingleRow,
    },
    props: ['posts'],
    data () {
        return {}
    },
}
</script>

<style>
    .div-table {
        display: flex;
        flex-direction: column;
        margin-left: 5rem;
        margin-right: 5rem;
    }
    .posts {
        width: 100%;
    }
    .row {
        display: flex;
    }
    .row th {
        width: 150px;
        margin-right: 2rem;
    }
</style>