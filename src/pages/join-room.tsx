import { useParams } from "react-router-dom";

export default function JoinRoom() {
  const params = useParams();
  return <div>join-room {params.id}</div>;
}
