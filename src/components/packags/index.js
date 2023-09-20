import {MdShareLocation} from 'react-icons/md'
import {AiTwotoneStar} from 'react-icons/ai'
import './index.css'

import {useState} from 'react'

const Packages = () => {
  const [selectedFilter, setSelectedFilter] = useState(null)
  const [hoveredFilter, setHoveredFilter] = useState(null)

  const data = [
    {
      id: 1,
      category: 'Category 1',
      content: 'Basic Full Body Checkup',
      para: 'Number of texts - 53',
      cost: '$8,490',
    },
    {
      id: 2,
      category: 'Category 2',
      content: 'Advance Full Body Checkup',
      para: 'Number of texts - 70',
      cost: '$10000',
    },
    {
      id: 3,
      category: 'Category 1',
      content: 'Liver Function Text (LFT)',
      para: 'Number of texts - 89',
      cost: '$11,299',
    },
    // Add more data items here
  ]

  const filters = ['All', 'Category 1', 'Category 2']

  const handleFilterClick = filter => {
    setSelectedFilter(filter)
  }

  const handleFilterHover = filter => {
    setHoveredFilter(filter)
  }

  const handleFilterLeave = () => {
    setHoveredFilter(null)
  }

  const filteredData = selectedFilter
    ? data.filter(
        item => item.category === selectedFilter || selectedFilter === 'All',
      )
    : data

  return (
    <div>
      <div className="reban">
        <div className="a-row">
          <div className="keep bg-blue">
            <MdShareLocation className="keep-icon" />
            <p className="para">NABL Accredited Labs</p>
          </div>
          <div className="keep bg-blue">
            <MdShareLocation className="keep-icon" />
            <p className="para">Free sample collection</p>
          </div>
        </div>
        <h1 className="home-heading mt-3">
          We Keep <span className="sub-heading2">expanding </span>!
        </h1>
        <div className="keep-row">
          <div className="service-con">
            <p className="keep-heading">5+</p>
            <p className="keep-para">Labs</p>
          </div>
          <div className="service-con">
            <p className="keep-heading">100+</p>
            <p className="keep-para">collection center</p>
          </div>
          <div className="service-con">
            <p className="keep-heading">1000+</p>
            <p className="keep-para">Monthly texts</p>
          </div>
          <div className="service-con">
            <p className="keep-heading">2200+</p>
            <p className="keep-para">Text menu</p>
          </div>
          <div className="service-con">
            <p className="keep-heading">5+</p>
            <p className="keep-para">cities present in</p>
          </div>
        </div>
      </div>
      <div className="filters-container">
        <div className="center2">
          <h1 className="home-heading mt-3">
            Top <span className="sub-heading2">packages </span>!{' '}
          </h1>
          <p className="paragraph-des">
            Explore our wide range of texts! We ensume that you dont miss out on
            any change to keep yourself healthy
          </p>
        </div>
        <div className="app">
          <div className="filters">
            {filters.map(filter => (
              <button
                key={filter}
                type="button"
                className={`filter-button trans-btn ${
                  selectedFilter === filter ? 'active' : ''
                } ${hoveredFilter === filter ? 'hovered' : ''}`}
                onClick={() => handleFilterClick(filter)}
                onMouseEnter={() => handleFilterHover(filter)}
                onMouseLeave={handleFilterLeave}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="content">
            {filteredData.map(item => (
              <div className="item" key={item.id}>
                <p className="m-0 para">{item.content}</p>
                <p className="head">
                  4.3 <AiTwotoneStar className="star" /> (43 Reviews)
                </p>
                <p className="head">{item.para}</p>

                <h1 className="head">
                  MRP:<p className="paragraph23">$13,299 </p>
                  {item.cost}
                </h1>

                <button
                  className="btn btn-primary"
                  type="button"
                  style={{
                    textAlign: 'center',
                  }}
                >
                  Book now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Packages
