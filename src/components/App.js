import React, { Component } from "react";
import ImageGallery from "./ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem";
import Loader from "./Loader";
import Modal from "./Modal";
import Searchbar from "./Searchbar";
import fetchImagesWithQuery from "../services/imagesApi";


export default class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 1,
    largeImageUrl: null,
    isModalOpen: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });   
       return fetchImagesWithQuery(searchQuery, page)
      .then((images) => {
        return this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }))
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };
  
  handleSearchFormSubmit = (searchQuery) => {
    this.setState({
      searchQuery,
      page: 1,
      images: [],
    });
  };

  render() {
    const { images, loading, error } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
      </>
    );
  }
}
