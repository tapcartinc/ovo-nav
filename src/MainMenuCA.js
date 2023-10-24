import React, { useEffect, useState } from "react";
import "./App.scss";
import NestedListCA from "./NestedListCA";
import "./index.css";
import { useActions, useVariables } from "@tapcart/webbridge-react";
import { useParams } from "react-router-dom";

const MainMenuCA = () => {
  const { openCollection, openScreen } = useActions();
  const [activeMenu, setactiveMenu] = useState(null);
  const [authMenuActive, setauthMenuActive] = useState("login");

  const closeButton = () => {
    openScreen({
      destination: { type: "internal", url: "/collections" }
    });
  };
  const data = [
    {
      id: 1,
      text: "men",
      subMenu: [
        {
          id: "1.1",
          text: "new Arrivals",
          link: "/",
          collectionId: "80054468"
        },
        {
          id: "1.2",
          text: "all",
          link: "/",
          collectionId: "169324932"
        },
        {
          id: "1.3",
          text: "outerwear",
          link: "/",
          collectionId: "169328516"
        },
        {
          id: "1.4",
          text: "Tops",
          link: "/",
          collectionId: "3258974225"
        },
        {
          id: "1.5",
          text: "sweatshirts",
          link: "/",
          collectionId: "169328580"
        },
        {
          id: "1.6",
          text: "t-shirts",
          link: "/",
          collectionId: "169328708"
        },
        {
          id: "1.7",
          text: "bottoms",
          link: "/",
          collectionId: "169328452"
        },
        {
          id: "1.8",
          text: "Headwear",
          link: "/",
          collectionId: "169328388"
        },
        {
          id: "1.9",
          text: "Accessories",
          link: "/",
          collectionId: "169328260"
        },
        {
          id: "1.10",
          text: "footwear",
          link: "/",
          collectionId: "428388689"
        }
      ]
    },
    {
      id: 2,
      text: "women",
      subMenu: [
        {
          id: "2.1",
          text: "new Arrivals",
          link: "/",
          collectionId: "269323272257"
        },
        {
          id: "2.2",
          text: "all",
          link: "/",
          collectionId: "269323305025"
        },
        {
          id: "2.3",
          text: "Sweatshirts",
          link: "/",
          collectionId: "269323337793"
        },
        {
          id: "2.4",
          text: "Tops",
          link: "/",
          collectionId: "269323370561"
        },
        {
          id: "2.5",
          text: "Bottoms",
          link: "/",
          collectionId: "269323436097"
        },
        {
          id: "2.6",
          text: "Accessories",
          link: "/",
          collectionId: "269323534401"
        }
      ]
    },
    {
      id: 3,
      text: "Collections",
      subMenu: [
        {
          id: "3.1",
          text: "Classic",
          link: "/",
          collectionId: "3283124241"
        },
        {
          id: "3.2",
          text: "Collegiate",
          link: "/",
          collectionId: "266634821697"
        },
        {
          id: "3.3",
          text: "Muskoka",
          link: "/",
          collectionId: "162263400513"
        },
        {
          id: "3.4",
          text: "OG",
          link: "/",
          collectionId: "271596650561"
        }
      ]
    },
    {
      id: 4,
      text: "PARTNERSHIPS",
      subMenu: [
        {
          id: "4.1",
          text: "NBA",
          link: "/",
          collectionId: "271745679425"
        },
        {
          id: "4.2",
          text: "NFL",
          link: "/",
          collectionId: "271353118785"
        },
        {
          id: "4.3",
          text: "MLS",
          link: "/",
          collectionId: "271874261057"
        },
        {
          id: "4.4",
          text: "Toronto Raptors",
          link: "/",
          collectionId: "271538323521"
        },
        {
          id: "4.5",
          text: "Scarborough Shooting Stars",
          link: "/",
          collectionId: "271918563393"
        },
        {
          id: "4.6",
          text: "University of Toronto",
          link: "/",
          collectionId: "272186179649"
        }
      ]
    },
    {
      id: 5,
      text: "PARTNERSHIPS-NEW",
      subMenu: [
        {
          id: "5.1",
          text: "MLS",
          link: "/",
          collectionId: "271874261057"
        },
        {
          id: "5.2",
          text: "NBA",
          link: "/",
          collectionId: "271745679425"
        },
        {
          id: "5.3",
          text: "NCAA",
          link: "/",
          collectionId: "272315514945"
        },
        {
          id: "5.4",
          text: "NFL",
          link: "/",
          collectionId: "271353118785"
        },
        {
          id: "5.5",
          text: "Scarborough Shooting Stars",
          link: "/",
          collectionId: "271918563393"
        },
        {
          id: "5.6",
          text: "The Simpsons",
          link: "/",
          collectionId: "272631627841"
        },
        {
          id: "5.7",
          text: "Toronto Raptors",
          link: "/",
          collectionId: "271538323521"
        },

        {
          id: "5.8",
          text: "University of Toronto",
          link: "/",
          collectionId: "272186179649"
        }
      ]
    },
    {
      id: 6,
      text: "PARTNERSHIPS-MEDICOM",
      subMenu: [
        {
          id: "6.9",
          text: "MEDICOM",
          link: "/",
          collectionId: "272772235329"
        },
        {
          id: "6.1",
          text: "MLS",
          link: "/",
          collectionId: "271874261057"
        },
        {
          id: "6.2",
          text: "NBA",
          link: "/",
          collectionId: "271745679425"
        },
        {
          id: "6.3",
          text: "NCAA",
          link: "/",
          collectionId: "272315514945"
        },
        {
          id: "6.4",
          text: "NFL",
          link: "/",
          collectionId: "271353118785"
        },
        {
          id: "6.5",
          text: "Scarborough Shooting Stars",
          link: "/",
          collectionId: "271918563393"
        },
        {
          id: "6.6",
          text: "The Simpsons",
          link: "/",
          collectionId: "272631627841"
        },
        {
          id: "6.7",
          text: "Toronto Raptors",
          link: "/",
          collectionId: "271538323521"
        },

        {
          id: "6.8",
          text: "University of Toronto",
          link: "/",
          collectionId: "272186179649"
        }
      ]
    },
    {
      id: 7,
      text: "PARTNERSHIPS-NHL",
      subMenu: [
        {
          id: "7.9",
          text: "MEDICOM",
          link: "/",
          collectionId: "272772235329"
        },
        {
          id: "7.1",
          text: "MLS",
          link: "/",
          collectionId: "271874261057"
        },
        {
          id: "7.2",
          text: "NBA",
          link: "/",
          collectionId: "271745679425"
        },
        {
          id: "7.3",
          text: "NCAA",
          link: "/",
          collectionId: "272315514945"
        },
        {
          id: "7.4",
          text: "NFL",
          link: "/",
          collectionId: "271353118785"
        },
        {
          id: "7.10",
          text: "NHL",
          link: "/",
          collectionId: "272772563009"
        },
        {
          id: "7.5",
          text: "Scarborough Shooting Stars",
          link: "/",
          collectionId: "271918563393"
        },
        {
          id: "7.6",
          text: "The Simpsons",
          link: "/",
          collectionId: "272631627841"
        },
        {
          id: "7.7",
          text: "Toronto Raptors",
          link: "/",
          collectionId: "271538323521"
        },

        {
          id: "7.8",
          text: "University of Toronto",
          link: "/",
          collectionId: "272186179649"
        }
      ]
    }
  ];
  const { id } = useParams()
  useEffect(() => {
    if (id) {
      const selective = data.find(obj => obj.text.toLowerCase() === id.toLowerCase())
      if (selective?.id) {
        setactiveMenu(selective?.id)
      }
      else {
        setactiveMenu(data[0]?.id)

      }
    }

  }, [id])
  return (
    <div className="custom-menu">
      {/* <nav className="custom-menu-top-nav">
        <a href="/app/7AZ0w8dH9S">Menu</a>
        <button onClick={() => closeButton()} type="button">
          X Close
        </button>
      </nav> */}
      <div className="custom-menu-header">
        <ul>
          {!activeMenu &&
            data.map((obj) => (
              <li key={obj.id}>
                <button type="button" onClick={() => setactiveMenu(obj.id)}>
                  {obj.text}
                </button>
              </li>
            ))}
          {activeMenu && (
            <NestedListCA
              data={data.find((obj) => obj.id === activeMenu)}
              activeMenu={activeMenu}
              setactiveMenu={setactiveMenu}
            />
          )}
        </ul>
        {/* <hr />
        <div className="auth-menu">
          <button
            type="button"
            className={authMenuActive === "login" && "active"}
            onClick={() => setauthMenuActive("login")}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => setauthMenuActive("register")}
            className={authMenuActive === "register" && "active"}
          >
            Register
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default MainMenuCA;
