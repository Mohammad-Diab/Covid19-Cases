import request from "./../../shared/request";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

import favorite from "../../pages/favorite/favorite";

import confirmed from "../../Assets/img/confirmed.svg";
import death from "../../Assets/img/death.svg";
import recovered from "../../Assets/img/recovered.svg";

function CountryInfo(props) {
  let countryId = props.countryId;
  const [countryDetails, setCountryDetails] = useState({
    name: "",
    region: "",
    confirmedCases: 0,
    recoveredCases: 0,
    deathCases: 0,
    isLoading: true,
  });

  function getCountryInfo() {
    request
      .get(`getCountryCasesCount?countryId=${countryId}`)
      .then((result) => {
        setCountryDetails({
          name: result.name,
          region: result.region,
          confirmedCases: result.confirmedCases,
          recoveredCases: result.recoveredCases,
          deathCases: result.deathCases,
          isLoading: false,
        });
      });
  }

  useEffect(getCountryInfo, []);

  let isCountryInFavorite = favorite.isInFavorite(countryId);
  const [isInFav, setIsInFav] = useState(isCountryInFavorite);

  if (countryDetails.isLoading) {
    return <h5>Loading...</h5>;
  }

  let cardContent = [
    {
      text: "Confirmed cases",
      value: countryDetails.confirmedCases,
      image: confirmed,
      variant: "warning",
    },
    {
      text: "Recovered cases",
      value: countryDetails.recoveredCases,
      image: recovered,
      variant: "success",
    },
    {
      text: "Death cases",
      value: countryDetails.deathCases,
      image: death,
      variant: "danger",
    },
  ];

  const favButton = (
    <Button
      size="sm"
      style={{ marginLeft: ".5rem" }}
      variant={isInFav ? "danger" : "success"}
      onClick={() => {
        if (isInFav) {
          favorite.removefromFavorite(countryId);
        } else {
          favorite.addtoFavorite(countryId, countryDetails.name);
        }
        setIsInFav(!isInFav);
      }}
    >
      {isInFav ? "Remove from favorite" : "Add to favorite"}
    </Button>
  );

  return (
    <>
      <div
        className="mb-4"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h4>
            {countryDetails.name} {favButton}
          </h4>
          <h5 className="text-muted mb-0">{countryDetails.region}</h5>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {cardContent.map((card) => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "1.25rem",
              }}
            >
              <img
                width="64"
                height="64"
                alt={`${card.text} Image`}
                src={card.image}
                style={{ marginRight: "0.4rem" }}
              />
              <div>
                <div className="mb-1">{card.text}</div>
                <h5 className={`text-center mb-0 text-${card.variant}`}>
                  {card.value}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CountryInfo;
