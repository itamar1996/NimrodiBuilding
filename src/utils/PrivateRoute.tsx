import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

interface IPrivateRoute {
    component: ReactNode;
}

const PrivateRoute = ({ component }: IPrivateRoute) => {
    const navigate = useNavigate();
    const { index } = useParams<{ index: string }>();
    const floorIndex = parseInt(index || "0");

    const floorAccess = useSelector((state: { floorAccess: { floorAccess: [boolean, boolean, boolean, boolean, boolean] } }) => {
        return state.floorAccess.floorAccess;
      });
    useEffect(() => {
        if (!floorAccess[floorIndex]) {
            navigate("/forbidden");
        }
    },  [floorAccess, floorIndex, navigate]);

    return <>{component}</>;
};

export default PrivateRoute;
