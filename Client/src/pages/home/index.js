import Grid from "../../components/Gird/grid";

import countryColumns_enum, { filterField_enum } from "./../../Shared/enum";

function Home(props) {
  let columnsArr = [
    {
      id: -1,
      selector: null,
      text: "#",
      Sortable: false,
      filterable: false,
    },
    {
      id: countryColumns_enum.country,
      selector: "country",
      text: "Country",
      Sortable: true,
      filterable: false,
    },
    {
      id: countryColumns_enum.region,
      selector: "region",
      text: "Region",
      Sortable: true,
      filterable: true,
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
    },
    {
      id: countryColumns_enum.recoveredCases,
      selector: "recoveredCases",
      text: "Recovered cases",
      Sortable: true,
      filterable: false,
    },
    {
      id: countryColumns_enum.deathCases,
      selector: "deathCases",
      text: "Death cases",
      Sortable: true,
      filterable: false,
    },
  ];
  return (
    <Grid
      dataUrl="getCountriesList"
      columns={columnsArr}
    ></Grid>
  );
}

export default Home;
