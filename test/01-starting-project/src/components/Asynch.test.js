import { render, screen } from "@testing-library/react"
import Async from "./Asynch"


describe("Asynch component",()=>{
    test("render post if request success",async()=>{
        render(<Async/>)
        const listItemElements=await screen.findAllByRole("listitem");
        expect(listItemElements).not.toHaveLength(0)
    
    })
   
})