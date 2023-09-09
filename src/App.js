import { useState } from 'react';
import './App.css';
import Header from './components/header/header'

function App() {
  const[toggler, setToggeler] = useState(true);
  const onToggle = (value) => {
    setToggeler(value);
  };
  return (
    <div className="App">
      <Header></Header>
      <div className='containor'>
        {/* headline */}
        <h2 className='lp-headline'>Start with the better AI for business</h2>
        {/* tab bar */}
        <div className='flex jc-c ai-c'>
            <div className='flex jc-c ai-c lp-shadow lp-nav-bar  box-radius'>
              <div className={`lp-nav-btn btn box-radius ${toggler?'lp-nav-btn-active':''}`} onClick={()=>onToggle(true)}>
                <div>Monthly Billing</div>
                <div>No contracts, cancel anytime</div>
              </div>
              <div className={`lp-nav-btn btn box-radius ${toggler?'':'lp-nav-btn-active'}`} onClick={()=>onToggle(false)}>
                <div>Yearly Billing</div>
                <div>Save 20%</div>
              </div>
            </div>
        </div>
        
        {/* price box */}
        <div className='flex lp-price-box-list'>
          <div className='lp-price-box'>
            <p className='lp-price-header'>Business</p>
            <div className='lp-price-subTitle'>Personalized AI features with additional control, security, team training & tech support.</div>
            <div className='lp-price'>Talk with sales</div>
            <div>
              <h3>Everything in Teams, plus:</h3>
              <ul>
                <li>Custom templates & automations</li>
                <li>Custom templates & automations</li>
                <li>Custom templates & automations</li>
                <li>Custom templates & automations</li>
                <li>Custom templates & automations</li>
              </ul>
            </div>
          </div>
          <div className='lp-price-box lp-box1'>
            <p className='lp-price-header'>Teams</p>
            <div className='lp-price-subTitle'>Advanced AI features to create content for multiple brands & collaborate on campaigns.</div>
            <div className='lp-price'><sup>$</sup>{toggler?'125':'99'}<sub>/mo</sub></div>
            <div>
              <h3>Everything in Teams, plus:</h3>
              <ul>
                <li>Custom templates & automations</li>
                <li>Custom templates & automations</li>
                <li>Custom templates & automations</li>
                <li>Custom templates & automations</li>
                <li>Custom templates & automations</li>
              </ul>
            </div>
          </div>
          <div className='lp-price-box'>
            <p className='lp-price-header'>Creator</p>
            <div className='lp-price-subTitle'>Powerful AI features to create & improve your content everywhere you work online.</div>
            <div className='lp-price'><sup>$</sup>{toggler?'49':'39'}<sub>/mo</sub></div>
            <div>
              <h3>Everything in Teams, plus:</h3>
              <ul>
                <li>Custom templates & automations</li>
                <li>Custom templates & automations</li>
                <li>Custom templates & automations</li>
                <li>Custom templates & automations</li>
                <li>Custom templates & automations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='app-css'>lfnsf slfknse fselfkn</div>
      </div>
    </div>
  );
}

export default App;
