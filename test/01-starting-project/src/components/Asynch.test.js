import { render, screen } from "@testing-library/react"
import Async from "./Asynch"


describe("Asynch component",()=>{
    test("render post if request success",async()=>{
        window.fetch=jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async()=>[{id:"p1",title:"First post"}]
        })
        render(<Async/>)
        const listItemElements=await screen.findAllByRole("listitem");
        expect(listItemElements).not.toHaveLength(0)
    
    })
   
})