import React, {useState} from 'react'
import MusicDetails from '../components/MusicDetails';

const Home: React.FC = () => {
  const [favs, setFavs] = useState(
    [
      {id: 1, cover: 'img/photos/unsplash-1.jpg', title: 'music title'},
      {id: 2, cover: 'img/photos/unsplash-1.jpg', title: 'music title'},
      {id: 3, cover: 'img/photos/unsplash-1.jpg', title: 'music title'},
      {id: 4, cover: 'img/photos/unsplash-1.jpg', title: 'music title'},
      {id: 5, cover: 'img/photos/unsplash-1.jpg', title: 'music title'},
  ]
  )
  const [plays, setPlays] = useState(
    [
      {id: 1, cover: 'img/photos/unsplash-1.jpg', title: 'music title'},
      {id: 2, cover: 'img/photos/unsplash-1.jpg', title: 'music title'},
      {id: 3, cover: 'img/photos/unsplash-1.jpg', title: 'music title'},
      {id: 4, cover: 'img/photos/unsplash-1.jpg', title: 'music title'},
  ]
  )
  return (
    <div className="container-fluid p-0">

      <h1 className="h3 mb-3">Enjoy the Top Music Library</h1>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">My Favourite Music</h5>
            </div>
            <div className="card-body">
              <div className="row">
                {favs.map((i)=> (
                  <MusicDetails music={i} key={i.id}/>
                ))}
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">My Playlists</h5>
            </div>
            <div className="card-body">
              <div className="row">
                {plays.map((j)=> (
                  <MusicDetails music={j} key={j.id}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home