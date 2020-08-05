import axios from 'axios'

export default axios.create({
    baseURL:"https://645d22026738.ngrok.io",
    headers:{
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbXBhaW9tYXJjZWxvQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoic2VjcmV0byIsImlhdCI6MTU5NjU4NjgwMCwiZXhwIjoxNTk2NjA0ODAwfQ.93D-ZNc3BL7gwBkXM6Qq6jnZNTs0waqpqziLEiulsZQ"

    }
});

