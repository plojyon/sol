import { MouseEvent, MutableRefObject } from "react";

const consume = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
}

const getMouseAngle = (e: MouseEvent | MouseEvent<HTMLDivElement, MouseEvent>, ref: MutableRefObject<HTMLElement | null>) => {
    const bounds = ((ref && ref.current) ? ref.current.getBoundingClientRect() : { left: 0, top: 0, width: 0, height: 0 });
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    const mouseX = e.pageX - (document.documentElement.scrollLeft || document.body.scrollLeft);
    const mouseY = e.pageY - (document.documentElement.scrollTop || document.body.scrollTop);
    const angleRad = Math.atan2(centerY - mouseY, mouseX - centerX);
    const angleDeg_ = 90 - angleRad * (180.0 / Math.PI);
    const angleDeg = angleDeg_ < 0 ? 360 + angleDeg_ : angleDeg_;
    return angleDeg;
}

export {
    consume,
    getMouseAngle,
}