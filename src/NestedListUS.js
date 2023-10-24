import React from "react";
import { useActions, useVariables } from "@tapcart/webbridge-react";

const NestedListUS = ({ data, activeMenu, setactiveMenu }) => {
  const { openCollection, openScreen } = useActions();

  const openCollectionAction = (id) => {
    console.log("open collection", id);
    openCollection({ collectionId: `${id}` });
  };


  return (
    <>
      {/* <li>
        <button
          className="button-back"
          type="button"
          onClick={() => setactiveMenu(null)}
        >
          back
        </button>
      </li> */}
      {data.subMenu.map((obj) => (
        <li key={obj.id}>
          <p onClick={()=>openCollectionAction(obj.collectionId)} className="button-bracket">
            {obj.text}
          </p>
        </li>
      ))}
    </>
  );
};

export default NestedListUS;
