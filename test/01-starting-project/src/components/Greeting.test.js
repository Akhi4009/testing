import { render,screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting"

describe("Greeting component",()=>{

    test('renders Hello world as a text',()=>{
        //Arrange
        render(<Greeting/>);
      const helloworldelement=  screen.getByText("Hello World")
     
    expect(helloworldelement).toBeInTheDocument()
    
    })
    test("text if button is not clicked",()=>{
        render(<Greeting/>);
      const text=  screen.getByText("It's good to see you")
     
    expect(text).toBeInTheDocument()
    })

    test("render Change! after button Clicked",()=>{
        render(<Greeting/>)
    const Button=screen.getByRole("button")
        userEvent.click(Button)
        const text=  screen.getByText("Changed!")
     
    expect(text).toBeInTheDocument()
    })
    test("does not render good to you",()=>{
        render(<Greeting/>)
        const Button=screen.getByRole("button")
        userEvent.click(Button)
        const text=  screen.queryByText("It's good to see you",{exact:false})
     
    expect(text).toBeNull()

    })
})

