import React, { Component } from "react";

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

export default HelloButton;