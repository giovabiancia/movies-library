import React, { useEffect, useState } from "react";
import MvSubTitle from "../base/MvSubTitle";
import { useMovie } from "../../hooks/useMovie";

export default function CastTable({ id }) {
  const [cast, setCast] = useState([]);

  const { getMovieCast } = useMovie();

  useEffect(() => {
    getMovieCast(id)
      .then((response) => {
        if (response.status === 200) {
          setCast(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (cast.length === 0) return <></>;

  return (
    <table className="castTable">
      <thead>
        <tr>
          <th>
            <MvSubTitle>Cast</MvSubTitle>
          </th>
          <th>
            <p>Actor name</p>
          </th>
          <th>
            <p>Hero name</p>
          </th>
        </tr>
      </thead>
      <tbody>
        {cast.map((actor, i) => (
          <tr key={i}>
            <td>
              <img
                src={actor?.person?.image?.medium}
                alt={actor?.person?.name}
                className="avatar"
              ></img>
            </td>
            <td>
              <p>{actor?.person?.name}</p>
            </td>
            <td>
              <p>{actor?.character?.name}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
