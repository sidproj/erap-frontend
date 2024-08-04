import Banner from "../components/Banner";
// import Modal from "../components/Modal";
import ProfessionalSection from "../components/ProfessionalSection";
import ProfessionsSection from "../components/ProfessionsSection";
import ServicesSection from "../components/ServicesSection";
import ViewAll from "../components/ViewAll";

const Home = () => {
  return (
    <div className="w-full h-full text-white mt-4 flex flex-col gap-4">
      <Banner />
      <div className="flex flex-col gap-4">
        <ProfessionsSection />
        <ViewAll />
      </div>
      <div className="flex flex-col gap-4">
        <ServicesSection />
        <ViewAll />
      </div>
      {/* <Modal
        data={[
          { Service: "Python Programing" },
          { Service: "Python Programing" },
          { Service: "Python Programing" },
        ]}
      /> */}
      <div className="flex flex-col gap-4">
        <ProfessionalSection />
        <ViewAll />
      </div>
    </div>
  );
};

export default Home;
