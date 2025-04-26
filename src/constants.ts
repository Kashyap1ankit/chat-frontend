export const navItems = [
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
