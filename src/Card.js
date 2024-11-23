import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();

  const goTo = (address) => {
    navigate("/" + address);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="col" onClick={() => goTo(props.address)}>
      <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
        <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
          <h3 className="pt-2 mt-5 mb-4 display-6 lh-1 fw-bold">
            {props.title}
          </h3>
          <ul className="d-flex list-unstyled mt-auto">
            <small className="d-flex list-unstyled mt-auto">
              {props.description}
            </small>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
