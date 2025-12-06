import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ContactsSection from "@/components/ContactsSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import ResumeSection from "@/components/ResumeSection";

export default function Page() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <ResumeSection />
      <ContactsSection />
    </>
  );
}