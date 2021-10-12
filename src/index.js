import React, { useState } from "react";
import { render } from "react-dom";
// 👉 App contains a more sophisticated form we'll flesh out later
import App from "./components/App";

// 👉 First let's build a SimpleForm to add more pets:
const petsList = [
  { petName: "Fido", petType: "dog" },
  { petName: "Tweetie", petType: "canary" },
  { petName: "Goldie", petType: "fish" },
];

const initialFormValues = { petName: '', petType: '' }

function SimpleForm() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [pets, setPets] = useState(petsList);

  const change = (evt) => {
    const { name, value } = evt.target;
    setFormValues({ ...formValues, [name]: value })
  }

  const submit = (evt) => {
    const newPet = {
      petName: formValues.petName.trim(),
      petType: formValues.petType.trim()
    }
    setPets(pets.concat(newPet))
    setFormValues(initialFormValues)
  }
  

  return (
  <div className="container">
    <h1>Simple form App!</h1>
    {pets.map((pet, idx) => (
      <div key={idx}>
        {pet.petName} is a {pet.petType}
      </div>
    ))}
    <form onSubmit={submit}>
      <input 
      type='text'
      name='petName'
      value={formValues.petName}
      onChange={change}
      />
    </form>
    <form>
      <input
      type='text'
      name='petType'
      value={formValues.petType}
      onChange={change}
      />
      <input type='color' name='blah' />
      <input type='submit' value='Add your pet name!' />
    </form>
  </div>
  )
}

render(
  <>
    <SimpleForm />
    {/* <App /> */}
  </>,
  document.querySelector("#root")
);
