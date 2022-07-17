<template>
  <base-card>
    <base-btn
      @click="changeTab('stored-resources')"
      :class="storedResourcesBtnMode"
      >Stored Resources</base-btn
    >
    <base-btn @click="changeTab('add-resource')" :class="addResourceBtnMode"
      >Add Resource</base-btn
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>
<script>
import StoredResources from './StoredResources.vue';
import BaseBtn from '../UI/BaseBtn.vue';
import AddResource from './AddResource.vue';

//const componentContext = {
//  StoredResources: 'stored-resources',
//  AddResource: 'add-resource',
//};

export default {
  components: { StoredResources, AddResource, BaseBtn },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: '1234',
          title: 'Learn-Vue',
          description: 'learn vue learning learning...',
          link: 'http://www.learning.vue.com/',
        },
        {
          id: '4321',
          title: 'Learn-JAVA',
          description: 'learn vue learning learning...',
          link: 'http://www.learning.vue.com/',
        },
      ],
    };
  },
  computed: {
    storedResourcesBtnMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResourceBtnMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  provide() {
    return {
      storedResources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
  methods: {
    changeTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, desc, url) {
      const newResource = {
        id: new Date(),
        title,
        description: desc,
        link: url,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    removeResource(id) {
      // 因為 inject / provide 會使用內存 所以不能回傳新的陣列，而是要直接操作old陣列
      const resourceIndex = this.storedResources.findIndex(
        (resource) => resource.id == id
      );
      this.storedResources.splice(resourceIndex, 1);
      console.log(this.storedResources);
      console.log(this.storedResources.length);
    },
  },
};
</script>
