import React,{ useState } from 'react'
import MusicDetails from '../components/MusicDetails';


const Playlists: React.FC = () => {
  const [favs, setFavs] = useState(
    [
      {id: 1, cover: 'img/photos/unsplash-1.jpg', title: 'music title'},
      {id: 2, cover: 'img/photos/unsplash-1.jpg', title: 'music title'},
      {id: 3, cover: 'img/photos/unsplash-1.jpg', title: 'music title'},
      {id: 4, cover: 'img/photos/unsplash-1.jpg', title: 'music title'},
      {id: 5, cover: 'img/photos/unsplash-1.jpg', title: 'music title'},
      {id: 6, cover: 'img/photos/unsplash-1.jpg', title: 'music title'},
      {id: 7, cover: 'img/photos/unsplash-1.jpg', title: 'music title'},
      {id: 8, cover: 'img/photos/unsplash-1.jpg', title: 'music title'},
  ]
  )
  const [playlists, setPlaylists] = useState<string[]>([]);
  const [newPlaylist, setNewPlaylist] = useState('');
  return (
    <div className="container-fluid p-0">

      <h1 className="h3 mb-3">My Playlists</h1>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col">
              <h5 className="card-title mb-0">My Playlists</h5>
              </div>
                <div className="col">
                  <form>
                  <div className="form-group row">
                    <div className="col-8">
                  <input type="text" className='form-control' placeholder='Playlist Name here' required/>
                  </div>
                  <div className="col-4">
                  <button type='submit' className='btn btn-primary'>
                    + New Playlist
                    </button>
                    </div>
                  </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
            {favs.map((i)=> (
              <MusicDetails music={i} key={i.id}/>
            ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Playlists