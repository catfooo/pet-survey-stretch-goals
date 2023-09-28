import React, { useState } from 'react';
import NamePet from './components/NamePet';
import ColorPet from './components/ColorPet';
import YourName from './components/YourName'; // your name
import YourAge from './components/YourAge'; // your age
import PetsRadioButton from './components/PetsRadioButton' // 5 pets option radio button
import Header from './components/Header'
import YourPet from './components/YourPet'


export const App = () => {
  const [step, setStep] = useState(1);
  const [namePet, setNamePet] = useState('');
  const [color, setColor] = useState('');
  const [yourName, setYourName] = useState(''); // your name 
  const [yourAge, setYourAge] = useState(''); // your age
  const [selectedPet, setSelectedPet] = useState(''); // fav pet

  const proceedToNextStep = () => {
    if (step === 2) {
      setStep(2.5);
    } else {
      setStep(prevStep => prevStep + 1);
    }
  };
  
  return (
    <div>
      <Header />
      {step === 1 && (
        <>
          <h4>What is your name?</h4>
          <YourName onNext={proceedToNextStep} setYourNameProp={setYourName} />
        </>
      )}

      {step === 2 && (
        <>
          <h4>What is your age?</h4>
          <YourAge onNext={proceedToNextStep} setYourAgeProp={setYourAge} />
        </>
      )}

{step === 2.5 && (
  <>
    <h4>Tell us about your pet:</h4>
    <YourPet onNext={proceedToNextStep} />
  </>
)}


      {step === 3 && (
        <div className="App">
          <h1>Choose your favorite animal as pet:</h1>
          <PetsRadioButton setSelectedPet={setSelectedPet} selectedPet={selectedPet} onNext={proceedToNextStep} />
        </div>
      )}

      
      {step === 4 && (
        <>
          <h3>what will be the name of this pet?</h3>
          <NamePet onNext={proceedToNextStep} setNamePetProp={setNamePet} />
        </>
      )}

      {step === 5 && (
        <>
          <ColorPet onNext={proceedToNextStep} setColorPetProp={setColor} />
        </>
      )}

        {step === 6 && (
        <div style={{
          backgroundColor: color,
          // color: getTextColor(color),
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h3>you and your new pet</h3>
          <p>your name: {yourName}</p>
          <p>your age: {yourAge}</p>
          <p>type of pet: {selectedPet}</p>
          <p>name: {namePet}</p>
          <p>color: {color}</p>
        </div>
      )}
      
    </div>
  );
}

export default App;

