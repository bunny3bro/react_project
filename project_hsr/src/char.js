import icebro from './image/icebro.png'
import pela from './image/pela.png'
import asuna from './image/asuna.png'
import bueaty from './image/bueaty.png'
import otto from './image/otto.png'
import welt from './image/welt.png'

function Chara(){
    return(
        <div>
            <h1><u>Characters</u></h1>
            <br />
            <img src={icebro} alt="" className='floating-image' ></img>
            <h3>
                <u>Gepard</u>
                <br />
                One of the greatest painter in HSR for wanted posters (๐॔˃̶ᗜ˂̶๐॓),
                <br />
                But the public never understand the poster.
            </h3>
            <br />
            <br />
            <br />
            <img src={pela} alt="" className='floating-image' ></img>
            <h3>
                <u>Pela</u>
                <br />
                Her  favorite weapon is the 'Confusion Cannon' because no one ever knows what they're up to.
                <br />
                Now, she used on herself.
                <br />
                O.O
            </h3>
            <br />
            <br />
            <br />
            <img src={asuna} alt="" className='floating-image' ></img>
            <h3>
                <u>Asuna</u>
                <br />
                The main Character in the game,but loves trash-can more than others.
                <br />
                Do'n t forget she will do anything for （づ￣3￣）づ╭💙～ kafka. 
            </h3>
            <br />
            <br />
            <br />
            <img src={bueaty} alt="" className='floating-image' ></img>
            <h3>
                <u>Tingyun</u>
                <br />
                (ʘᴥʘ)
                <br />
                The young foxian who twisted her head like it is nothing to gain Immortality.
            </h3>
            <br />
            <br />
            <br />
            <img src={otto} alt="" className='floating-image' ></img>
            <h3>
                <u>Luocha</u>
                <br />
                He is a traveling merchant who carries a mysterious, large coffin with him,
                <br />
                but welt is curious about his origins because he is similar to Otto Apocalypse (≖_≖ ) .
            </h3>
            <br />
            <br />
            <br />
            <img src={welt} alt="" className='floating-image' ></img>
            <h3>
                <u>Welt</u>
                <br />
                The Main member in astral express and also,
                <br />
                Know as the isekai man in Hoyo verse.
                <br />
                &
                <br />
                Make a black hole in Ult move,Just to deal 3K damage OwO
            </h3>
        </div>
    )
}

export default Chara;