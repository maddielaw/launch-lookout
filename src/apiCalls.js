export const fetchUpcomingLaunches = () => {
  return fetch('https://spacelaunchnow.me/api/ll/2.2.0/launch/upcoming/?limit=10&mode=detailed')
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error fetching data. Please try again later.");
    } else {
      return response.json();
    }
  });
};