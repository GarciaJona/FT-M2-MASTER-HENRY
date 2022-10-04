import React from 'react';
import Card from './Card';

function Cards({ cities }) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div>
      {cities &&
        cities.map((obj) => (
          <Card
            //  siempre hay que poner una key para que react identifique lo que le enviamos
            key={obj.id}
            max={obj.main.temp_max}
            min={obj.main.temp_min}
            name={obj.name}
            img={obj.weather[0].icon}
            onClose={() => alert(obj.name)}
          />
        ))}
    </div>
  );
};

export default Cards;

// pasamos a class

// class cards extends React.Component{
//   render(){
//     return(
//       <div>
//       {
//       this.props.cities &&
//         this.props.cities.map((obj) => (
//           <Card
//             //  siempre hay que poner una key para que react identifique lo que le enviamos
//             key={obj.id}
//             max={obj.main.temp_max}
//             min={obj.main.temp_min}
//             name={obj.name}
//             img={obj.weather[0].icon}
//             onClose={() => alert(obj.name)}
//           />
//         ))}
//     </div>
//     )
//   }
// }