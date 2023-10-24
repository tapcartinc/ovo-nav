import React from "react";
import { useActions, useVariables } from "@tapcart/webbridge-react";

const NestedListCA = ({ data, activeMenu, setactiveMenu }) => {
  const { openCollection, openScreen } = useActions();

  const openCollectionAction = (id) => {
    openCollection({ collectionId: `${id}` });
  };


  return (
    <>
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

export default NestedListCA;
