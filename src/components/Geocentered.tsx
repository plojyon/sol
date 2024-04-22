import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { selectGeocenter } from '../reducers';

interface TGeocenteredProps {
    children?: ReactNode,
}

const Geocentered = (props: TGeocenteredProps) => {
    const geocenter = useSelector(selectGeocenter);
    return (
        <div style={{
            position: "absolute",
            top: geocenter.top,
            left: geocenter.left,
        }}>
            {props.children}
        </div>
    )
}

export default Geocentered;
