export const navItems = [
  { title: "Join", link: "/join", authorizedOnly: true },
  { title: "Create", link: "/Create", authorizedOnly: true },
  {
    title: "Logout",
    link: `http://localhost:5000/auth/logout`,
    authorizedOnly: true,
  },
  {
    title: "Login",
    link: `http://localhost:5000/auth/google`,
    authorizedOnly: false,
  },
];
