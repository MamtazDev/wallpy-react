import React from "react";
import "./SearchPage.css";

import SearchImages from "./SearchImages";
import Footer from "../../Shared/Footer/Footer";
import SearchHeader from "./SearchHeader";
import SearchTrending from "./SearchTrending";

const SearchPage = () => {
  return (
    <>
      <div className="bgShadowTop">
        <SearchHeader />
        <SearchTrending />
        <section>
          <div className="container search_Container">
            <div className="searchMain d-flex flex-wrap align-items-center gap-3 mb-5">
              <SearchImages />
            </div>
            <div>
              <span className="d-block text-center">
                <button className="loadBtn fontBak">Load More</button>
              </span>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;
