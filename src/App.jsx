import { useEffect } from "react"
import alanBtn from "@alan-ai/alan-sdk-web"

const alankey = "d59395bd6da613524843d88ad08b4b352e956eca572e1d8b807a3e2338fdd0dc/stage"

function App() { 

  useEffect(() => {
    alanBtn({
      key: alankey,
      onCommand: ({command, articles}) => {
        if(command === "newHeadlines"){
          console.log("articles");  
        }
      }
    })
  })

  return (
   <>
    khizar
   </>
  )
}

export default App
