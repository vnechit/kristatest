import { defineStore } from "pinia"
import axios from "axios"

const url = 'http://localhost:3000/posts'

export const usePostsStore = defineStore ('postsStore', {
    state: () => ({
        posts: []
    }),
    actions: {
        async getData () {
            await axios.get(url)
            .then(response => {
                if (response.status === 200) {
                    this.posts = response.data
                }
            })
            .catch(e => {
                console.log(e.message)
            })
        },
        async removePost (id) {
            await axios.delete(url, {
                    data: {
                        id: id
                    }
                }).then(response => {
                    if (response.status === 200){
                        this.posts = this.posts.filter((n) => n.id !== id)
                    }
                }).catch(e => {
                    console.log(e.message)
                })
        },
        async savePost (data) {
            await axios.put(url, {
                    id: data.id,
                    name: data.name,
                    text: data.text,
                    email: data.email
                })
                    .then(response => {
                        if (response.status === 200) {
                            const index = this.posts.findIndex(n => n.id === data.id);
                            if (index !== -1) {
                                this.posts[index].name = data.name
                                this.posts[index].email = data.email
                                this.posts[index].text = data.text
                            }
                            return true
                        } else {
                            return false
                        }
                    })
                    .catch(e => {
                    console.log(e.message)
                })
        },
        async send (data) {
            await axios.post(url, {
                    name: data.name,
                    text: data.text,
                    email: data.email
                })
                .then(response => {
                    if (response.status === 201) {
                        this.posts.push({
                            id: response.data,
                            name: data.name,
                            email: data.email,
                            text: data.text
                        })
                    }
                })
                .catch(e => {
                    this.errors.push(e)
                })
        }
    }
})