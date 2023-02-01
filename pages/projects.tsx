import Navbar from "@/components/Navbar"
import { info } from "@/data/info";
import ProjectsWrapper from '@/components/ProjectsWrapper';
import MetaHead from "@/components/MetaHead";
import Footer from "@/components/Footer";

function projects() {
  const Projects = info.projects.map((project) => project);
  return (
    <>
      <MetaHead
        title={"Projects"}
        description={"All projects are available in this page."}
        ogImageUrl={"/assets/images/profile.png"}
      />
      <Navbar />
      <main className='container'>
        <h1 style={{lineHeight: 1.2}}>Projects</h1>
        <ProjectsWrapper projects={Projects} />
      </main>
      <Footer />
    </>
  )
}

export default projects