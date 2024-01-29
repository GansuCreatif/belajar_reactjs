import React, { useState } from "react";
import ImgAbout from './Logo_GameLab_Portrait1.png';
import {
  BennerStyle, ButtonStyle, BennerText,
  AboutStyle, AboutImg, AboutHeading, AboutText, TestiStyle, TestiForm
} from "./StyledBody";
import HelloButton from "./HelloButtonComponent";

const Body = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [inputAuthor, setInputAuthor] = useState('');
  const [inputText, setInputText] = useState('');

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

  const [pesanDariHelloButton, setPesanDariHelloButton] = useState('');

  const handleGamelabClick = () => {
    window.location.href = "https://www.gamelab.id/";
  };

  const handleDashboardClick = () => {
    window.location.href = "https://www.gamelab.id/dashboard";
  };

  const handleClick = () => {
    const pesan = 'Halo Gamelab Indonesia!';
    setPesanDariHelloButton(pesan);
  };

  console.log('HelloButton rendered'); // Tambahkan log untuk melihat render

  return (
    <body>
      <BennerStyle>
        <BennerText>
          <h3>Raih Masa Depan Brilian dengan Optimasi Skill Digital</h3>
          <ButtonStyle onClick={handleGamelabClick}>Gamelab.ID</ButtonStyle>
        </BennerText>
      </BennerStyle>
      <AboutStyle>
        <AboutImg>
          <img src={ImgAbout} alt="lorem" style={{ height: "300px", width: "300px" }} />
        </AboutImg>
        <AboutText>
          <AboutHeading>GAMELAB.ID</AboutHeading>
          <p>GAMELAB.ID membantumu mengoptimalkan skill agar siap kerja melalui program pelatihan, magang online, dan kelas intensif yang diampu oleh para profesional di bidangnya.</p>
          <ButtonStyle onClick={handleDashboardClick}>Dashboard</ButtonStyle>
        </AboutText>
        <HelloButton terimaPesan={setPesanDariHelloButton} />
        <br />
        <p>Pesan Dariku: {pesanDariHelloButton}</p>
      </AboutStyle>

      <section>
    <div>
        <TestiForm>
        <h1>Testimonial App</h1>
        <label for="nama">Nama:</label>
        <input
            type="text"
            placeholder="Enter author..."
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
        </div>
    </section>
    </body>
  );
};

export default Body;


/*class HelloButton extends React.Component {
  handleClick = () => {
    const pesan = 'Halo Gamelab Indonesia!';
    this.props.terimaPesan(pesan);
  };

  render() {
    console.log('HelloButton rendered'); // Tambahkan log untuk melihat render
    return (
      <div>
        <button onClick={this.handleClick}>Kirim Pesan ke Gamelab</button>
      </div>
    );
  }
}

class Body extends Component {
  constructor() {
    super();
    this.state = {
      pesanDariHelloButton: ''
    };
  }

  terimaPesan = (pesan) => {
    this.setState({ pesanDariHelloButton: pesan });
  };

  render() {
    console.log('Body rendered'); // Tambahkan log untuk melihat render
    return (
      <main>
        <p>
          GAMELAB.ID membantumu mengoptimalkan skill agar siap kerja melalui program pelatihan, magang online,
          dan kelas intensif yang diampu oleh para profesional di bidangnya.
        </p>
        <HelloButton terimaPesan={this.terimaPesan} />
        <br/>
        <p>Pesan Dariku: {this.state.pesanDariHelloButton}</p>
      </main>
    );
  }
}
export default HelloButton;*/

