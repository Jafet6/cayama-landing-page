import React, { useState, useEffect } from 'react';
// import crypto from 'crypto';
// import {
//   createInstance,
//   OptimizelyFeature,
//   OptimizelyProvider,
//   withOptimizely
// } from '@optimizely/react-sdk';
import playIcon from '../../images/homePage/playIcon.svg';
import greetingImage from '../../images/homePage/greetingImage.svg';
import './headline.css';


// const optimizely = createInstance({
//   sdkKey: '7rBqHFuNcf15mthRX89Uf'
// });

// class SeeHapuSpan extends React.Component {
//   onClick = () => {
//     const { optimizely } = this.props
//     optimizely.track('SeeHapu')
//   }

//   render() {
//     return (
//       <span className="playIcon-description" onClick={this.onClick}>
//         See hapu in action (27 seconds)
//       </span>
//     )
//   }
// }

// const SeeHapuTracker = withOptimizely(SeeHapuSpan)

function HeadLine() {
  // const [userId, setUserId] = useState('');

  // useEffect(() => {
  //   if (!localStorage.getItem('userId')) {
  //     crypto.randomBytes(16, (err, hash) => {
  //       const userId = hash.toString('hex');
  //       localStorage.setItem('userId', userId);
  //       setUserId(userId);
  //     })
  //   } else {
  //     setUserId(localStorage.getItem('userId'));
  //   }
  // }, []);

  // if (userId === '') return <div>Loading...</div>

  return (
    // <OptimizelyProvider
    //   optimizely={optimizely}
    //   user={{
    //     id: userId
    //   }}
    // >
      <div>
        <div className="head-line-content">
          <div className="head-line-left">
            <div>
            <div className="headline-left-content">
              <h1
                data-testid="h1-home-page"
                className="h1-home-page"
              >
                Venda <span className="headline-orange-color">mais</span> pela <span className="headline-orange-color">internet</span>
              </h1>
              <p className="p-home-page">Disponibilize seus produtos para que centenas de pessoas possam divulgar em suas redes sociais ou em estratégias de vendas pensadas para o público certo.</p>
            </div>
            {/* <OptimizelyFeature feature="JungleDevs">
              {(enabled, variables) => (
                <div>
                  <h1
                    data-testid="h1-home-page"
                    className="h1-home-page"
                  >
                    {variables.hero_test.title}
                  </h1>
                  <p className="p-home-page">{variables.hero_test.description}</p>
                </div>
              )}
            </OptimizelyFeature> */}
            </div>
          </div>
          <div className="greeting-image">
            <div className="play-description-container">
              {/* <div className="playIcon-container">
                <img className="playIcon" src={playIcon} alt="play icon" />
              </div> */}
              <span className="playIcon-description">
                Assista ao vídeo explicativo:
              </span>
              {/* <SeeHapuTracker /> */}
            </div>
            <img src={greetingImage} alt="geeting" />
          </div>
        </div>
      </div>
    // </OptimizelyProvider>
  );
};

export default HeadLine;