// those are for the accordions on the sidebar(side Nar)

export default [
  {
    "role": 'cashier/reception',
    "routes" : [
      {
        "name": "register pateint",
        "route_name": "register-pateint",
      },
      {
        "name": "invoices queue",
        "route_name": "invoices-queue",
      },
      {
        "name": "deposites",
        "route_name": "pateint-deposites",
      },
      {
        "name": "credits",
        "route_name": "pateint-credits",
      },
    ]
  },

  {
    "role": 'triage',
    "routes" : [
      {
        "name": "triage queue",
        "route_name": "triage-queue",
      },
    ]
  },

  {
    "role": 'nurse',
    "routes" : [
      {
        "name": "nurse queue",
        "route_name": "nurse-queue",
      },
    ]
  },

  {
    "role": 'physician',
    "routes" : [
      {
        "name": "physician queue",
        "route_name": "physician-queue",
      },
      {
        "name": "finished services-requests",
        "route_name": "finished-services-requests",
      }
    ]
  },

  {
    "role": 'finance',
    "routes" : [
      {
        "name": "health insurance",
        sub_routes:[
          {
            "name": "insurance companies",
            "route_name": "insurance-companies",
          },
          {
            "name": "insurance invoices",
            "route_name": "insurance-invoices",
          }
        ]

      },
      {
        "name": "invoices",
        "route_name": "invoices-queue",
      },
    ]
  },

  {
    "role": 'store',
    "routes" : [
      {
        "name": "items",
        "route_name": "store-items",
      },
      {
        "name": "requested items",
        "route_name": "store-requested-items",
      },
      {
        "name": "my history",
        "route_name": "my-store-history",
      },
      // {
      //   "name": "lab store",
      //   "route_name": "lab-store",
      // },
    ]
  },

  {
    "role": 'admin',
    "routes" : [
      {
        "name": "users",
        "route_name": "users",
      },
      {
        "name": "departments",
        "route_name": "departments",
      },
      {
        "name": "configurations",
        sub_routes:[
          {
            "name": "prescription_form",
            "route_name": "prescription-form",
          },
          {
            "name": "service_form",
            "route_name": "service-form",
          },
          {
            "name": "clinical_doc_form",
            "route_name": "clinical-doc-form",
          },
          {
            "name": "pateint archive access control",
            "route_name": "pateint-archive-access-control",
          },
          {
            "name": "employee archive access control",
            "route_name": "employee-archive-access-control",
          },
          {
            "name": "health facilty info",
            "route_name": "health-facilty-info",
          },
          {
            "name": "health facilty config",
            "route_name": "health-facilty-config",
          },
        ]
      },
      {
        "name": "services managment",
        sub_routes:[
          {
            "name": "examinations",
            "route_name": "service-examinations",
          },
          {
            "name": "procedures",
            "route_name": "procedures-examinations",
          },
        ]
      },

      {
        "name": "simptoms",
        "route_name": "simptoms",
      },

      {
        "name": "diag list",
        "route_name": "diag-list",
      },

      {
        "name": "database backup",
        "route_name": "database-backup",
      },

      {
        "name": "attendance",
        "route_name": "attendance",
      },
    ]
  },

  {
    "role": 'HR',
    "routes" : [
      {
        "name": "employees",
        "route_name": "employees",
      },
    ]
  },

  {
    "role": 'labratologiest',
    "routes" : [
      {
        "name": "labratory queue",
        "route_name": "labratory-queue",
      },
      {
        "name": "lab store",
        "route_name": "lab-store",
      },
      {
        "name": "servcice managment",
        "route_name": "labratory-servcice-managment",
      },
    ]
  },

  {
    "role": 'radiographer',
    "routes" : [
      {
        "name": "radiographer queue",
        "route_name": "radiographer-queue",
      },
    ]
  },

  {
    "role": 'radiologiest',
    "routes" : [
      {
        "name": "radiologiest queue",
        "route_name": "radiologiest-queue",
      },
      {
        "name": "servcice managment",
        "route_name": "x-ray-servcice-managment",
      },
    ]
  },

  

]