import petImage from './pets_large.jpeg'

const Header = () => {
    return (
      <header style={{ padding: '10px 0', backgroundColor: '#333', color: '#fff', textAlign: 'center' }}>
        <h1>your new pet</h1>
        <img src={petImage} alt="Pets" style={{ width: '100%', maxWidth: '600px' }}/>
      </header>
    );
  }

  export default Header;