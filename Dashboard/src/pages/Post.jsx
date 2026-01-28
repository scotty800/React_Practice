import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { getPostById } from "../services/api";
import PostView from "./PostView";

function Post() {
  const { id } = useParams();

  const { data, loading, error } = useFetch(
    () => getPostById(id),
    [id]
  );

  return (
    <PostView post={data} loading={loading} error={error} />
  );
}

export default Post;
