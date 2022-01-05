import FeaturesItem from './FeaturesItem';
import '../styles/FeaturesList.css'

function FeaturesList(props) {
  return (
    <div className='list'>
      {props.features.map((feature) => (
        <FeaturesItem key={feature.id}
          id={feature.id}
          image={feature.image}
          description={feature.description}/>))}
    </div>
  );
}

export default FeaturesList;