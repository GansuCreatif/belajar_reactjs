import React, { useState } from "react";
import {
  BennerStyle,BennerText,CardBody, CardText,CardTitle, CardHarga,
  TestiStyle, TestiForm, ButtonStyle
} from "./StyledBody";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Modal, Form } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';


const Body = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [inputAuthor, setInputAuthor] = useState('');
  const [inputText, setInputText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const handleShow = (game) => {
    setSelectedGame(game);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedGame(null);
  };
  
  const gameData = [
    {
      title: "Assassin's Creed® Mirage",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/23/Assassin%27s_Creed_Mirage_cover.jpeg",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: "Rp 739.000",
    },
    {
      title: "Red Dead Redemption 2",
      imageUrl: "https://upload.wikimedia.org/wikipedia/id/4/44/Red_Dead_Redemption_II.jpg",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: "Rp 740.000",
    },
    {
      title: "Hogwarts Legacy",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/7c/Hogwarts-Legacy-cover.jpg",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: "Rp 990.000",
    },
  ];

  const handleAuthorChange = (e) => {
    setInputAuthor(e.target.value);
  };

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const addTestimonial = () => {
    if (inputAuthor.trim() !== '' && inputText.trim() !== '') {
      const newTestimonial = {
        author: inputAuthor,
        text: inputText,
      };
      setTestimonials([...testimonials, newTestimonial]);
      setInputAuthor('');
      setInputText('');
    }
  };

  const deleteTestimonial = (index) => {
    const updatedTestimonials = testimonials.filter((_, i) => i !== index);
    setTestimonials(updatedTestimonials);
  };
  const handleGameClick = (game) => {
    setSelectedGame(game);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <body>
  <section id="home">
      <BennerStyle>
        <BennerText>
          <h3>Rasakan Belanja Game Disini</h3>
        </BennerText>
      </BennerStyle>
      </section>
      <section id="katalog">
        <center><h3>Katalogue Game</h3></center>
        <Carousel>
          <Carousel.Item>
            <Container id="card">
              <div className="d-flex justify-content-between gap-4">
                {gameData.map((game, index) => (
                  <Card key={index} style={{ width: '18rem' }}>
                    <Card.Img
                      variant="top"
                      src={game.imageUrl}
                      style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                      onClick={() => handleShow(game)}
                    />
                    <CardBody>
                      <CardTitle>{game.title}</CardTitle>
                      <CardText>{game.description}</CardText>
                      <br />
                      <CardHarga>
                        <small>Harga: {game.price}</small>
                        <br />
                      </CardHarga>
                      <br />
                      <Button variant="primary">Tambah Ke Keranjang</Button>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container id="card">
              <div className="d-flex justify-content-between gap-4">
                {gameData.map((game, index) => (
                  <Card key={index} style={{ width: '18rem' }}>
                    <Card.Img
                      variant="top"
                      src={game.imageUrl}
                      style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                      onClick={() => handleShow(game)}
                    />
                    <CardBody>
                      <CardTitle>{game.title}</CardTitle>
                      <CardText>{game.description}</CardText>
                      <br />
                      <CardHarga>
                        <small>Harga: {game.price}</small>
                        <br />
                      </CardHarga>
                      <br />
                      <Button variant="primary">Tambah Ke Keranjang</Button>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container id="card">
              <div className="d-flex justify-content-between gap-4">
                {gameData.map((game, index) => (
                  <Card key={index} style={{ width: '18rem' }}>
                    <Card.Img
                      variant="top"
                      src={game.imageUrl}
                      style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                      onClick={() => handleShow(game)}
                    />
                    <CardBody>
                      <CardTitle>{game.title}</CardTitle>
                      <CardText>{game.description}</CardText>
                      <br />
                      <CardHarga>
                        <small>Harga: {game.price}</small>
                        <br />
                      </CardHarga>
                      <br />
                      <Button variant="primary">Tambah Ke Keranjang</Button>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </Container>
          </Carousel.Item>
        </Carousel>
      </section>
   <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedGame && selectedGame.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedGame && (
            <>
              <img
                src={selectedGame.imageUrl}
                alt={selectedGame.title}
                style={{ width: '100%', height: 'auto' }}
              />
              <p>{selectedGame.description}</p>
              <p>Harga: {selectedGame.price}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  <section id="faq">
  <h3 className='text-center'>FAQ</h3>
  <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </section>
    <section id="testimoni">
        <TestiForm>
        <h1>Testimonial</h1>
        <br/>
        <label for="nama">Nama:</label>
        <input
            type="text"
            placeholder="Enter Name..."
            value={inputAuthor}
            onChange={handleAuthorChange}
            />

        <label for="pesan">Pesan:</label>
        <textarea
            placeholder="Enter testimonial..."
            value={inputText}
            onChange={handleTextChange}
        ></textarea>
        <ButtonStyle onClick={addTestimonial}>Add Testimonial</ButtonStyle>
        </TestiForm>

        <TestiStyle className="testimonial-list">
        {testimonials.map((testimonial, index) => (
            <div className="box" key={index}>
                <h2 className="card-title">{testimonial.author}</h2>
                <p className="card-text">{testimonial.text}</p>
                <button onClick={() => deleteTestimonial(index)}>Delete</button>
            </div>
              ))}
        </TestiStyle>
      </section>
      <section id="contacus">
      <Container id="contact-us">
      <h3>Contact Us</h3>
      <p>If you have any questions, feel free to reach out to us!</p>
      
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="John Doe" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Type your message here" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
      </section>
    </body>
  );
};

export default Body;




