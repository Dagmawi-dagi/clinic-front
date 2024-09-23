// list_header.vue will use this to create header tabs for data_list
// list_raw will use this to display the raw items accordingly 

export const  a_heads =  {
  "user id" : { "width": "120px", bg:'cyan', tx:'#000' },
  "user" : { "width": "120px", bg:'cyan', tx:'#000' },
  "createdAt" : { "width":  "120px"},
  "body" : { "grow":  true },
}

export const  b_heads =  {
  "logo" : { "width": "150px" },
  "name" : { "width":  "120px"},
  "subtopics" : { "grow":  true},
}

export const  users_heads =  {
  "fullName" : { "width": "150px" },
  "userName" : { "width":  "120px"},
  "role" : { "width":  "120px"},
  "phoneNumber" : { "width":  '120px'},
}


export const  emergency_contacts_heads =  {
  "name" : { "width": "150px" },
  "phone_number" : { "width":  "120px"},
  "createdAt" : { "width":  '120px'},
}


export const  warning_heads =  {
  "allergy" : { "width": "150px" },
  "behavior" : { "width":  "120px"},
  "chronic_diseases" : { "width":  "120px"},
  "createdAt" : { "width":  '120px'},
}

export const  external_medical_docs_heads =  {
  "scanned_docs" : { "grow":true },
  "createdAt" : { "width":  '120px'},
  "updatedAt" : { "width":  '120px'},
}

export const  appointments_heads =  {
  "date" : { "width":"120px" },
  "comment" : { "width":  '120px'},
  "appointed_by" : { "width":  '120px'},
  "createdAt" : { "width":  '120px'},
}

export const  health_insurance_heads =  {
  "company_name" : { "width":"120px" },
  "insurance_number" : { "width":  '120px'},
  "percent" : { "width":  '120px'},
  "address" : { "width":  '120px'},
  "createdAt" : { "width":  '120px'},
}


export const  deposites_heads =  {
  "deposit_amount" : { "width":"120px" },
  "current_amount" : { "width":  '120px'},
  "payed_invoices" : { "width":  '120px'},
  "withdrawn" : { "width":  '120px'},
  "createdAt" : { "width":  '120px'},
}


export const  credit_heads =  {
  "invoice" : { "width":"120px" },
  "amount" : { "width":  '120px'},
  "payed" : { "width":  '120px'},
  "createdAt" : { "width":  '120px'},
}


export const  invoice_heads =  {
  "type" : { "width":"120px" },
  "destination" : { "width":  '120px'},
  "service" : { "width":  '120px'},
  "createdAt" : { "width":  '120px'},
}


export const  prescroption_heads =  {
 // not from DB but from form creator
}

export default { 
  a_heads,
  b_heads,
  users_heads,
  emergency_contacts_heads,
  warning_heads,
  external_medical_docs_heads,
  appointments_heads,
  health_insurance_heads,
  deposites_heads,
  credit_heads,
  invoice_heads
}