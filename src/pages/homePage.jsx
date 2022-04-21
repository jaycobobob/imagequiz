import components from "../components/components";

const Homepage = (props) => {
    return (
        <div>
            <components.misc.Navbar user={props.user} />
            <div className="p-4">
                <components.FlowerDisplay />
            </div>
        </div>
    );
};

export default Homepage;
