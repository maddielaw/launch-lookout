import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BookmarkContext } from "../../contexts/BookmarkContext";
import SavedLaunch from "../SavedLaunch/SavedLaunch";
import "./Bookmarks.css";
import { IoChevronBackOutline } from "react-icons/io5";

const Bookmarks = () => {
  const bookmarkData = useContext(BookmarkContext);

  const renderBookmarkCards = () => {
    return bookmarkData.bookmarks.map((bookmark) => {
      return (
        <SavedLaunch
          id={bookmark.id}
          key={bookmark.id}
          name={bookmark.name}
          company={bookmark.company}
          image={bookmark.image}
          mission={bookmark.mission}
          launchDate={bookmark.launchDate}
          removeBookmark={bookmarkData.removeBookmark}
        />
      );
    });
  };

  return (
    <section className="bookmark-section">
      <div className="bookmark-header">
        <h1 className="bookmark-header-text">My Bookmarked Launches</h1>
        <Link to="/">
          <button className="back-to-main" aria-label='Back To Main Dashboard'>
            <IoChevronBackOutline className="back-icon" />
          </button>
        </Link>
      </div>
      <div className="bookmark-container">
        {bookmarkData.bookmarks.length ? (
          renderBookmarkCards()
        ) : (
          <h2 className="no-launches">No launches bookmarked yet!</h2>
        )}
      </div>
    </section>
  );
};

export default Bookmarks;
