import React, {useState} from 'react';
import Class from '../Class/Class';
import ClassGraphQL from '../Class/ClassGraphQL';
import "./Home.css";

function Home(props) {

    const [value, setValue] = useState('');
    const [favoriteClasses, setClasses] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!favoriteClasses.includes(value)) {
            setClasses(favoriteClasses.concat(value));
            setValue('');
        }
        console.log(favoriteClasses);
    }


    return (
        <body>
            <div>
                <h1 id="welcome">Welcome!</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Please Add Your Favorite Class :D</label>
                    </div>
                    <div id="inputdiv">
                        <input type="text" value={value} onChange={handleChange}></input>
                    </div>
                    <div>
                        <button type="submit">Add Class!</button>
                    </div>
                </form>
                <div className="my-classes">
                    {favoriteClasses.map((favClass) =>
                        <Class name={favClass} key={favClass}></Class>
                    )}
                </div>
                <div className="my-classes">
                    {favoriteClasses.map((favClass) =>
                        <ClassGraphQL name={favClass} key={favClass}></ClassGraphQL>
                    )}
                </div>
            </div>
        </body>
    )
}

export default Home;