import { BsHeart, BsHeartFill } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";

export default function Buttons({ liked, qtd_like, qtd_comment, onPressLike }) {
  var heart;
  if (liked) {
    heart = <BsHeartFill style={{ color: "red" }} />;
  } else {
    heart = <BsHeart />;
  }

  return (
    <div className="info">
      <div className="space" onClick={onPressLike}>
        {heart}
      </div>
      <p className="space">{qtd_like}</p>
      <FaRegComment className="space" />
      <p>{qtd_comment}</p>
    </div>
  );
}
