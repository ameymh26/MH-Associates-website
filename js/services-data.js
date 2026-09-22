/*
  services-data.js
  ------------------------------------------------------
  Edit this file to change what's shown for each of the 7
  services. It's used by BOTH index.html (overview cards)
  and services.html (detail panels) — one edit updates both.

  Fields:
    id     - used in the URL, e.g. services.html#gst  (no spaces)
    num    - display number, "01".."07"
    name   - service name shown in nav / headings
    short  - one-line summary shown on the Home page card
    body   - array of bullet points shown on the Services page
*/

const services = [
  {
    id: "accounts", num: "01", name: "Accounts",
    short: "Bookkeeping, monthly closes and statutory financial reporting.",
    body: [
      "Maintenance of accounting records",
      "Finalisation of monthly accounts",
      "Compiling monthly Profit & Loss Account, Balance Sheet and Cash Flow",
      "Review of cash-credit / term-loan usage and other treasury operations",
      "Support through statutory audit"
    ]
  },
  {
    id: "finance", num: "02", name: "Finance",
    short: "Financial planning, risk analysis and long-range projections.",
    body: [
      "Critical review of the organisation's financial position",
      "Identification of risks through financial analysis tools",
      "Time-bound action plans to mitigate identified risks",
      "Implementation and periodic review against targets",
      "Financial projections for the next 5 years",
      "SWOT analysis and vision-to-KRA execution planning"
    ]
  },
  {
    id: "costing", num: "03", name: "Costing",
    short: "Product costing systems built for real manufacturing decisions.",
    body: [
      "Identifying requirements for a product costing system",
      "Costing system implementation",
      "Compiling product-wise manufacturing cost",
      "Compiling product-wise profitability for management decisions",
      "Identifying cost-control areas and corresponding measures",
      "Implementing budgetary systems and forecasting",
      "Periodic review of cost controls and budgetary effectiveness"
    ]
  },
  {
    id: "audit", num: "04", name: "Audit",
    short: "Internal, stock, cost and inventory audits with practical fixes.",
    body: [
      "Internal audit across all functions and departments",
      "Study of commercial processes from material requirement to sales realisation",
      "Critical review of present internal-control procedures",
      "Identifying weak or missing controls, with recommendations",
      "Physical stock counting and books-vs-physical reconciliation",
      "Inventory ageing and obsolescence analysis",
      "Cost audit, compliance and filing of Cost Audit reports with the ROC"
    ]
  },
  {
    id: "gst", num: "05", name: "GST",
    short: "Return filing, reconciliation and audit support.",
    body: [
      "Compiling data for monthly GST returns",
      "Filing monthly, half-yearly and annual GST returns",
      "Recommending systems to avoid GST ITC mismatches",
      "Assistance during GST audits"
    ]
  },
  {
    id: "income-tax", num: "06", name: "Income Tax",
    short: "Advance tax, tax audit data and annual return filing.",
    body: [
      "Advance tax calculations",
      "Compiling data required for Tax Audit",
      "Filing of Annual Income Tax Return (ITR)"
    ]
  },
  {
    id: "hr", num: "07", name: "HR",
    short: "Payroll, appraisal systems and human resource frameworks.",
    body: [
      "Payroll processing",
      "Onboarding",
      "Training-need identification, individual and group training",
      "Designing and implementing a customised performance-appraisal system",
      "Succession planning",
      "Compiling HR policies, SOPs and frameworks",
      "Review of employee welfare programmes"
    ]
  }
];
