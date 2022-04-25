import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { BookmarkContext } from "../../contexts/BookmarkContext";
import "./Launch.css";
import { IoCheckmarkOutline } from "react-icons/io5";

const Launch = ({ id, name, launchDate, company, image, mission }) => {
  const bookmarkData = useContext(BookmarkContext);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const addBookmark = () => {
    const checkedMission = mission ? mission.description : "No mission description available at this time!";
    const newLaunch = {
      id,
      name,
      launchDate: format(new Date(launchDate), "E. MMMM dd, yyy, p"),
      company,
      image,
      mission: checkedMission,
    };
    bookmarkData.setBookmarks([...bookmarkData.bookmarks, newLaunch]);
    setIsBookmarked(true);
  };

  useEffect(() => {
    if (bookmarkData.bookmarks.some((bookmark) => bookmark.id === id)) {
      setIsBookmarked(true);
    }
  }, []);

  return (
    <section className="launch-card">
      <div className="img-company-container">
        <img className="launch-img" src={image} alt={`${mission} image`} />
        <p>{company}</p>
      </div>
      <div className="launch-deets-container">
        <p className="launch-date">
          {format(new Date(launchDate), "E. MMMM dd, yyy, p")}
        </p>
        <h3 className="launch-name">{name}</h3>
        {mission ? (<p className="launch-mission-description">{mission.description}</p>) : (<p>No mission description available at this time!</p>)}
        <div className="launch-card-btn-container">
          <Link to={`/launches/${id}`}>
            <button className="launch-details-btn">View Launch Details</button>
          </Link>
          {isBookmarked ? (
            <button className="bookmark-btn bookmarked" disabled><IoCheckmarkOutline className="check-icon" />Launch Bookmarked{" "}</button>) 
            : (<button className="bookmark-btn" onClick={() => addBookmark()}>Bookmark this Launch</button>)}
        </div>
      </div>
    </section>
  );
};

export default Launch;
