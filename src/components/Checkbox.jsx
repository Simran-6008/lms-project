import { useState } from 'react';

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(localStorage.getItem('checkboxState') === 'true');

  function handleChange(event) {
    setIsChecked(event.target.checked);
    localStorage.setItem('checkboxState', event.target.checked);
  }

  return (
    <div class="checkbox-container">
      <input
        type="checkbox"
        id="myCheckbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <label for="myCheckbox">Complete this chapter</label>
    </div>
  );
};

export default Checkbox;
