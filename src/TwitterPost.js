import Buttons from "./Buttons";
import { useState } from "react";

export default function TwitterPost({ post }) {
  const [isLiked, setLike] = useState(true);
  const [qtdLike, setQtdLike] = useState(100);

  function likeClick() {
    if (isLiked) {
      setLike(false);
      setQtdLike(qtdLike - 1);
    } else {
      setLike(true);
      setQtdLike(qtdLike + 1);
    }
  }

  return (
    <article className="container">
      <article className="TwitterPost">
        <header>
          <img className="img-perfil" src={post.image} alt="img perfil" />
          <div className="user-name">
            <div className="verified">
              <h1>{post.name}</h1>
              <img
                className="verified-icon"
                src="verified.png"
                alt="verificado"
              />
            </div>
            <h2>{post.username}</h2>
          </div>
          <aside className="icon">
            <img
              className="twitter-logo"
              src="twitter.png"
              alt="icone-twitter"
            />
          </aside>
        </header>

        <section className="msg-block">
          <p className="message">{post.message}</p>
        </section>

        <section className="date-time">
          <time>11:55 · 09/04/23</time>
          <span className="point">·</span>
          <div>
            <span className="view-number">1,4M</span>
          </div>
          <span className="views">Views</span>
        </section>

        <section className="bookmarks">
          <hr />
          <p>
            <span>12</span> Bookmarks
          </p>
          <hr />
        </section>
        <div>
          <Buttons
            liked={isLiked}
            qtd_like={qtdLike}
            qtd_comment={1000}
            onPressLike={() => likeClick()}
          />
        </div>
      </article>
    </article>
  );
}
