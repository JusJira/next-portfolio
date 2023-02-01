import Navbar from "@/components/Navbar"
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import { info } from "@/data/info";
import ProjectsWrapper from '@/components/ProjectsWrapper';
import MetaHead from "@/components/MetaHead";
import Footer from "@/components/Footer";
import CertWrapper from "@/components/CertWrapper";

export default function Home() {
  const featureProjects = info.projects.reduce((featureProjects, project, index) => {
    if (project.isFeatured && index < 6) {
      //@ts-ignore
      featureProjects.push(project)
    }
    return featureProjects
  }, []);

  return (
    <>
      <MetaHead
        title={"Portfolio"}
        description={info.about}
        ogImageUrl={"/assets/images/profile.png"}
      />
      <Navbar />
      <main className='container'>
        <Hero />
        <Experience title={"EXPERIENCE"} details={info.experience} />
        <Experience title={"EDUCATION"} details={info.education} />
        <section>
          <h2 className="w-[15rem] dark:text-light mt-16">FEATURED PROJECTS</h2>
          <ProjectsWrapper projects={featureProjects} />
        </section>
        <section>
          <h2 className="w-[15rem] dark:text-light mt-16">CERTIFICATES</h2>
          <CertWrapper certs={info.certificates} />
        </section>
      </main>
      <Footer />
    </>
  )
}
