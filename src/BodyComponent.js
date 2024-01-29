import React, { Component } from "react";
import ImgAbout from './Logo_GameLab_Portrait1.png';
import {
  BennerStyle, ButtonStyle, BennerText,
  AboutStyle, AboutImg, AboutHeading, AboutText
} from "./StyledBody";


class Body extends Component{
  render() {
    return (
      <body>
  <BennerStyle>
        <BennerText>
          <h3>Raih Masa Depan Brilian dengan Optimasi Skill Digital</h3>
          <ButtonStyle>Gamelab.ID</ButtonStyle>
        </BennerText>
  </BennerStyle>
  <AboutStyle>
      <AboutImg>
        <img src={ImgAbout} alt="lorem" style={{height: "300px", width: "300px"}} />
      </AboutImg>
      <AboutText>
          <AboutHeading>GAMELAB.ID</AboutHeading>
          <p>GAMELAB.ID membantumu mengoptimalkan skill agar siap kerja melalui program pelatihan, magang online, dan kelas intensif yang diampu oleh para profesional di bidangnya.</p>
          <ButtonStyle>Dashboard</ButtonStyle>
      </AboutText>
  </AboutStyle>
</body>
    );
  }
}
export default Body;
/*
class HelloButton extends React.Component {
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
*/

