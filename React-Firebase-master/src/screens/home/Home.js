import React from "react";
import Post from "../../components/post/Post";
import "./Home.css";
import { useFetchCollection } from "../../hooks/useFetchCollection";

export default function Home() {
  
  // useEffect(()=>{
  //   const collectionsRef=collection(db,"posts")
    
  //   getDocs(collectionsRef)
  //     .then((snapshot)=>{
  //       let results=[]
  //       snapshot.docs.forEach((doc)=>{
  //         results.push({...doc.data(),id:doc.id})
  //       })
  //       setPosts(results)
  //     })
  //     .catch((err)=>console.log(err))
  // },[])
  //useeffect is not needed because we are going to use data from hooks
  const {documents:posts}=useFetchCollection("posts")
  console.log(posts);
  return (
    <div className="ner outer">
      {posts &&
        posts.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
    </div>
  );
}
