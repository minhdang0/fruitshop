import React, { useState } from 'react';
import './customDown.css'

const CustomDropdown = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState("0"); // Set initial selected category to "All Products"
  const [visible, setVisible] = useState(true);

  const handleSelect = (event) => {
    setSelectedCategory(event.target.value);
  };
  const toggleDropdown = () => {
    setVisible(!visible);
  };
  
  return (
    <div className="custom-dropdown layered_filter_group mt-3">
     
        <div className="dropdown-list">
          <div onChange={handleSelect} value={selectedCategory} >
            <div className="sub-title" onClick={toggleDropdown}>
              <span>Danh mục sản phẩm</span> 
              <div value="0" > 
              <span className="dropdown-icon">{visible ? 
                <i class="ri-arrow-down-s-fill"></i> : <i class="ri-arrow-up-s-fill"></i>}</span>
              </div>
            </div>
              <div className="filter-group">
                  {visible && (
                    <div className='dropdown' >
                        {categories.map((category, index) => (
                        <div key={index + 1} value={index}  > {category}</div> // Corrected index
                        ))}
                    </div>
                )}
              </div>
           
            
          </div>
        </div>

    </div>
  );
};

export default CustomDropdown;
