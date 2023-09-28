import React, { useState } from 'react';

function PetSurvey({ onNext }) {
  const [selectedPets, setSelectedPets] = useState({
    dogs: false,
    cats: false,
    birds: false,
    fish: false,
    reptiles: false
  });

  const handleCheckboxChange = (event) => {
    setSelectedPets({
      ...selectedPets,
      [event.target.name]: event.target.checked
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onNext();
  };

  return (
    <div>
      <h2>Which pets do you have?</h2>
      
      <label>
        <input 
          type="checkbox" 
          name="dogs" 
          checked={selectedPets.dogs}
          onChange={handleCheckboxChange} 
        />
        Dogs
      </label>
      
      <label>
        <input 
          type="checkbox" 
          name="cats" 
          checked={selectedPets.cats}
          onChange={handleCheckboxChange} 
        />
        Cats
      </label>
      
      <label>
        <input 
          type="checkbox" 
          name="birds" 
          checked={selectedPets.birds}
          onChange={handleCheckboxChange} 
        />
        Birds
      </label>

      <label>
        <input 
          type="checkbox" 
          name="fish" 
          checked={selectedPets.fish}
          onChange={handleCheckboxChange} 
        />
        Fish
      </label>

      <label>
        <input 
          type="checkbox" 
          name="reptiles" 
          checked={selectedPets.reptiles}
          onChange={handleCheckboxChange} 
        />
        Reptiles
      </label>

      <div>
        <h3>You have selected:</h3>
        <ul>
          {Object.keys(selectedPets).map((pet) => 
            selectedPets[pet] ? <li key={pet}>{pet}</li> : null
          )}
        </ul>
      </div>
      <button type="submit">Next</button>

    </div>
  );
}

export default PetSurvey;
