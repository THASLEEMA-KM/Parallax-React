import "./App.css"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import Content from "./Content"


function App()
{

  

  return (
    <div className="container-body">

<Parallax pages={2} style={{ top: '0', left: '0' }} className="animation">
      <ParallaxLayer offset={0} speed={0.3} >
        <div className="animation_layer parallax" id="mount1">
          
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.35} >
        <div className="animation_layer parallax" id="mount2">
          
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5} >
        <div className="animation_layer parallax" id="mount3">
          
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.45} >
        <div className="animation_layer parallax" id="mount4">
          
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.35} >
        <div className="animation_layer parallax" id="mount5">
          
        </div>
      </ParallaxLayer>


    </Parallax>

    <Content/>



    </div>
  )
}

export default App;