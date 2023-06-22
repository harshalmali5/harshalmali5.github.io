// gitprofile.config.js

const config = {
  github: {
    username: 'harshalmali5', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 4, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'harshal-mali-380b32219',
    twitter: '_Frost_MZ4_',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'harshalmali527@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'P.E.S. Modern College of Engineering',
      degree: 'B.E. Artificial Intelligence and Machine Learning',
      from: '2022',
      to: '2025 (expected)',
    },
    {
      institution: 'Sanjay Ghodawat Polytechnic',
      degree: 'Diploma In Computer Science and Engineering',
      from: '2019',
      to: '2022',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'SGP Teacher Resource Management',
      description:
        'Created a Teacher resource management system for our campus which currently employes more than 500 teachers and 200 staff members.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Home Verse',
      description:
        'Developed "Homeverse," a personalized real estate website catering to individuals seeking their dream homes in diverse locations.',
      imageUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAACMCAMAAAAXxPhwAAAAWlBMVEUAAAD/VTb/QBb/UTL/TCn/UC//TzT/UTb/Vzr/WDr/Wjv/WTv/WDv/WTr/WTv/Vzb/WDv/WDn/Vjn/WTr/WTv/Wjv/WDr/WTn/WTv/WTr/Wjz/WDf/UzL/WjxgtMdpAAAAHXRSTlMAIQMWCRAbL1hL8vHIkOQ9unVZnqzVg2fH1pBmLtIU08YAAAisSURBVHja7NbbasMwEATQndv+/yeXKqHgkIakNolUfB5s0NMgRtLW6XQ6/VsOWath6ADJYtGJoYF2LYTBRTe0TnKq8U3Xb69RF8YCIHP8kSxSdCeQ6KqM4E2hU/OzI3LsvTE0GgsVnbbwI7VCdEqNG/ICTXfjntn7wgj3TH5EaeFXXfNy44EaJiw703hE9c2aqDSkowh4zDVongnGwjN0OQcNzdAXRo0ndarSwASjF9N4hRjg88kZvEoTPEiOsIPUqU+wsFer3o+NA3wkORZNTuynvLstttXYLxHMehcKR4n7OvLSrIORYW0Eh4kBdOIokp06TICYN0sHamyI9Sfe7jXLnYj37nA1tr6oNbflxGEgiLpnNGNsbIO5EzL//5sLEpcNGCLJ1BZ7XpIqXo5FS0wLDj3Go5JpLc6JkAuDnBNmQMVdbx+cyPmRHirPZGfWjXLPnWOgylRQePeEVXFBjoT6rsI/E48Ls5WZ1Wa7CUaSvubBVJ6GkTVYE9Et9QzP95eZNROvv5v940Unb86D3ZHFeVsHFlaAQ/DpMiNupmbdwS99Y2arEe4qyWmRiOrlbvmhgsgF8UNnVm+ucd+bTb++kUPWvbrERI8AZh8dJ8Lk+Lwx6/Zv0747uveIJftMJBdS/tKcrsdkIcqMK9+nZM/v09GaT08OzNHmDHo5OimLqk+28/88OtoE99gJ5BEr7sDhz0sUqooBqmbSDJr3qyWy0LQlL5wil2HzCfJQUOzGZF+AC/kQc4pfci6EQfQp5kpphyEzAKcfYA6JVHe4wf/VmjuMJpjPphY4pJnnB/1d5hM704w0hySYy1vM95Mjq/HmsXWa32UelNuR5gGJDbr7NHPEFgpFLNV8kWternpEQzGJESTQmq3KdPNQPmrEoqTMA5EhKYTyLtjK+ePo3dh6t9utL+bT3ZF789mpXW8jlxuAPmkZxKqZi45tfd80G/NczD135qeWuiwRgXOOBIzAgDrgcm81y+WpreFG1QYq3zTawAY3Fp3ZfoEYHBUCZpand7zEfAsMI43F3my9SHnSukUcoQUwHAJPxtv8q+Q2+t3HdmrWzJAIcXgOGvqxDDBieJk1MTsu7My6RzIkUBGiJ1/u0Ah19LVvzq/ZTP0pmo68mHV/bl2FJ/mA3OAF1dqsWyAH+e0DiN2IYbfszGxdvdqZZj2ycMVv6ioiud/3LK1uzexrKA3hKGwa68r3mxf6d39ipLIw26La+0AMRqneoKxtmWceW4c4Y9HPH/eb2uxRfWo2LwFs/YupiHJsHeL0pLdWz+DVh+Q6W8MzT8+LQgGKr6CMJKo/vFvtdqIwEIX5SpWKIh8V9+T9X3OdRIjIKgmynR800p7Tm5ubmWScsbbzuihsWR39u6/RrioltTV6kQW5wBxrulaUVLWy/nMt7MQKMyzJbnO3uN4Uj/LshFw3pf2XncZD8KZbdCZsJJL44F/Yw6CVkzsuqisxM9ejdtzbw7bIYYIbklbhYvtBK3vFa1q7f9ZE/ZFeIA65UNIZIGD5ccR64PMQO+ilt5f43Rnj0Gm6MqBv1mhlDjzoJfihRMNF5AG4YGQkDT669lp5BG6+dnO9HGxxjKRcItKLPP0TVrEDLvI9xMVAaueAh2OtbZvuy8z1cjQx0PEuGnpHOYMEQbGvZl9U+OmmlXoi5NPoO8zFjlZern8qNzU/x6orYrwjE2pURKR3O5SnSyBusd6a8m2ftJI39hQubnVvbdP0z/Go1nEfQTkBoHDO9Nahw4p09FmTFiZoxQ8uO01/6bFRw31rbp+q+nvv4lFC2kJ0YwIhEGQcX3uDCVehs9NKOVzsxqhpdAZ7ewlVDG56xk1qcWuyD/qYU0J1NwuTJOSKanfjaYaF+HaZonNe6avz8Ivzxevlp1gknCFDzFhUB2ltL5h6Ay1v8JTk4dX5bHYOdO3WoLsT3hz3tlDCl4M9QwYudhImIKc1F39F2JoHL1+p59ZnfYN+1TzLTve0m+AycqAMBdmlPeNN0vMtvcmn0D3oRp29Psd8TL1fzss4likDAFTqYQXlydx76HWxU9L1+a1PU8Yl5GYBE1CU9WTK023noTcObq9B3vTq79u0k0oocWOm5Dqo9dAHuKbUaeiebPXiEWWIjvRQQZNWLkr5R9CLnefeu3J9RmeIBFz74kMFOgr9Tl1wgB5ceRfNODOT73PAoPQkudDn0KvBlR/yH7uPF7gnGmFyKEmw/HPo3eDK20KJjzIkZHBws7WWbwC9sfbHn2F6E69y4S1L4Od1ixIB/WhtcSrs6RCfvwWkPCfYtDmPJkcZBpZF6K2N5jsQgiy4YYsKClLGIcknGpFR3kLv1RVWhy4xi4gA2cfG04s3IyrZvrpyuUHLVIdjnmhISNt2czIjucQjwtrdK0QE8L5HijNi2KqFTB6/g/EjXoMbIVPcd+29Yhwygi3bPjh8VOQU8AjGBhigIf2AyC+IZxambBvo/p++8pfIEi3fMGSZcT5ZiW1YZyYYhKMyfcyzI1CsVDiMSXF76uV5VTDkNLc0IGJGFF1QYob7WVgi6njkUcnofRU43UMo6CTkcZ9ubzQ55lPoRpVF4DLiFiaYK090EiILyLdvARWiF6rN3WnbhS6NbcjworMRdFmB3XL+L4OMUQKhiITBx4wjCT8FEbxjmm12+c3mRAq8MiqLLNPLWPAniEDjdRieQPv5/loHMdDIKfxt595WHISBMABP/tP7P/Iegg0Li9tuSbEw3416pzIayDD/oEdo/fotOqGqkOiedpprL3kcEjMR1rP8lCNa5r4GJmor2Mks3AggJWdVquYlP+W0xSDl1SO4oEoSCl9HrhrxsUqJAvRnpJlf+coXiOS4iYEn59Nd2wmyknHIMP5deuTaQ9wIBsQhnsxYPW7W3n4QCpw/P6H8fXrxkJ5aRBvA3NV+l5u+gUzrmsk8p5RLhMM85rIhSK211lprrbXW3sMHpOiX1l0FMwAAAAAASUVORK5CYII=',
      link: 'http://sgptrms.rf.gd/homeverse/',
    },
  ],/*
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },*/
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
/*
  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,*/
};

export default config;
