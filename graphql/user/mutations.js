
export const CREATE_USER =
    `mutation createUser($name: String!, $email: String, $password: String) {
        createUser(data: { name: $name, email: $email, password: $password }) {
        name
        email
    }
}`

