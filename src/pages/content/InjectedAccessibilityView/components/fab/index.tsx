import { useEffect } from "react";

// interface Props extends
interface Props {
  onClick: () => void;
}

const Fab: React.FC<Props> = (props: Props) => {
  const { onClick } = props;

  useEffect(() => {
    console.log("content view loaded");
  }, []);

  return (
    <button className="fab" id="accessibilityFab" onClick={onClick}>
      fab
    </button>
  );
};

export default Fab;
