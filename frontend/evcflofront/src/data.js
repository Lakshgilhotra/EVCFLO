export const pageLinks = [
  { id: 1, href: "/home", text: "home " },
  { id: 2, href: "/research", text: "research " },
  { id: 3, href: "/aimodels", text: "AI models " },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://github.com/Chameleon-company/EVCFLO",
    bgc: "#cc9900",
  },
];

// These show if the user isn't authenticated
export const notAuthenticatedLinks = [
  { id: 4, href: "/login", text: "Login " },
  { id: 5, href: "/signup", text: "Signup " },
];

// These show if the user is authenticated
export const authenticatedLinks = [
  { id: 6, href: "/user", text: "User " },
  { id: 7, href: "/datapage", text: "data " },
  { id: 8, href: "/logout", text: "Logout " },
];
