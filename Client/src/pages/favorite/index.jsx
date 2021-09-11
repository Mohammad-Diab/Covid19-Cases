import { useState } from "react";
import Grid from "../../components/Gird/grid";
import { Button } from "react-bootstrap";

import favorite from "../../shared/favorite";

import trash from "../../Assets/img/trash.svg";

function Favorite(props) {
  let columnsArr = [
    {
      id: -1,
      selector: null,
      text: "#",
      Sortable: false,
      filterable: false,
      width: "10%",
    },
    {
      id: 1,
      selector: "name",
      text: "Country",
      Sortable: false,
      filterable: false,
      width: "80%",
    },
    {
      id: 0,
      selector: "actions",
      text: "Actions",
      Sortable: false,
      filterable: false,
      width: "10%",
    },
  ];

  let userFavorite = favorite.getFavoriteList();
  const [favoriteList, setFavoriteList] = useState(userFavorite);
  function refreshList() {
    debugger;
    setFavoriteList(favorite.getFavoriteList());
  }

  let gridData = favoriteList.map((it) => {
    return {
      id: it.id,
      name: it.name,
      actions: (
        <Button
          size="sm"
          className="px-4"
          style={{ lineHeight: "12px", }}
          variant="danger"
          title="Remove from favorite"
          onClick={() => {
            favorite.removefromFavorite(it.id);
            refreshList();
          }}
        >
          <img width="20" alt="trash icon" src={trash} />
        </Button>
      ),
    };
  });

  let data = {
    count: gridData.length,
    data: gridData,
    numberOfPages: 1,
  };
  return (
    <>
      <h3 className="mb-4">User favorite</h3>
      <Grid dataUrl={null} data={data} columns={columnsArr} tableClasse="text-center"></Grid>
    </>
  );
}

export default Favorite;
