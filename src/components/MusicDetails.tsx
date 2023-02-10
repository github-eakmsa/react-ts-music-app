import React, { ReactElement } from 'react'

interface Music {
    id: number,
    cover: string,
    title: string
}

interface Props {
    music: Music;
}

const MusicDetails: React.FC<Props> = ({music}): ReactElement => {
  return (
    <div className="col-12 col-md-2">
        <div className="card text-white bg-dark">
        <a href="#" className="card-link">
            <img className="card-img-top" src={music.cover} alt="Unsplash"/>
        </a>
            <div className="card-body">
                <p className="card-text">
                    {music.title}
                </p>
                {/* <button className='btn btn-sm btn-secondary'>
            <i className="align-middle me-2" data-feather="star"></i>
            Star
            </button> */}
            </div>
        </div>
    </div>
  )
}

export default MusicDetails