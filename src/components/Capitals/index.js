import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    selectedCapital: countryAndCapitalsList[0].id,
  }

  onChangeCapitalName = event => {
    this.setState({selectedCapital: event.target.value})
  }

  getCountryDetails = () => {
    const {selectedCapital} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === selectedCapital,
    )
    return activeCountryAndCapital.country
  }

  render() {
    const {selectedCapital} = this.state

    const country = this.getCountryDetails()
    return (
      <div className="app-container">
        <div className="capitals-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="dropdown-container">
            <select
              className="drop-down-list"
              value={selectedCapital}
              onChange={this.onChangeCapitalName}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option
                  className="option"
                  key={eachCountry.id}
                  value={eachCountry.id}
                >
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="label-name">is capital of which country?</p>
          </div>
          <p className="country-name">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
