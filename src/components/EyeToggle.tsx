import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

interface Props {
  show: boolean;
  setShow: () => void;
}
const EyeToggle = (props: Props) => {
  return (
    <div className="-ml-7" onClick={() => props.setShow()}>
      {props.show ? (
        <EyeInvisibleOutlined
          style={{
            color: "#02BDF3",
            fontSize: "1.25rem",
          }}
        />
      ) : (
        <EyeOutlined
          style={{
            color: "#02BDF3",
            fontSize: "1.25rem",
          }}
        />
      )}
    </div>
  );
};
export default EyeToggle;
