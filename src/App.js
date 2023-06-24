import "./styles.css";
import TwitterPost from "./TwitterPost";

export default function App() {
  const posts = [
    {
      name: "Tim Cook",
      username: "@tim_cook",
      message: "Happy Easter!🐇🐣",
      validate: true,
      image:
        "https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
    },
    {
      name: "Tim Cook",
      username: "@tim_cook",
      message:
        "Great meeting Coach Gopichand and badminton champions Saina Nehwal, Srikanth Kidambi, Chirag Shetty, and Parupalli Kashyap, who have played a part in putting badminton on the map for India. We served, smashed, and talked about how Apple Watch helps them train! 🏸⌚️",
      validate: true,
      image:
        "https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
    },
    {
      name: "Tim Cook",
      username: "@tim_cook",
      message:
        "Happy National Park Week! Thank you, @justbbish, for the stunning shot on iPhone photo from @GrandTetonNPS. Our national parks are breathtakingly beautiful and we must protect them for generations to come.",
      validate: true,
      image:
        "https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
    }
  ];

  var cards = posts.map((post) => <TwitterPost post={post} />);

  return <div className="App">{cards}</div>;
}
