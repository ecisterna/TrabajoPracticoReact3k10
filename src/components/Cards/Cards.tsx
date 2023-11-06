import { CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Cards = () => {
  return (
    <>
      <h2>Facciones</h2>
      <br />
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src="src/assets/images/Image_sede.jpg"
            height={"250px"}
          />
          <Card.Body>
            <Card.Title>Los Compañeros</Card.Title>
            <Card.Text>
              Los Compañeros son una facción de guerreros, descendiente de los
              Quinientos Compañeros, liderado por Ysgramor.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="src/assets/images/3464575dc35d36fc7ce6bcfa9a86a7a3.jpg"
            height={"250px"}
          />
          <Card.Body>
            <Card.Title>Colegio de Hibernalia</Card.Title>
            <Card.Text>
              El Colegio de Hibernalia es el único lugar donde se estudia de una
              manera estructurada la magia de todo Skyrim.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="src/assets/images/2011-12-13_00005.jpg"
            height={"250px"}
          />
          <Card.Body>
            <Card.Title>Hermandad Oscura</Card.Title>
            <Card.Text>
              Se trata de un grupo de asesinos que llevan a cabo contratos en
              nombre de Sithis.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
};

export default Cards