export const Dictionarydata = {
  audit_working: 'Audit Working',
  suggested_edit: 'Suggested Edit',
  approved: 'Approved',
  pending: 'Pending',
  resolved: 'Query Reverted',
  audit_working: 'Audit Working',
  pending: 'Pending',
  operation_and_legal_working: 'Opration And Legal Working',
  file_sent_for_correction: 'File Sent For Correction',
  file_received_to_ho: 'File Received To HO',
  sent_file_to_ho: 'File sent  To HO',
  od_calling: 'OD Calling Pending',
  opration: 'Opration',
  rcu_working: 'RCU Working',
  rcu: 'RCU',
  audit: 'Audit',
  technical: 'Technical',
  approved: 'Approved',
  pending: 'Pending',
  success: 'Success',
  pending: 'Pending',
  error: 'Error',
  cm: 'CM',
  deviation: 'Deviation',
  disbursal_maker: 'Disbursal Maker',
  auditChecker: 'Audit Checker',
  checker_assigner_list: 'Checker Assigner List',
  maker_approver: 'Maker Approver',
  techical_approver: 'Technical Approver',
  ruc_approver: 'RCU Approver',
  audit_approver: 'Audit Approver',
  audit_approver: 'Legal Approver',
  rejected_by_cm: 'Rejected By CM',
  send_to_cm: 'Edit Suggested to CM',
  send_to_rcu: 'Edit Suggested to RCU',
  send_to_audit: 'Edit Suggested to Audit',
  payment_done: 'Payment Done',
  customer_on_hold_by_BCM: 'Customer On Hold By BCM',
  customer_not_interested_by_BCM: 'Customer Not Interested By BCM',
  od_calling_pending: 'Od Calling Pending',
  payment_pending: 'Payment Pending',
  query_reverted_by_cm: 'Query Resolved By CM',

  loan_application: 'Loan Applicaton',
  disbursement: 'Disbursement',
  approvals: 'Approvals',
  property_papers: 'Property Papers',
  reports: 'Reports',
  insurance: 'Insurance',
  others: 'Others',
  stamp_calculator: 'Stamp Calculator',
  pdc: 'PDC',
  nach: 'NACH',
  income_documents: 'Income Documents',
  loan_agreement: 'Loan Agreement',

  approvals_approvals: 'Approvals',
  kycCustomer1_Applicant: 'Customer1 Applicant',
  kycCustomer3_Guarantor: 'Customer3 Guarantor',
  reports_rcu: 'RCU',
  reports_field_investigation_report: 'Field Investigation Report',
  reports_legal_report: 'Legal Report',
  reports_valuation_report: 'Valuation Report',
  property_papers_property_papers: 'Property Papers',
  loan_agreement_property: 'Property',
  loan_agreement_loan_bt_undertaking: 'Loan BT Undertaking',
  loan_agreement_entire_loan_agreement: 'Entire Loan Agreement',
  loan_agreement_affidavit: 'Affidavit',
  loan_agreement_agreement_signing_photos: 'Signing Photos',
  disbursement_cam: 'CAM',
  disbursement_disbursal_report_or_voucher: 'Disbursal Report or Voucher',
  disbursement_sanction_letter: 'Sanction Letter',
  disbursement_cibil_report: 'CIBIL Report',
  disbursement_crif_report: 'CRIF Report',
  insurance_insurance_form: 'Insurance Form',
  insurance_insurance_calculator: 'Insurance Calculator',
  others_undertaking: 'Undertaking',
  others_affidavit: 'Affidavit',
  others_bsv: 'BSV',
  others_noc: 'NOC',
  loan_application_electricity_bill: 'Electricity Bill',
  loan_application_loan_application_form: 'Loan Application Form',
  loan_application_udhyam_resistration: 'UDHYAM Registration',
  stamp_calculator_stamp_calculator: 'Stamp Calculator',
  pdc_pdc: 'PDC',
  nach_nach: 'NACH',
  income_documents_income_proof: 'Income Proof',
  income_documents_bank_statement: 'Bank Statement',
  cam_sheet_or_income_doc_cam: 'CAM Sheet / Income Document',
  nach_or_pdc_pdc_rep_acc: 'NACH Form (If Scan Based)',
  legal_and_technical:'Legal department',
  operations:'Operation department'

};


export const documentNmeForJson=[
  {
    documentName:"kyc",
    subDocuments:[
         {
          documentName:"kyc_kyc_report",
         }
    ]
  },
  {
    documentName:"loan_application",
    subDocuments:[
         {
          documentName:"loan_application_loan_application_form",
         },
         {
          documentName:"loan_application_repayment_account",
         },
         {
          documentName:"loan_application_electricity_bill",
         }

    ]
  }
  ,
  {
    documentName:"pd_sheet",
    subDocuments:[
         {
          documentName:"pd_sheet_pd_sheet",
         }
    ]
  }
  ,
  {
    documentName:"property_papers",
    subDocuments:[
         {
          documentName:"property_papers_property_papers",
         },
         {
          documentName:"property_papers_jamabandi"
         },
         {
          documentName:"property_papers_others"
         }
    ]
  }
  ,
  {
    documentName:"reports",
    subDocuments:[
         {
          documentName:"reports_a_cibil",
         },
         {
          documentName:"reports_a_crif",
         },
         {
          documentName:"reports_c_cibil",
         },
         {
          documentName:"reports_c_crif",
         },
         {
          documentName:"reports_g_crif_or_cibil",
         },
         {
          documentName:"reports_valuation_report",
         },
         {
          documentName:"reports_legal",
         },
         {
          documentName:"reports_rcu",
         },
         {
          documentName:"reports_fi",
         }
    ]
  }
  ,
  {
    documentName:"cam_sheet_or_income_doc",
    subDocuments:[
         {
          documentName:"cam_sheet_or_income_doc_cam",
         },
         {
          documentName:"cam_sheet_or_income_doc_income_proof",
         },
         {
          documentName:"cam_sheet_or_income_doc_bank_statement",
         }
    ]
  }
  ,
  {
    documentName:"sanction_letter",
    subDocuments:[
         {
          documentName:"sanction_letter_sanction_letter",
         }
    ]
  }
  ,
  {
    documentName:"loan_agreement",
    subDocuments:[
         {
          documentName:"loan_agreement_complete_agreement_booklet",
         },
         {
          documentName:"loan_agreement_affidavit",
         },
         {
          documentName:"loan_agreement_stamp_calculator",
         },
         {
          documentName:"loan_agreement_loan_bt_undertaking",
         },
         {
          documentName:"loan_agreement_udhyam_resistration",
         },

    ]
  }
  ,
  {
    documentName:"nach_or_pdc",
    subDocuments:[
         {
          documentName:"nach_or_pdc_pdc_rep_acc",
         },
         {
          documentName:"nach_or_pdc_pdc_lady_coapp",
         },
         {
          documentName:"nach_or_pdc_nach_form",
         },
         {
          documentName:"nach_or_pdc_bsv",
         }
        ]
  }
  ,
  {
    documentName:"insurance",
    subDocuments:[
         {
          documentName:"insurance_insurance_for_gi",
         },
         {
          documentName:"insurance_insurance_for_life",
         },
         {
          documentName:"insurance_insurance_calculator",
         }
    ]
  }
  ,
  {
    documentName:"approvals",
    subDocuments:[
         {
          documentName:"approvals_approvals",
         }
    ]
  }
  ,
  {
    documentName:"disbursement",
    subDocuments:[
         {
          documentName:"disbursement_voucher_or_report",
         }
    ]
  }
  ,
  {
    documentName:"others",
    subDocuments:[
         {
          documentName:"others_undertaking",
         },
         {
          documentName:"others_noc",
         },
         {
          documentName:"others_others",
         }
    ]
  }
]