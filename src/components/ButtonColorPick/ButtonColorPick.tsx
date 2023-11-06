import { useState } from "react";
import Button from "react-bootstrap/Button";
import ModalColorPick from "../ModalColorPick/ModalColorPick";


const ButtonColorPick = () => {
  //Color inicial del boton
  const [buttonColor, setButtonColor] = useState("#3d7c40");


  //Manejo del Modal
  const [showModal, setShowModal] = useState(false);


  //Funcion para cambiar el color del boton
  const handleColorChange = (color: string) => {
    setButtonColor(color);
  };


  //Al hacer click en el boton se muestra el modal
  const handleShowModal = () =>{
    setShowModal(true);
  }


  return (
    <div className="m-3">
      <h2>Ejemplo 3</h2>


      {/* Componente Padre */}
      <Button variant="primary" style={{ backgroundColor: buttonColor }} onClick={handleShowModal} >
        Cambiar Color
      </Button>


      {/* Componente Hijo */}
      {showModal && <ModalColorPick 
      show={showModal}
      onHide={() => setShowModal(false)}
      handleColorChange={handleColorChange}
      />}
    </div>
  );
};


export default ButtonColorPick;