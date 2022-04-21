import { Link } from "react-router-dom";

const Flower = (props) => {
    const name = props.name ? props.name : "Undefined";
    const src = props.src ? props.src : "";

    return (
        <Link className="text-decoration-none text-dark" to={`/${name}`}>
            <div className="card h-100">
                <img className="card-img-top" alt={name} src={src} />
                <div className="d-flex flex-column-reverse card-body">
                    <h4 className="card-title">{name}</h4>
                </div>
            </div>
        </Link>
    );
};

export default Flower;
