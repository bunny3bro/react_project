import team from './image/team.png'
import f2p from './image/f2p.png'
import team2 from './image/team2.png'
import pt from './image/pt.png'
import hsds from './image/HSDs.png'
import note from './image/Note.png'

function Team(){
    return(
        <div>
            <h1><u>Team Built</u></h1>
            <br />
            <img src={team} alt='' className='imgchard' ></img>
            <h3>
                <u>Free To Play Team</u>
                <br />
                <br />
                <img src={f2p} alt=''></img>
                <br />
                <u>Team members</u>
                <br />
                IL Dan Heng - first
                <br />
                Tingyun - second
                <br />
                Trailblazer (preservation) - Third
                <br />
                Natasha - fourth
            </h3>
            <h3>
                <u>BDsH/S Team</u>
                <br />
                <br />
                <img src={team2} alt='' ></img>
                <br />
                <u>Team members</u>
                <br />
                IL Dan Heng - first
                <br />
                Tingyun - second
                <br />
                Pela - Third
                <br />
                Luocha - fourth
            </h3>
            <h3>
                <u>Premium Team</u>
                <br />
                <br />
                <img src={pt} alt='' ></img>
                <br />
                <u>Note</u>
                : Every Character in this team should be E6
                <br />
                <br />
                <u>Team members</u>
                <br />
                IL Dan Heng - first
                <br />
                Yukong - second
                <br />
                Silver Wolf - Third
                <br />
                Luocha - fourth
            </h3>
            <h3>
                <u>H/S & Ds Characters</u>
                <br />
                <br />
                <img src={hsds} alt=''></img>
                <br />
                <br />
                <u>Healer Characters</u>
                <br />
                <br />
                Baliu
                <br />
                &
                <br />
                Natasha
                <br />
                <br />
                <u>Shielder Character</u>
                <br />
                <br />
                Gepard
                <br />
                <br />
                <u>Defensive Shred</u>
                <br />
                <br />
                Silver Wolf
            </h3>
            <h3>
                <u>Note</u>
                <br />
                <br />
                <img src={note} alt=''></img>
            </h3>
        </div>
    )
}

export default Team;