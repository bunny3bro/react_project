import overview from './image/overview.png'
import trace from './image/trace.png'
import e6 from './image/e6.png'
import stand from './image/ldhs.png'
import in2 from './image/in2.png'
import phone from './image/phone.jpg'

function Chard(){
    return(
        <div>
            <h1><u>Charater Details</u></h1>
            <br />
            <h2>
            <u>Imbibitor Lunae Dan Heng</u>
            </h2>
            <br />
            <img src={overview} alt='' className='imgchard'></img>
            <br />
            <br />
            <h2>
                <u>
                IL Dan Heng
                <br /> 
                Skills & Traces
                </u>
            </h2>
            <br />
            <img src={trace} alt='' className='imgchard' ></img>
            <br />
            <br />
            <h2>
                <u>
                IL Dan Heng
                <br /> 
                Eidolons Details
                </u>
            </h2>
            <br />
            <img src={e6} alt='' className='imgchard' ></img>
            <br />
            <br />
            <h2>
                <u>IL Dan Heng In-game</u>
            </h2>
            <br />
            <img src={stand} alt='' className='imgstand'></img>
            <br />
            <h2>
                <u>In the Charater Details</u>
            </h2>
            <br />
            <img src={in2} alt='' className='imgin' ></img>
            <br />
            <br />
            <h2>
                <u>IL Dan Heng holding phone in game</u>
            </h2>
            <br />
            <img src={phone} alt='' className='imgphone'></img>
            <br />
            <br />
            <h2>
                Even IL Dan Heng is carrying black phone case like Dan Heng
            </h2>
        </div>
    )
}

export default Chard;