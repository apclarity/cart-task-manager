import "../styles/overlay-loading.scss";

const OverlayLoading: React.FC = () => {
  return (
    <div className="overlay-loading">
      <div className="spinner"></div>
      <p>Loading</p>
    </div>
  );
};

export default OverlayLoading;
