import React, { useEffect, useState } from "react";
import "./App.scss";
import NestedListUS from "./NestedListUS";
import "./index.css";
import { useActions, useVariables } from "@tapcart/webbridge-react";
import { useParams } from "react-router-dom";

const MainMenuUS = () => {
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
          collectionId: "265645575"
        },
        {
          id: "1.2",
          text: "all",
          link: "/",
          collectionId: "265853575"
        },
        {
          id: "1.3",
          text: "outerwear",
          link: "/",
          collectionId: "265889415"
        },
        {
          id: "1.4",
          text: "Tops",
          link: "/",
          collectionId: "3369631764"
        },
        {
          id: "1.5",
          text: "sweatshirts",
          link: "/",
          collectionId: "265892871"
        },
        {
          id: "1.6",
          text: "t-shirts",
          link: "/",
          collectionId: "265893191"
        },
        {
          id: "1.7",
          text: "bottoms",
          link: "/",
          collectionId: "265887111"
        },
        {
          id: "1.8",
          text: "Headwear",
          link: "/",
          collectionId: "265888391"
        },
        {
          id: "1.9",
          text: "Accessories",
          link: "/",
          collectionId: "265886727"
        },
        {
          id: "1.10",
          text: "footwear",
          link: "/",
          collectionId: "424485332"
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
          collectionId: "295995408559"
        },
        {
          id: "2.2",
          text: "all",
          link: "/",
          collectionId: "295995211951"
        },
        {
          id: "2.3",
          text: "Sweatshirts",
          link: "/",
          collectionId: "295995277487"
        },
        {
          id: "2.4",
          text: "Tops",
          link: "/",
          collectionId: "295995244719"
        },
        {
          id: "2.5",
          text: "Bottoms",
          link: "/",
          collectionId: "295995310255"
        },
        {
          id: "2.6",
          text: "Accessories",
          link: "/",
          collectionId: "295995343023"
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
          collectionId: "3495034900"
        },
        {
          id: "3.2",
          text: "Collegiate",
          link: "/",
          collectionId: "289229275311"
        },
        {
          id: "3.3",
          text: "Muskoka",
          link: "/",
          collectionId: "168498823248"
        },
        {
          id: "3.4",
          text: "OG",
          link: "/",
          collectionId: "307924893871"
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
          collectionId: "279857365167"
        },
        {
          id: "4.2",
          text: "NFL",
          link: "/",
          collectionId: "306437980335"
        },
        {
          id: "4.3",
          text: "MLS",
          link: "/",
          collectionId: "308847870127"
        },
        {
          id: "4.4",
          text: "Toronto Raptors",
          link: "/",
          collectionId: "295785496751"
        },
        {
          id: "4.5",
          text: "Scarborough Shooting Stars",
          link: "/",
          collectionId: "308983201967"
        },
        {
          id: "4.6",
          text: "University of Toronto",
          link: "/",
          collectionId: "309743321263"
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
          collectionId: "308847870127"
        },
        {
          id: "5.2",
          text: "NBA",
          link: "/",
          collectionId: "279857365167"
        },
        {
          id: "5.3",
          text: "NCAA",
          link: "/",
          collectionId: "310425092271"
        },
        {
          id: "5.4",
          text: "NFL",
          link: "/",
          collectionId: "306437980335"
        },
        {
          id: "5.5",
          text: "Scarborough Shooting Stars",
          link: "/",
          collectionId: "308983201967"
        },
        {
          id: "5.6",
          text: "The Simpsons",
          link: "/",
          collectionId: "311460069551"
        },
        {
          id: "5.7",
          text: "Toronto Raptors",
          link: "/",
          collectionId: "295785496751"
        },

        {
          id: "5.8",
          text: "University of Toronto",
          link: "/",
          collectionId: "309743321263"
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
          collectionId: "311668080815"
        },
        {
          id: "6.1",
          text: "MLS",
          link: "/",
          collectionId: "308847870127"
        },
        {
          id: "6.2",
          text: "NBA",
          link: "/",
          collectionId: "279857365167"
        },
        {
          id: "6.3",
          text: "NCAA",
          link: "/",
          collectionId: "310425092271"
        },
        {
          id: "6.4",
          text: "NFL",
          link: "/",
          collectionId: "306437980335"
        },
        {
          id: "6.5",
          text: "Scarborough Shooting Stars",
          link: "/",
          collectionId: "308983201967"
        },
        {
          id: "6.6",
          text: "The Simpsons",
          link: "/",
          collectionId: "311460069551"
        },
        {
          id: "6.7",
          text: "Toronto Raptors",
          link: "/",
          collectionId: "295785496751"
        },

        {
          id: "6.8",
          text: "University of Toronto",
          link: "/",
          collectionId: "309743321263"
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
          collectionId: "311668080815"
        },
        {
          id: "7.1",
          text: "MLS",
          link: "/",
          collectionId: "308847870127"
        },
        {
          id: "7.2",
          text: "NBA",
          link: "/",
          collectionId: "279857365167"
        },
        {
          id: "7.3",
          text: "NCAA",
          link: "/",
          collectionId: "310425092271"
        },
        {
          id: "7.4",
          text: "NFL",
          link: "/",
          collectionId: "306437980335"
        },
        {
          id: "7.10",
          text: "NHL",
          link: "/",
          collectionId: "311668211887"
        },
        {
          id: "7.5",
          text: "Scarborough Shooting Stars",
          link: "/",
          collectionId: "308983201967"
        },
        {
          id: "7.6",
          text: "The Simpsons",
          link: "/",
          collectionId: "311460069551"
        },
        {
          id: "7.7",
          text: "Toronto Raptors",
          link: "/",
          collectionId: "295785496751"
        },

        {
          id: "7.8",
          text: "University of Toronto",
          link: "/",
          collectionId: "309743321263"
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
        <a href="/app/9NdGj8dBAo">Menu</a>
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
            <NestedListUS
              data={data.find((obj) => obj.id === activeMenu)}
              activeMenu={activeMenu}
              setactiveMenu={setactiveMenu}
            />
          )}
        </ul>
        <hr />
        {/* <div className="auth-menu">
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

export default MainMenuUS;
