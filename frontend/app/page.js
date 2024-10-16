import Layout from "@/components/layout/Layout";
import Pagetitle1 from "@/components/sections/Pagetitle1";
import Partner1 from "@/components/sections/Partner1";
import Project21 from "@/components/sections/Project21";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Pagetitle1 />
        <Project21 />
        <Partner1 />
      </Layout>
    </>
  );
}
