import "./List.scss";
import ProfileFollow from "../cardProfile/Profile";
import { Link } from "react-router-dom";

const List = () => {
  const user = [
    {
      photo: "https://avatars.githubusercontent.com/u/1?v=4",
      name: "Julio cesar",
      user: "julinho",
    },
    {
      photo: "https://avatars.githubusercontent.com/u/2?v=4",
      name: "Cleiton xavier",
      user: "Cleitinho",
    },
  ];

  return (
    <div className="listProfile">
      <h2 className="listProfile__title">who to Follow</h2>

      <div className="listProfile__list">
        {user.map((user, index) => {
          return (
            <ProfileFollow
              key={index}
              photo={user.photo}
              name={user.name}
              user={user.user}
            />
          );
        })}
      </div>
      <Link className="show-more-button" to="/">
        Show More
      </Link>
    </div>
  );
};

export default List;
