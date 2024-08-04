import AppointmentPlate from "../components/AppointmentPlate";

const Appointment = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="text-xl text-[#093F68] font-semibold">Appointments</div>
      <AppointmentPlate />
      <AppointmentPlate />
    </div>
  );
};

export default Appointment;
