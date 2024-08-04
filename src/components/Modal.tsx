import { CloseOutlined } from "@ant-design/icons";

interface ModalData {
  [modalData: string]: string;
}

interface PropsInterface {
  data: ModalData[];
}

const Modal = (props: PropsInterface) => {
  return (
    <div className="fixed bg-[#00000050] top-0 left-0 w-full h-full flex flex-col items-center">
      <div className="mt-[4rem] w-[90%] p-4 bg-white border-2 border-[#02BDF3] rounded-lg flex flex-col gap-2 text-[#02BDF3]">
        <div className="flex flex-row justify-between mb-4">
          <div className="font-semibold">Appointment Details</div>
          <CloseOutlined />
        </div>

        {props.data.map((e) => {
          return (
            <div className="flex flex-row justify-between gap-2 font-light text-sm">
              <div className="font-semibold text-base">{Object.keys(e)}:</div>
              <div className="text-base">{Object.values(e)}</div>
            </div>
          );
        })}

        <div className="flex flex-row justify-between gap-2 font-light text-sm mt-4">
          <div className="text-white bg-[#02BDF3] p-1 rounded-md w-full text-center">
            Book Again
          </div>
          <div className="text-white bg-[#093F68] p-1 rounded-md w-full text-center">
            Rate appointment
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
