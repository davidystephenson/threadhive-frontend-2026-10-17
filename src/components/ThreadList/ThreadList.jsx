import { Container } from "react-bootstrap";
import './ThreadList.css';
import ThreadCard from "./ThreadCard";

export default function ThreadList({ threads, onSelect }) {
  console.log('threads', threads);
  const handleUpvote = () => {
    alert('Upvote clicked!');
  };
  const handleDownvote = () => {
    alert('Downvote clicked!');
  };

  const cards = threads.map((thread) => {
    return (
      <ThreadCard key={thread._id} thread={thread}/>
    )
  })
  /*
  [
    <ThreadCard thread={threads[0]} />,
    <ThreadCard thread={threads[1]} />,
    <ThreadCard thread={threads[2]} />
    <ThreadCard thread={threads[3]} />
    <ThreadCard thread={threads[4]} />
  ]
  */
  console.log('cards', cards)

  return (
    <Container fluid className="px-0">
      {cards}
    </Container>
  );
}
