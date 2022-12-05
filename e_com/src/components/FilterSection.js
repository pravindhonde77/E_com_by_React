import React from 'react'
import { useFilterContext } from '../contex/filter_context';
import styled from "styled-components"
import { FaCheck } from 'react-icons/fa';

const FilterSection = () => {
  const {
    filters: { text, category, color },
    all_products,
    updateFilterValue,
  } = useFilterContext()

  //to get the unique data of each fields
  const getUniqueData = (data, attribute) => {
    let newVal = data.map((ele) => {
      return ele[attribute];
    })

    if (attribute === "colors") {
      //unique an dnon duplicate value from an array
      // return (newVal = ["All", ...new Set([].concate(...newVal))])
      newVal = newVal.flat()
    }
    return (newVal = ["all", ...new Set(newVal)])
  }


  //We need to have the indiviual data of each in an array format
  const categoryOnlyData = getUniqueData(all_products, "category")
  const companyData = getUniqueData(all_products, "company")
  const colorsData = getUniqueData(all_products, "colors")
  // console.log(colorsData);
  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
            placeholder="SEARCH"
          />
        </form>
      </div>


      <div className="filter-category">
        <h3>Category</h3>
        <div>{categoryOnlyData.map((ele, index) => {
          return (<button
            key={index}
            type="button"
            name="category"
            value={ele}
            onClick={updateFilterValue}>
            {ele}
          </button>
          )
        })}</div>
      </div>

      <div className="filter-company">
        <h3>Company</h3>
        <form action="#">
          <select
            name="company"
            id="company"
            className='filter-company--select'
            onClick={updateFilterValue}>
            {
              companyData.map((ele, index) => {
                return (
                  <option key={index} value={ele} name="company">
                    {ele}
                  </option>

                )

              })
            }
          </select>
        </form>
      </div>

      <div className="filter-colors colors">
        <h3>Colors</h3>
        <div className="filter-color-style">
          {
            colorsData.map((ele, index) => {
              if (ele === "all") {
                return (
                  <button
                    key={index}
                    type='button'
                    name='color'
                    value={ele}
                    
                    className='color-all--style'
                    onClick={updateFilterValue}>
                  All
                  </button>
                )

              }
              return (
                <button
                  key={index}
                  type='button'
                  name='color'
                  value={ele}
                  style={{ backgroundColor: ele }}
                  className={color === ele ? "btnStyle active" :"btnStyle" }
                  onClick={updateFilterValue}>
                  {color === ele ? <FaCheck className='checkStyle' /> : null}
                </button>
              )

            })
          }
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;


export default FilterSection