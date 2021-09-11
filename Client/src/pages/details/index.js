import CountryInfo from "../../components/CountryInfo";
import Grid from "../../components/Gird/grid";

import { detailsColumns_enum } from "./../../shared/enum";

function Details(props) {
  let countryId = props.countryId;

  let dataUrl = `getCountryDetails?countryId=${countryId}`;
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
      id: detailsColumns_enum.date,
      selector: "date",
      text: "Date",
      Sortable: false,
      filterable: false,
      width: "23%",
    },
    {
      id: detailsColumns_enum.confirmedCases,
      selector: "confirmedCases",
      text: "Confirmed cases",
      Sortable: false,
      filterable: false,
      width: "24%",
    },
    {
      id: detailsColumns_enum.recoveredCases,
      selector: "recoveredCases",
      text: "Recovered cases",
      Sortable: false,
      filterable: false,
      width: "24%",
    },
    {
      id: detailsColumns_enum.deathCases,
      selector: "deathCases",
      text: "Death cases",
      Sortable: false,
      filterable: false,
      width: "24%",
    },
  ];
  return (
    <>
      <CountryInfo countryId={countryId} />
      <Grid dataUrl={dataUrl} columns={columnsArr} tableClasse="text-center" gridHeight="calc(100% - 9.5em)" />
    </>
  );
}

export default Details;
