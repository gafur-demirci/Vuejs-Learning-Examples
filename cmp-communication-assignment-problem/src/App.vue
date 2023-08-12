<template>
    <div>
        <active-user :userName="user.name" :userAge="user.age"></active-user>
        <user-data @set-data="setUserData"></user-data>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: "User Name",
                age: "User Age"
            }
        }
    },
    methods: {
        // UserData'da ki method emit edildiğinde çalıştırılacak
        setUserData(name, age) {
            // method ile gelen değerleri burada ki user'a geçiyoruz.
            this.user = {
                name: name,
                age: +age
            }

        }
    }
};
</script>