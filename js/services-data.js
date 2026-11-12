/*
  services-data.js
  ------------------------------------------------------
  Edit this file to change what's shown for each of the 8
  services. It's used by BOTH index.html (overview cards)
  and services.html (detail panels) — one edit updates both.

  Fields:
    id     - used in the URL, e.g. services.html#gst-income-tax  (no spaces)
    num    - display number, "01".."08"
    name   - service name shown in nav / headings
    short  - one-line summary shown on the Home page card
    body   - array of bullet points shown on the Services page
*/

const services = [
  {
    id: "accounts", num: "01", name: "Accounts",
    short: "Bookkeeping, monthly closes and statutory financial reporting.",
    body: [
      "Maintenance of accounting records as per applicable Indian accounting standards",
      "Formation of model accounting policies and frameworks",
      "Finalisation of monthly accounts",
      "Compiling monthly Profit & Loss Account, Balance Sheet and Cash Flow",
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
      "Implementation and periodic review system",
      "Financial projections for the next 5 years",
      "SWOT analysis and strategic planning",
      "Identification of short and long term funding requirements",
      "Review of cash-credit / term-loan usage and other treasury operations"
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
    id: "audit", num: "04", name: "Internal Audit",
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
    id: "gst-income-tax", num: "05", name: "GST & Income Tax",
    short: "GST returns and audit support, advance tax and annual return filing.",
    body: [
      "Compiling data for monthly GST returns",
      "Filing monthly, half-yearly and annual GST returns",
      "Recommending systems to avoid GST ITC mismatches",
      "Assistance during GST audits",
      "Advance tax calculations",
      "Compiling data required for Tax Audit",
      "Filing of Annual Income Tax Return (ITR)"
    ]
  },
  {
    id: "hr", num: "06", name: "HR",
    short: "Payroll, appraisal systems and human resource frameworks.",
    body: [
      "Vision-to-KRA execution planning",
      "Payroll processing",
      "Onboarding",
      "Training-need identification, individual and group training",
      "Designing and implementing a customised performance-appraisal system",
      "Succession planning",
      "Compiling HR policies, SOPs and frameworks",
      "Review of employee welfare programmes"
    ]
  },

  /* ------------------------------------------------------------------
     DRAFT CONTENT — services 07 and 08 were added in the latest change
     list without any bullet points, so the bullets below are placeholder
     wording written to match the other services. Please review / replace.
     ------------------------------------------------------------------ */
  {
    id: "supply-chain", num: "07", name: "Supply Chain Management",
    short: "Procurement, inventory and logistics systems that protect margins.",
    body: [
      "Review of procurement processes and vendor evaluation",
      "Material requirement planning and inventory-level setting",
      "Inventory control, ageing and obsolescence management",
      "Logistics and freight cost analysis",
      "Working-capital optimisation across the supply chain",
      "Compiling SOPs and performance indicators for supply chain functions"
    ]
  },
  {
    id: "compliance", num: "08", name: "Compliance Solutions",
    short: "Statutory compliance mapping, tracking and periodic review.",
    body: [
      "Mapping of statutory and regulatory compliance applicable to the business",
      "Compliance calendar and due-date tracking",
      "Periodic compliance review and reporting to management",
      "Support during statutory inspections and audits",
      "Compiling compliance checklists, SOPs and internal-control frameworks"
    ]
  }
];
