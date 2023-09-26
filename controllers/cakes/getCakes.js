import axios from "axios";

import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.API_KEY;

// REQUEST-TYPE GET
// REQUEST-URL /api/v1/cakes
// OPTIONS query: ['number'] (string | number)
// EXAMPLE /api/v1/cakes?number=10
// DES request to get a specific number of cakes based on number provided in the req.query
const getCakes = async (req, res, next) => {
  try {
    let { number } = req.query;

    if (!number) number = "6";

    if (number) number.toString();

    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=cake&number=${number}`
    );
    return res.json(data.results);
  } catch (error) {
    return res.status(400).json({
      message: "Bad request",
    });
  }
};

// &query=cake&number=${20}

export default getCakes;

// https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=cake&instructionsRequired=true&addRecipeInformation=true&number=20
