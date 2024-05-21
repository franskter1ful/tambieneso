import Sammy from "../img/Sammy.png";
import "../css/main.css"

export default function Welcome() {
    return (
        <>
        <div className="wrapper">
            <h1>Welcome to SecApt</h1>
            <p>This is my new Application...</p>
            <img className="img" src={Sammy} alt="Sammy Image" width={200} height={200}/>
        </div>
        </>
    );
}