import Home from "./page";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function HomeLayout({ children }) {
  return (
    <section>
      <Home />
    </section>
  );
}
