<script setup>
// comps
import RInputOne from '../form/R-input-one.vue';
import custom_btn_1 from '../Reusable/button/custom_btn_1.vue';

</script>

<template>
  <nav>
    <div class="container">
      <div class="company"  @click="$router.push('/')" >
        <img src="/src/assets/clinic logo.png" class="logo">
        <span class="name">My Clinic</span>
      </div>

      <div class="search-container">
        <RInputOne :id="'1'" :type="'text'" :label="'sdfdf'" :label-display="'inline'" :placeholder="'first_name'"  class="input" />
        <RInputOne :id="'2'" :type="'text'" :label="'sdfdf'" :label-display="'inline'" :placeholder="'first_name'"  class="input" />
        <RInputOne :id="'3'" :type="'text'" :label="'sdfdf'" :label-display="'inline'" :placeholder="'first_name'"  class="input" />
        <RInputOne :id="'4'" :type="'text'" :label="'sdfdf'" :label-display="'inline'" :placeholder="'first_name'"  class="input" />
        <RInputOne :id="'7'" :type="'text'" :label="'sdfdf'" :label-display="'inline'" :placeholder="'first_name'"  class="input" />
      </div>
      <custom_btn_1  
        :spinner="{color: '#fff',width: '1rem'}" 
        :loading_state="true" 
        > 
        search pateint 
        </custom_btn_1>

    </div>
  </nav>
</template>

<style scoped lang="scss">
@import './style/top-nav.scss';
</style>