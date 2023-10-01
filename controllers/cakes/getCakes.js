// REQUEST-TYPE GET
// REQUEST-URL /api/v1/cakes
// OPTIONS query: ['number'] (string | number)
// EXAMPLE /api/v1/cakes?number=10
// DES request to get a specific number of cakes based on number provided in the req.query
const getCakes = async (req, res, next) => {
  try {
  } catch (error) {
    return res.json(error);
  }
};

export default getCakes;
