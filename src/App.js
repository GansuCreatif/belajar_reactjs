import React, { /*useState,  useEffect*/ /*Component*/ } from 'react';
import Header from './HeaderComponent';
import Body from './BodyComponent';
import Footer from './FooterComponent';

/*const ToggleButton = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleClick = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {isTextVisible ? 'Sembunyikan Teks' : 'Tampilkan Teks'}
      </button>
      {
        isTextVisible && <p>Teks yang di Tampilkan</p>
      }
      {
        isTextVisible && <p>Lorem</p>
      }
    </div>
  );
};

export default ToggleButton;*/

/*const LifecycleButton = () => {
  const [buttonText, setButtonText] = useState('Educa Academy!');
  const [displayText, setDisplayText] = useState('Halo Gamelab');

  // Efek samping untuk mencetak "komponen telah dipasang" di console
  useEffect(() => {
    console.log('Component Did Mount');
    
    // useEffect cleanup function (componentWillUnmount)
    return () => {
      console.log('Component Will Unmount');
    };
  }, []); // Array dependencies kosong agar hanya dipanggil saat pertama kali komponen dipasang

  const handleClick = () => {
    if (buttonText === 'Educa Academy!') {
      setButtonText('Gamelab Academy!');
      setDisplayText('Halo Educa Academy');
    } else {
      setButtonText('Educa Academy!');
      setDisplayText('Halo Gamelab');
    }

    // Mencetak kalimat di console ketika tombol diklik
    console.log('State telah dirubah');
    alert('State telah dirubah');
  };


  return (
    <div>
      <h1>ReactJs Lifecycle Komponen</h1>
      <br/>
      <h1>{displayText}</h1>
      <br/>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
};

export default LifecycleButton;*/

const App =  () => {
    return(
      <>
        <Header/>
        <Body/>
        <Footer/>
      </>
    );
};
export default App;