import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Produce',
  })

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: formData.name,
      category: formData.category
    };
    onItemFormSubmit(newItem)
    setFormData({ //how do I clear the form after submit?
      ...formData,
      name: '',
      category: 'Produce'
    })
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
          <option value="Produce">{formData.category}</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
