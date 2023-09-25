import post1 from "./image/post1.jpg"
import post2 from "./image/post2.jpg"
import post3 from "./image/post3.jpg"
import post4 from "./image/post4.jpg"
import post5 from "./image/post5.jpg"
import warp from "./image/warp.jpg"

function Posts(){
    return(
        <div>
            <h1><u>Posts on IL Dan Heng</u></h1>
            <br />
            <h2><u>Post-1</u></h2>
            <br />
            <img src={post1} alt="" ></img>
            <h3>
            Forgot your umbrella?
            <br />
            Then let's walk together.
            <br />
            The wind and rain seems to be able to separate people from their surroundings,
            <br />
            granting them an opportune reprieve of unhurried comfort for a time.
            <br />
            <br />
            You should rest early today while the rain is still falling.
            </h3>
            <br />
            <br />
            <h2><u>Post-2</u></h2>
            <br />
            <img src={post2} alt="" className="imgpost2" ></img>
            <h3>
            Dragon are you hungry? 🥜                
            </h3>
            <br />
            <br />
            <h2><u>Post-3</u></h2>
            <br />
            <img src={post3} alt="" className="imgpost3" ></img>
            <h3>
            the Imbibitor Lunae waiting room~! 🌊🐉
            </h3>
            <br />
            <br />
            <h2><u>Post-4</u></h2>
            <br />
            <img src={post4} alt="" className="imgpost4" ></img>
            <h3>
            Imbibitor Lunae 🐉🌕🍁
            </h3>
            <br />
            <br />
            <h2><u>Post-5</u></h2>
            <br />
            <img src={post5} alt="" className="imgpost5" ></img>
            <h3>
                IL Dan Heng in UnderWater with Moon 🌕
            </h3>
            <br />
            <br />
            <h2><u>Post-6</u></h2>
            <br />
            <img src={warp} alt="" className="imgwarp" ></img>
            <h3>
                IL Dan Heng In the warp pulls. ^o^
            </h3>
        </div>
    )
}

export default Posts;