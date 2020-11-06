import axios from "axios";



const fetchImagesWithQuery = (searchQuery, page) => {
  const apiKey = "18194330-67860245f678ffa703ae3a938";
    return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits); 
};

export default {
  fetchImagesWithQuery,
};

