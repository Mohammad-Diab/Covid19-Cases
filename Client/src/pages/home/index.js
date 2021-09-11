import Grid from "../../components/Gird/grid";

import countryColumns_enum, { filterField_enum } from "./../../shared/enum";

function Home(props) {
  let columnsArr = [
    {
      id: -1,
      selector: null,
      text: "#",
      Sortable: false,
      filterable: false,
      width: "5%",
    },
    {
      id: countryColumns_enum.country,
      selector: "country",
      text: "Country",
      Sortable: true,
      filterable: false,
      width: "25%"
    },
    {
      id: countryColumns_enum.region,
      selector: "region",
      text: "Region",
      Sortable: true,
      filterable: true,
      width: "25%",
      filter: {
        type: filterField_enum.dropdown,
        dateUrl: "getAllRegions",
      },
    },
    {
      id: countryColumns_enum.confirmedCases,
      selector: "confirmedCases",
      text: "Confirmed cases",
      Sortable: true,
      filterable: false,
      width: "15%"
    },
    {
      id: countryColumns_enum.recoveredCases,
      selector: "recoveredCases",
      text: "Recovered cases",
      Sortable: true,
      filterable: false,
      width: "15%"
    },
    {
      id: countryColumns_enum.deathCases,
      selector: "deathCases",
      text: "Death cases",
      Sortable: true,
      filterable: false,
      width: "15%"
    },
  ];
  return <Grid dataUrl="getCountriesList" columns={columnsArr}></Grid>;
}

export default Home;
