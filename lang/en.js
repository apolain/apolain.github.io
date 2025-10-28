// ---------- Navbar titles
const enNavbarData = {
  title: " Paulin Aubert ",
  Home: "Home",
  publications: "Research",
  Research: "Coding",
  Jobs: "Jobs",
  Contact: "Contact",
};

// ---------- Home page data
const enHomePageData = {
  name: " Paulin Aubert ",
  jobTitle: " Quantitative analyst, PhD student ",
  home_title: "About me",
  home_content: `
  <div>
    <p> I am a Quantitative Analyst with a strong background in applied mathematics, stochastic control, and financial engineering. 
    I completed a CIFRE PhD in France, carried out jointly between academia (Exiom Partners) and industry (Laboratoire de Mathématiques et Modélisation d'Evry (LaMME)), where my research focuses on the development of numerical and learning-based methods for stochastic control problems in quantitative finance. 
    My work lies at the intersection of mathematical modeling, probability theory, and machine learning, and my PhD defense is scheduled for December 2025.
    </p>
    <h2 class='title'> About my work </h2>
    <p>
      My research focuses on stochastic control problems in quantitative finance, 
      with an emphasis on the development of numerical and learning-based methods. 
      I study how reinforcement learning, Monte Carlo simulation, and function approximation 
      can be combined to address high-dimensional decision problems arising in uncertain financial environments. 
      Typical applications include optimal stopping for option pricing, dividend and capital injection optimization 
      in insurance models, as well as market making and optimal liquidation problems. 
      The overall objective is to bridge mathematical modeling and practical implementation, 
      designing algorithms that are both theoretically grounded and computationally efficient.
    </p>

    <h2 class='title'> Current position </h2>
    <p>
      I am currently working as a CCR/XVA Quant within a major investment bank. 
      My role involves the design, implementation, and validation of pricing and risk models 
      used for valuation adjustments and counterparty risk management. 
      I work in a large-scale production environment where models are developed in C++ and Python, 
      integrated through complex pipelines, and maintained under robust version control workflows. 
      This position allows me to combine quantitative modeling with hands-on software engineering, 
      contributing to reliable and efficient risk infrastructure.
    </p>
    <br>
</div>
  `,
};

// ---------- Publications page data
const enPublicationsPageData = {
  type_one_title: "To be submitted",

  type_one_items: [
    {
      title: `“Optimal dividends and capital injections under self-exciting claims“`,
      abstract: "We study an optimal dividend and capital injection problem in an insurance model with clustered claim arrivals modeled by a Hawkes process, and solve it numerically using reinforcement learning methods.",
      date: "2025",
      link: "",
      github: "",
      download: "",
      writers: ["Paulin Aubert", "Etienne Chevalier", "Vathana Ly Vath"],
    },
    {
      title: `“Option market making with hedging-induced market impact“`,
      abstract: "We develop a stochastic control framework for option market making where hedging generates transient and permanent price impacts on the underlying market, and analyze the resulting mixed regular-impulse control problem.",
      date: "2025",
      link: "",
      github: "",
      writers: ["Paulin Aubert", "Etienne Chevalier", "Vathana Ly Vath"],
    },
    {
      title: `“Optimal stopping for Bermudan option via policy gradient methods“`,
      abstract: "We propose a policy gradient approach to optimal stopping and apply it to Bermudan option pricing, combining Monte Carlo simulation with neural network–based function approximation.",
      date: "2025",
      link: "",
      github: "",
      writers: ["Paulin Aubert"],
    },
  ],

  type_two_title: "Contributed talks",
  type_two_items: [
    {
      title: `Second workshop on Mathematical Methods for Economics and Finance (Università di Pisa) — Pisa, Italy, Oct. 2025`,
      abstract: ``,
      date: "",
      link: "",
      github: "",
      writers: [],
    },
    {
      title: `Workshop CONTROPT2025 (Università degli Studi di Bari Aldo Moro) — Bari, Italy, May. 2025`,
      abstract: ``,
      date: "",
      link: "",
      github: "",
      writers: [],
    },
    {
      title: `Paris Bachelier PhD seminar (Institut Henri Poincaré) — Paris, France, March. 2025,`,
      abstract: ``,
      date: "",
      link: "",
      github: "",
      writers: [],
    },
    {
      title: `17th Bachelier Colloquium on Financial Mathematics and Stochastic Calculus — Métabief, France, Jan. 2025,`,
      abstract: ``,
      date: "",
      link: "",
      github: "",
      writers: [],
    },
    {
      title: `LaMME probability and mathematical finance seminar (Université Paris-Saclay) — Evry, France, Jun. 2024`,
      abstract: ``,
      date: "",
      link: "",
      github: "",
      writers: [],
    },
    {
      title: `Meeting on Quant Finance (Università di Pisa) — Pisa, Italy, May. 2024`,
      abstract: ``,
      date: "",
      link: "",
      github: "",
      writers: [],
    },
    {
      title: `LaMME PhD seminar (Université Paris-Saclay) — Evry, France, Nov. 2023`,
      abstract: ``,
      date: "",
      link: "",
      github: "",
      writers: [],
    },
  ],

  type_three_title: "",
  type_three_items: [],

  type_four_title: "",
  type_four_items: [],
};

// ---------- Research page data
const enResearchPageData = {
  title: "Research",
  content: `
    Some content
  `,
};

// ---------- Jobs page data
const enJobsPageData = {
  title: "Jobs",
  items: [
    {
      title: `Quantitative Analyst and PhD researcher`,
      company: "Exiom Partners",
      startData: "November 2021",
      endDate: "Current",
      location: "Paris",
      abstract:
        "Since November 2021, I have been working as a consultant in quantitative finance and PhD candidate under a joint academic–industrial framework. My doctoral research focuses on numerical methods for stochastic control, while my professional work involves quantitative model development, review, and implementation in the banking industry. I have contributed to projects in interest rate risk management and in counterparty credit risk (CCR/XVA), gaining practical experience in model design, implementation, and integration within large-scale risk systems. My responsibilities have included the design of a Python library for asset–liability management models, project coordination and refactoring of quantitative tools, and the implementation of pricing and risk analytics with both modeling and software components.",
      achievements: ["Strong expertise in stochastic control, quantitative modeling, and financial mathematics.", "Solid research background combining theoretical analysis, numerical methods, and presentation skills.", "Advanced programming skills in Python and C++, with experience in Linux, Git, and CI/CD workflows.", "Proven ability to bridge academic research and production-level quantitative development."],
    },
    {
      title: `Quantitative Analyst Intern`,
      company: "Exiom Partners",
      startData: "May 2021",
      endDate: "",
      location: "Paris",
      abstract:
        "Research on the Default Risk Charge (DRC) requirements within the Fundamental Review of the Trading Book (FRTB) framework, focusing on the development of a multi-period Merton model and the theoretical and numerical analysis of dependence structures through copulas.",
      achievements: ["Built and tested a stochastic control model for risk and pricing applications.", "Performed large-scale calibration and numerical simulations in Python."],
    },
  ],
};
