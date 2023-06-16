import client from "./client";

export const getPosts =async(pageNo,limit)=>{
    try {
        const response = await fetch(`/api/post/posts?pageNo=${pageNo}&limit=${limit}`);
        const data = await response.json();
        return { posts: data.posts };
      } catch (error) {
        const{response}=error;
        if(response?.data){
            return response.data;
        }
        return{ error: error.message || error}; 
      }
   
};
