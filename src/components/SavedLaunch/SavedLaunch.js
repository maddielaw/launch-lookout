import { Link } from "react-router-dom";
import "./SavedLaunch.css";
import PropTypes from 'prop-types';

const SavedLaunch = ({
  id,
  name,
  company,
  image,
  mission,
  launchDate,
  removeBookmark,
}) => {
  return (
    <section className="saved-launch-card">
      <header className="date-delete">
        <p className="saved-launch-date">{launchDate}</p>
        <button
          className="remove-bookmark-btn" 
          aria-label='Delete bookmark'
          onClick={() => removeBookmark(id)}
        >
          X
        </button>
      </header>
      <section className="saved-img-container">
        <img className="saved-launch-img" src={image} alt={`${mission}`} />
      </section>
      <footer className="saved-launch-details-container">
        <div className="saved-launch-details">
          <h2 className="saved-name">{name}</h2>
          <p className="saved-company">{company}</p>
          {mission.length > 159 ? (
            <p className="saved-mission">{`${mission.substring(
              0,
              159
            )} ...`}</p>
          ) : (
            <p className="saved-mission">{mission}</p>
          )}
        </div>
        <Link to={`/launches/${id}`}>
          <button className="launch-details-btn">View Launch Details</button>
        </Link>
      </footer>
    </section>
  );
};

export default SavedLaunch;

SavedLaunch.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  comany: PropTypes.string,
  image: PropTypes.string,
  mission: PropTypes.string,
  launchDate: PropTypes.string,
  removeBookmark: PropTypes.func
};
