import "./App.css";

import PostsList from "./features/posts/PostsList.js";
import AddPostForm from "./features/posts/AddPostForm.js";
import Layout from "./components/Layout.js";
import SinglePostPage from "./features/posts/SinglePostPage.js";
import EditPostForm from "./features/posts/EditPostForm.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />}></Route>
        <Route path="post">
          <Route index element={<AddPostForm />}></Route>
          <Route path=":postId" element={<SinglePostPage />}></Route>
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
