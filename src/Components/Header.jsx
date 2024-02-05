
const Header = () => {
 
  const ScrollToFeature = () => {
    window.scroll({ top: document.querySelector('#features').offsetTop - 50,
    behavior: 'smooth' });

  }

  return (
    <>
    <div id="main">
        <div className="name">
            <h2> JADER TREMENDO</h2>
            <p className="details"> <span>DJ, ANIMADOR Y PRODUCTOR DE</span>  CHAMPETA (MIP)</p>
             <div className="header-btns">
            
                <a onClick={ScrollToFeature}  className="header-btn">Vamo' alla</a>
             </div>
        </div>

      
      </div>
    </>
 
  )
}

export default Header