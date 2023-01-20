import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import s from "./style.module.css";

export function TVShowList({ tvShowList, onClickItem }) {
  return (
    <>
      <div className={s.title}>You may also like :</div>
      <div className={s.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span className={s.tv_show_list_item} key={tvShow.id}>
              <TVShowListItem tvShow={tvShow} onClick={onClickItem} />
            </span>
          );
        })}
      </div>
    </>
  );
}
