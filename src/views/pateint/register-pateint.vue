<script setup>
//assets
import { marital_status,religion,gender,pateintType,invoice_destination } from '../../assets/select-inputs'
//comps
import RInputOne from '@/components/form/R-input-one.vue';
import MazTabs from 'maz-ui/components/MazTabs';
import MazTabsBar from 'maz-ui/components/MazTabsBar';
import MazTabsContent from 'maz-ui/components/MazTabsContent';
import MazTabsContentItem from 'maz-ui/components/MazTabsContentItem';
import custom_btn_1 from '@/components/Reusable/button/custom_btn_1.vue';
import selectInput from '@/components/form/select-Input.vue';
import { Separator,ComboboxAnchor, ComboboxContent, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxItemIndicator, ComboboxLabel, ComboboxRoot, ComboboxTrigger, ComboboxViewport, TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText, TagsInputRoot } from 'radix-vue'
import { Icon } from '@iconify/vue';
//composables
import { useUserInput } from '@/composables/user-input';
import { use_apicalls_from_store } from '@/composables/store-apicalls';
//store
import { use_custom_invoice_store } from '@/stores/finance/custom_invoice';
import { storeToRefs } from 'pinia';
//vue
import { ref, watch,onMounted } from 'vue';

const  { custom_invoices } = storeToRefs(use_custom_invoice_store())
const { onSubmitDyn,form } = useUserInput(a)
const { apicall_from_store,apicall_from_store_loading,apicall_from_store_response } = use_apicalls_from_store()
// prepare the form as desired
form.value.pateint = {}
form.value.emergency_contact = []
form.value.invoice = []
// for the tabs
const activeTab = ref(null)
const tabs = ['personal info ','address info',' medical adminstration info','emergency contact','payments']
// under the input we need space for displaying validation errors for the inputs
// but we only need the space  if we have error to be displayed
// so on submit btn seTimeout to 400 for the input validation to arrive and create the space we need to display them
const showErrors =  ()=>{
    setTimeout(() => {
        const errMsgs = document.querySelectorAll('.info')
        errMsgs.forEach(el => {
            if(el.innerHTML.includes('err-msg'))  el.classList.add('err_space')
            else  el.classList.remove('err_space')
        });
    }, 300);
}
// for the combobox taginput
const searchTerm = ref('')
watch(form.value.invoice, () => { searchTerm.value = '' }, { deep: true })
const openCombobox = ref(undefined)
onMounted(()=>{ document.querySelector('.TagsInputInput').addEventListener('click', () => { openCombobox.value = !openCombobox.value}) })
function filterFunction(list, searchTerm) {
  return list.filter((person) => {
    return person.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
}
// load the variable invoices
apicall_from_store('custom_invoice','custom_invoice-getList',{ onSucSaveTheJsonOn: 'custom_invoices', token: true})  
// handling emergency_contact user input
const emergency_contact_onSubmitDyn = ref(null)
function createNew_emergency_contact() {
    emergency_contact_onSubmitDyn.value = Math.random()
    showErrors()
    // wait for the input validations to arrive
    setTimeout(() => {
        for (let i = 0; i < form.value.emergency_contact.length; i++) {
            const em = form.value.emergency_contact[i];
            if( JSON.stringify(em).includes('validationFailed') ||  Object.keys(em).length === 0 ) return
        }
        form.value.emergency_contact.push({})
    }, 300);
}
// submit function(register btn)
function a (){
    apicall_from_store('pateint','pateint-registerPateint',{ 
        token: true,
        data: form.value,
        onSucSaveTheJsonOn: 'registered_pateint'
    })
}
// to show front validation errors after register clicked ... we need this cus we are using inputes on diffrent tabs 
function extractValidationErrors(data) {
  const errors = [];
  for (const key in data) {
    // Check if it's an object or an array
    if (typeof data[key] === 'object') {
      if (Array.isArray(data[key])) {
        // If it's an array, loop through each item
        data[key].forEach((item, index) => {
          if (typeof item === 'object') {
            for (const field in item) {
              if (item[field].validationFailed) errors.push({ [`${key}[${index}].${field}`]: item[field] });
            }
          }
        });
      } else {
        for (const field in data[key]) { // Handle objects with 'validationFailed' messages
          if (data[key][field].validationFailed) errors.push({ [field]: data[key][field] });
        }
      }
    }
  }
  return errors;
}

</script>

<template>
    <div class="container">
        <h4>register pateint</h4>
        <MazTabs class="tabs-container" @update:model-value="activeTab = $event">
            <MazTabsBar :items="tabs" class="tabs_bar" :persistent="true"/>
            <MazTabsContent >
                <MazTabsContentItem :tab="1" class="maz-py-4" >
                    <p class="info">first_name
                        <RInputOne class="Rinput" :id="'1'"
                            :placeholder="'first name'"
                            :type="'text'"
                            :onSubmitDyn="onSubmitDyn"
                            :validations="['rq']"
                            :validateOn="'onSubmit'"
                            @inputVal="form.pateint.first_name = $event"
                        />  
                    </p>
                    <p class="info">last_name
                        <RInputOne class="Rinput" :id="'2'"
                            :placeholder="'last name'"
                            :type="'text'"
                            :onSubmitDyn="onSubmitDyn"
                            :validations="['rq']"
                            :validateOn="'onSubmit'"
                            @inputVal="form.pateint.last_name = $event"
                        />
                    </p>
                    <p class="info">middle_name
                        <RInputOne class="Rinput" :id="'3'"
                            :placeholder="'middle name'"
                            :type="'text'"
                            :onSubmitDyn="onSubmitDyn"
                            :validations="['rq']"
                            :validateOn="'onSubmit'"
                            @inputVal="form.pateint.middle_name = $event"
                        />
                    </p>
                    <p class="info">Age
                        <RInputOne class="Rinput" :id="'4'"
                            :placeholder="'Age'"
                            :type="'number'"
                            :onSubmitDyn="onSubmitDyn"
                            :validations="['rq']"
                            :validateOn="'onSubmit'"
                            @inputVal="form.pateint.age = $event"
                        />
                    </p>
                    <p class="info">gender
                        <selectInput class="selectInput" :id="'5'"
                        :items="gender"
                        :item_ref="'name'"
                        :subItems="'asd'"
                        :placeholder="'gender'"
                        :onSubmitDyn="onSubmitDyn"
                        :validations="['rq']"
                        @inputVal="form.pateint.gender = $event"
                        />
                    </p>
                    <p class="info">marital_status
                        <selectInput class="selectInput" :id="'6'"
                        :items="marital_status"
                        :item_ref="'name'"

                        :subItems="'asd'"
                        :placeholder="'marital_status'"
                        :onSubmitDyn="onSubmitDyn"
                        :validations="[]"
                        @inputVal="form.pateint.marital_status = $event"
                        />
                    </p>
                    <p class="info">religion
                        <selectInput class="selectInput" :id="'6'"
                        :items="religion"
                        :item_ref="'name'"

                        :subItems="'asd'"
                        :placeholder="'religion'"
                        :onSubmitDyn="onSubmitDyn"
                        :validations="[]"
                        @inputVal="form.pateint.religion = $event"
                        />
                    </p>
                    <p class="info">occupatio
                        <RInputOne class="Rinput" :id="'8'"
                            :placeholder="'occupation'"
                            :type="'text'"
                            :onSubmitDyn="onSubmitDyn"
                            :validations="['rq']"
                            :validateOn="'onSubmit'"
                            @inputVal="form.pateint.occupation = $event"
                        />
                    </p>
                </MazTabsContentItem>
                <MazTabsContentItem :tab="2" class="maz-py-4">
                    <p class="info">phone_number 
                        <RInputOne class="Rinput" :id="'9'"
                            :placeholder="'phone_number'"
                            :type="'text'"
                            :onSubmitDyn="onSubmitDyn"
                            :validations="['rq']"
                            :validateOn="'onSubmit'"
                            @inputVal="form.pateint.phone_number = $event"
                        />
                    </p>
                    <p class="info">country
                        <RInputOne class="Rinput" :id="'10'"
                            :placeholder="'country'"
                            :type="'text'"
                            :onSubmitDyn="onSubmitDyn"
                            :validations="[]"
                            :validateOn="'onSubmit'"
                            @inputVal="form.pateint.country = $event"
                        />
                    </p>
                    <p class="info">region
                        <RInputOne class="Rinput" :id="'11'"
                            :placeholder="'region'"
                            :type="'text'"
                            :onSubmitDyn="onSubmitDyn"
                            :validations="[]"
                            :validateOn="'onSubmit'"
                            @inputVal="form.pateint.region = $event"
                        />
                    </p>
                    <p class="info">wereda 
                        <RInputOne class="Rinput" :id="'12'"
                            :placeholder="'wereda'"
                            :type="'text'"
                            :onSubmitDyn="onSubmitDyn"
                            :validations="[]"
                            :validateOn="'onSubmit'"
                            @inputVal="form.pateint.wereda = $event"
                        />
                    </p>
                    <p class="info">zone
                        <RInputOne class="Rinput" :id="'13'"
                            :placeholder="'zone'"
                            :type="'text'"
                            :onSubmitDyn="onSubmitDyn"
                            :validations="[]"
                            :validateOn="'onSubmit'"
                            @inputVal="form.pateint.zone = $event"
                        />
                    </p>
                    <p class="info">kebele
                        <RInputOne class="Rinput" :id="'14'"
                            :placeholder="'kebele'"
                            :type="'text'"
                            :onSubmitDyn="onSubmitDyn"
                            :validations="[]"
                            :validateOn="'onSubmit'"
                            @inputVal="form.pateint.kebele = $event"
                        />
                    </p>
                </MazTabsContentItem>
                <MazTabsContentItem :tab="3" class="maz-py-4">
                    <p class="info">pateint type 
                        <selectInput class="selectInput" :id="'77'"
                        :items="pateintType"
                        :item_ref="'name'"

                        :subItems="'asd'"
                        :placeholder="'pateintType'"
                        :onSubmitDyn="onSubmitDyn"
                        :validations="['rq']"
                        @inputVal="form.pateint.type = $event"
                        />
                    </p>
                    <p class="info">insurance
                        <RInputOne class="Rinput" :id="'16'"
                            :placeholder="'insurance'"
                            :type="'text'"
                            :onSubmitDyn="onSubmitDyn"
                            :validations="[]"
                            :validateOn="'onSubmit'"
                            @inputVal="form.pateint.insurance_company = $event"
                        />
                    </p>
                    <p class="info">invoice destination
                        <selectInput class="selectInput" :id="'114'"
                        :items="invoice_destination"
                        :item_ref="'name'"

                        :subItems="'asd'"
                        :placeholder="'invoice_destination'"
                        :onSubmitDyn="onSubmitDyn"
                        :validations="['rq']"
                        @inputVal="form.pateint.invoice_destination = $event"
                        />
                    </p>
                </MazTabsContentItem>
                <MazTabsContentItem :tab="4" class="maz-py-4">
                    <template v-for="(em,i) in form.emergency_contact" :key="em"> 
                        <span class="cancel" @click.stop="form.emergency_contact.splice(i,1);">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </span>
                        <p class="info"> name 
                            <RInputOne class="Rinput" :id="`${19}${i+1}`"
                                :placeholder="'name'"
                                :type="'text'"
                                :validations="['rq']"
                                :validate-on="'blur'"
                                :onSubmitDyn="emergency_contact_onSubmitDyn"
                                @inputVal="form.emergency_contact[i].name = $event"
                            />
                        </p>
                        <p class="info"> Phone Number
                            <RInputOne class="Rinput" :id="`${20}${i+1}`"
                                :placeholder="'phone_number'"
                                :type="'text'"
                                :validations="['rq']" 
                                :validate-on="'blur'"
                                :onSubmitDyn="emergency_contact_onSubmitDyn"
                                @inputVal="form.emergency_contact[i].phone_number = $event"
                            />
                        </p>
                        <Separator class="horizontalSeparator" v-if="i != form.emergency_contact.length -1 "/>
                    </template>
                    <custom_btn_1 style="margin-top: 10px;display: inline-block;"
                        :spinner="{color: '#fff',width: '1rem'}" 
                        :loading_state="false" 
                        @btn="createNew_emergency_contact"
                        >
                        Add Emergency Contact
                    </custom_btn_1>
                </MazTabsContentItem>
                <MazTabsContentItem :tab="5" class="maz-py-4" :style="{width:'fit-content'}">
                    <ComboboxRoot :filter-function="filterFunction" v-model="form.invoice"  v-model:search-term="searchTerm" multiple :open="openCombobox">
                        <ComboboxAnchor class="ComboboxAnchor">
                            <TagsInputRoot  class="TagsInputRoot" :model-value="form.invoice">
                                <TagsInputItem class="TagsInputItem" v-for="(item,i) in form.invoice" :key="i" :value="item">
                                    <TagsInputItemText class="TagsInputItemText">{{ item.name }}</TagsInputItemText>
                                    <TagsInputItemDelete> <Icon icon="lucide:x" /> </TagsInputItemDelete>
                                </TagsInputItem>
                                <ComboboxInput as-child>
                                    <TagsInputInput  id="'9000'" class="TagsInputInput" placeholder="invoices..." @keydown.enter.prevent/>
                                </ComboboxInput>
                            </TagsInputRoot>
                            <ComboboxTrigger>
                                <Icon icon="radix-icons:chevron-down"  class="ComboboxIcon"/>
                            </ComboboxTrigger>
                        </ComboboxAnchor>

                        <ComboboxContent  class="ComboboxContent">
                            <ComboboxViewport class="ComboboxViewport">
                                <ComboboxEmpty class="ComboboxEmpty">{{ `No Results Found With  "${searchTerm}"` }}</ComboboxEmpty>
                                <ComboboxGroup>
                                    <ComboboxLabel class="ComboboxLabel"></ComboboxLabel>
                                    <ComboboxItem class="ComboboxItem" v-for="(option, index) in custom_invoices" :key="index" :value="option">
                                        <ComboboxItemIndicator class="ComboboxItemIndicator"> <Icon icon="radix-icons:check" /> </ComboboxItemIndicator>
                                        <span> {{ option.name }} </span>
                                    </ComboboxItem>
                                </ComboboxGroup>
                            </ComboboxViewport>
                        </ComboboxContent>
                    </ComboboxRoot>
                </MazTabsContentItem>
            </MazTabsContent>
        </MazTabs>
        <custom_btn_1  
            v-if="activeTab === 5"
            :spinner="{color: '#fff',width: '1rem'}" 
            :loading_state="apicall_from_store_loading" 
            :err-msg-display="apicall_from_store_response.errMessage"
            @btn="onSubmitDyn = Math.random(),showErrors()"
        >
        Register pateint 
        </custom_btn_1>
        <template v-for=" (err,i) in extractValidationErrors(form)" :key="i">
            <p v-if="activeTab === 5" style="color: tomato;">
                <span v-for="(k,v) in Object.keys(err)" :key="v">{{ err[k].validationFailed }}</span>
            </p>
        </template>
    </div>
</template>
<style scoped lang="scss">
@import './style/register-pateint.scss';
</style>