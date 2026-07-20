import { createContext, useContext, useState } from "react";

const LikeContext = createContext();

export function LikeProvider({ children }) {
  const [like, setLike] = useState([]);

  const addToggleLike = (id) => {
    if (like.includes(id)) {
      setLike(like.filter((item) => item !== id))
    } else {
      setLike([...like, id])
    }
  };

  return (
    <LikeContext.Provider value={{ like, addToggleLike }}>
      {children}
    </LikeContext.Provider>
  );
}

export const useLike = () => useContext(LikeContext);