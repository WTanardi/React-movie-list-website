import React, { useState } from "react";

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

function getColor(vote) {
    if(vote >= 8){
        return 'green'
    }else if (vote >= 5){
        return 'orange'
    }else{
        return 'red'
    }
}

function Movies({
  title,
  id,
  poster_path,
  overview,
  vote_average,
  release_date,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
    document.body.classList.toggle('open');
  };

  const handleClose = () => {
    setIsModalOpen(false);
    document.body.classList.toggle('open');
  };

  return (
    <div className='movie-modal-container'>
      <div className='movie'>
        <button id={`myBtn${id}`} className='myBtn' onClick={handleOpen}>
          <img src={IMG_URL + poster_path} alt={title} />
          <div className='movie-info'>
            <h3>{title}</h3>
            <span className={getColor(vote_average)}>{vote_average}</span>
          </div>
          <div className='overview'>
            <div className='overview-header'>
              <h3>Overview</h3>
            </div>
            <p>{overview}</p>
          </div>
        </button>
      </div>
      {isModalOpen &&
      <div className='modal' id={`myModal${id}`}>
        <div className='modal-content'>
          <span id={'close' + id} onClick={handleClose} >
            <i className='fas fa-times-circle'></i>
          </span>
          <div className='modal-poster'>
            <img src={IMG_URL + poster_path} alt={title} />
          </div>
          <div className='modal-info'>
            <h2>{title}</h2>
            <span>{vote_average}/10</span>
            <h3 className='releasedate'>Release Date</h3>
            <p>{release_date}</p>
            <h3>Overview</h3>
            <p className='modal-overview'>{overview}</p>
           </div>
          </div>
        </div>}
    </div>
  );
}

export default Movies;
