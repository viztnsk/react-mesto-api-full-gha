import React from 'react';
import successSymbol from '../images/successSymbol.svg'
import failureSymbol from '../images/failureSymbol.svg'
function InfoTooltip(props) {
  return(
     <section className={`popup popup_type_reg`+ (props.isOpen ? " popup_opened" : "")}>
        <div className="popup__container popup__container_type_reg">
          <button className={`close-button`} type="button" onClick={props.onClose}></button>
          <div className={`popup__status`}>
            <img className={`popup__symbol popup__symbol_type_${props.name}`} src={props.status ? successSymbol : failureSymbol} alt=""/>
            <h3 className="popup__title popup__title_type_reg">{props.status ? props.success : props.fail}</h3>
          </div>
        </div>
      </section>
  )
}
export default InfoTooltip