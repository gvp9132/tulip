import {Link} from "react-router-dom";


const IndexPage = () => {
    return (
        <div>
            <h2>This is IndexPage.</h2>

            <div>Your may select <Link to={"/login"}>login</Link> or direct access <Link to={"/nav"}>navigate</Link> page.</div>
        </div>
    );
};

export default IndexPage;