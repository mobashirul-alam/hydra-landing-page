"use client";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AosProvider = ({ children }) => {
    useEffect(() => {
        Aos.init();
    }, []);
    return <>{children}</>;
};

export default AosProvider;
