import Main from "@/pages/Main";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header isDesktop={true} /> {/* Pass the isDesktop prop */}
      <Main />
    </>
  );
}
