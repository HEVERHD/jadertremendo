import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const RedesSociales = () => {
  return (
    <>
      <div id='redes-sociales'>
        <h1>RedesSociales</h1>
        <div>

        <a href="https://www.facebook.com/JaderTremendoP" rel="noopener">
            <FaFacebook className='icono' />
        </a>

        <a href="https://www.instagram.com/jadertremendo/" rel="noopener">
            <FaInstagram className='icono' />
        </a>

        <a href="https://www.tiktok.com/@jadertremendopera" rel="noopener">
            <FaTiktok className='icono' />
        </a>

        <a href="https://www.youtube.com/channel/UCRlcmj_kyKZEVWPZmY_YoKQ" rel="noopener">
            <FaYoutube className='icono' />
        </a>

        </div>


    </div>
    </>
  )
}

export default RedesSociales