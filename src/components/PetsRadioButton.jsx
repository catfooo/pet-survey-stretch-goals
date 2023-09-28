import React from 'react'

const petOptions = [
  'Cat',
  'Dog',
  'Fish',
  'Bird',
  'Hamster'
]

export const PetsRadioButton = ({ selectedPet, setSelectedPet, onNext }) => {
  const handlePetSelection = (event) => {
    setSelectedPet(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected pet:", selectedPet)
    onNext();
  }
  
  return (
    <form className="pet-form" onSubmit={handleSubmit}>
      Choose your favorite animal as a pet:
      {petOptions.map((petOption) => (
        <label key={petOption} htmlFor="pet-radio">
          <input
            className="radio-btn"
            type="radio"
            value={petOption}
            onChange={handlePetSelection}
            checked={selectedPet === petOption} />
          {petOption}
        </label>
      ))}
      <button type="submit">Next</button>
    </form>
  )
}

export default PetsRadioButton;