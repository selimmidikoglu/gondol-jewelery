import React from 'react'
import {ReactNavbar} from "react-responsive-animate-navbar";


export default function Navbar() {
    return (
        <ReactNavbar
        color="rgb(25, 25, 25)"
        logo="https://svgshare.com/i/KHh.svg"
        menu={[
          { name: "HOME", to: "/" },
          { name: "THREE", to: "/three" },
          { name: "PANEL", to: "/panel" },
          
        ]}
        social={[
          {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/nazeh-taha/",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Facebook",
            url: "https://www.facebook.com/nazeh200/",
            icon: ["fab", "facebook-f"],
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/nazeh_taha/",
            icon: ["fab", "instagram"],
          },
          {
            name: "Twitter",
            url: "http://nazehtaha.herokuapp.com/",
            icon: ["fab", "twitter"],
          },
        ]}
      />
    )
}
