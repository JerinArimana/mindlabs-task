import React from "react";
import Image from "next/image";
const TrustedCompanies = ({ companiesLogo }: any) => {
  return (
    <div className="company-logos">
      {companiesLogo.map((company: any) => (
        <Image
          key={company.id}
          src={company.img}
          alt={company.altText}
          className="logo"
        />
      ))}
    </div>
  );
};

export default TrustedCompanies;
