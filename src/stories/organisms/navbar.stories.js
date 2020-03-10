import Navbar from "@components/organisms/Navbar.vue";

export default {
  title: "Navbar",
  component: Navbar
};

export const NavbarDefault = () => ({
  components: { Navbar },
  template: "<navbar />"
});
