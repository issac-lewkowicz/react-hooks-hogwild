import hogs from '../porkers_data';
import Tile from './Tile';


function HogContainer() {


    const hoglist = hogs.map((hog) => {
        return <Tile {...hog} key={hog.name} />
    })

    return (
        <div className="ui grid container">
            <ul>
                {hoglist}
            </ul>
        </div>
    )
}

export default HogContainer
