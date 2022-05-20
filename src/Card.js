
import CardHeader from './CardHeader';
import CardSection from './CardSection';
import CardFooter from './CardFooter';

const Card = (props) => {
    return (
        <div className="card">
            <CardHeader color={props.color}/>
            <CardSection />
            <CardFooter />
        </div>
    );
};

export default Card;
