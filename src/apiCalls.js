export const fetchUpcomingData = (query) => {
  return fetch(
    `https://spacelaunchnow.me/api/ll/2.2.0/${query}/upcoming/?limit=20&mode=detailed`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Error fetching data. Please try again later.");
    } else {
      return response.json();
    }
  });
};
