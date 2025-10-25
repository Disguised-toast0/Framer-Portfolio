import { createContext,useContext } from "react";

export const Usercontext = createContext({
    play: false,
    setplaying: () => {}
})

export const UserProvider = Usercontext.Provider

export const UserData = () => {
    return useContext(Usercontext)
}