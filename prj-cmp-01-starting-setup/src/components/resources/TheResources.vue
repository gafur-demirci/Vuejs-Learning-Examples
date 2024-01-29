<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode"> Stored Resources
        </base-button>
        <base-button @click="setSelectedTab('add-resources')" :mode="addResButtonMode">Add Resource
        </base-button>
    </base-card>
    <KeepAlive>
        <component :is="selectedTab"></component>
    </KeepAlive>
</template>

<script>

import StoredResources from './StoredResources.vue';
import AddResources from './AddResources.vue';

export default {
    components: {
        StoredResources,
        AddResources
    },
    data() {
        return {
            selectedTab: 'stored-resources',
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The official Vue.js documentation.',
                    link: 'https://vuejs.org',
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'Learn to Google',
                    link: 'https://www.google.com',
                },
            ],
        };
    },
    provide() {
        return {
            resources: this.storedResources,
            addResource: this.addResource,
            removeResource: this.removeResource
        }
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab === 'stored-resources' ? null : 'flat'
        },
        addResButtonMode() {
            return this.selectedTab === 'add-resources' ? null : 'flat'
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        addResource(title, description, link) {
            const newResource = {
                id: new Date().toISOString(),
                title,
                description,
                link
            };
            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources';
        },
        removeResource(resId) {
            /**
             * Orijinal array yeniden override edildiği için provide edilenin yerine geçmez yeni bir array olarak
             * bellekte tutulur. Vue provide içerisinde ki tanımları referans olarak bellekte tuttuğu için bu tanımlar
             * üzerinde işlem yaparken yeniden oluşturup değiştirmek yerine var olanı kullanmak gerekmektedir.
                 this.storedResources = this.storedResources.filter(res => {res.id !== resId})
                console.log(this.storedResources);
             */
            const resIndex = this.storedResources.findIndex(res => res.id === resId);
            // orijinal array üzerinden parçalama yapar yeni array oluşturmaz.
            this.storedResources.splice(resIndex,1);
        }
    }
}

</script>