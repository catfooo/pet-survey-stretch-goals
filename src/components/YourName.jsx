import { useState } from 'react';

const YourName = ({ onNext, setYourNameProp }) => {
    const [yourName, setYourName] = useState('');

    const handleYourName = (event) => {
        setYourName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(yourName);
        setYourNameProp(yourName);
        onNext();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={yourName}
                onChange={handleYourName}
                style={{ width: '210px' }}
            />
            <button type="submit">Next</button>
        </form>
    );
}

export default YourName;
