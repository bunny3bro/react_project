import wall from './image/wall.png';
import home from './image/home.png';
import herta from './image/herta.png';
import lab from './image/lab.png';
import hsr from './image/hsr.png';
import seal2 from './image/seal2.jpg';
import baliu from './image/baliu.jpg';

function Home(){
    return(
    <div >
        <br />        
            <a href='https://hsr.hoyoverse.com/en-us/' target='__blank' >
                <img src={wall} alt='' className='wall' ></img>
            </a>
        <br />
        <div className='gap' ></div>
        <br />
        <div className='homediv' >
            <div className='homediv1' >
                <h3>
                    <u>Honkai Star Rail</u>
                    <br />
                    <br />
                    In Honkai Star Rail, a train journeys amidst 
                    the twinkling stars, bearing witness to many breathtaking realms.
                    These realms might encompass a futuristic space station,
                    a snow-clad desolate terrain, or even a colossal spaceship navigating
                    through the vast expanse of emptiness.
                </h3>
            </div>
            <div className='homediv2'>
                <img src={home} alt='' className='imghome' ></img>
            </div>
        </div>
        <br />
        <div className='gap' ></div>
        <br />
        <div className='homediv' >
            <div className='homediv1' >
            <img src={herta} alt='' className='imgherta' ></img>
            </div>
            <div className='homediv2'>
                <h3>
                    <u>Simulated Universe: Swarm Disaster</u>
                    <br />
                    <br />
                    "A Simulated Universe major update born of the
                    collaborated efforts of the four geniuses has finally
                    arrived! They completed a broad spectrum of structural
                    renovations, purely to investigate the... "fall" of an Aeon."
                </h3>  
            </div>
        </div>
        <br />
        <div className='gap' ></div>
        <br />
        <div className='homediv' >
            <div className='homediv1' >
                <h3>
                    <u>Space Station Task Force</u>
                    <br />
                    <br />
                    "High-ranking researchers are too busy to delve into the
                    details of the revival work, while low-ranking
                    researchers are unable to access some necessary files.
                    This is when a "special agent" with specific authority
                    levels is needed to guide everyone in completing these
                    special assignments."
                </h3>
            </div>
            <div className='homediv2'>
                <img src={lab} alt='' className='imglab' ></img>
            </div>
        </div>
        <br />
        <div className='gap' ></div>
        <br />
        <img src={hsr} alt='' className='imghsr' ></img>
        <br />
        <img src={baliu} alt='' className='imgbaliu' ></img>
        &nbsp;
        <img src={seal2} alt='' className='imgseal2' ></img>
        <br />
        <br />
        <h3>
            <u>New companion mission</u>
            <br />
            <br />
            There is a new companion mission with IL Dan Heng and baliu, 
            <br />
            both are free to playble in the mission.
        </h3>
        <br />
    </div>
    )

}
export default Home;