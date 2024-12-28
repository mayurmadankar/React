// create post context here
import { createContext, useContext, useState } from "react";

const postContext = createContext();
// Create custom hook that returns context value here
function useValue() {
  const value = useContext(postContext);
  return value;
}
// create a custom saved post provider here with add and reset functions
function CustomPostContext({ children }) {
  const [savedPosts, setSavedPosts] = useState([]);

  const [showSavedList, setShowSavedList] = useState(false);

  const reset = () => {
    setSavedPosts([]);
  };
  const save = (post) => {
    // Check if the post is already saved
    if (!savedPosts.some((p) => p.id === post.id)) {
      setSavedPosts([...savedPosts, post]);
    }
  };
  return (
    <postContext.Provider
      value={{
        savedPosts,
        setSavedPosts,
        showSavedList,
        setShowSavedList,
        reset,
        save
      }}
    >
      {children}
    </postContext.Provider>
  );
}
export default CustomPostContext;
export { postContext, useValue };
