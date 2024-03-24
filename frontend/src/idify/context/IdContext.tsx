import { createContext, useState } from "react";
import { License } from "../../types/license";

const defaultVal = {
  licenceData: {},
  setLicenceData: (licenceData: License) => {},
};

export const licenceContext = createContext(defaultVal);

export const LicenceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [licenceData, setLicenceData] = useState({});

  return (
    <licenceContext.Provider value={{ licenceData, setLicenceData }}>
      {children}
    </licenceContext.Provider>
  );
};
