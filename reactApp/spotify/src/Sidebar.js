import React from 'react'
import './Sidebar.css';
import SidebarOption from './SidebarOption' ;
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import {useDataLayerValue} from "./DataLayer";

function Sidebar() {
    const[{playlists}, dispatch]= useDataLayerValue();
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="spotifylogo"/>
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={LibraryMusicIcon} title="Search" />
            <SidebarOption Icon={SearchIcon} title="Your Library" />

            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr/>

            {playlists?.items?.map(playlist => (
                 <SidebarOption  title={playlist.name} />
            ))}
           
           
        </div>
    )
}

export default Sidebar
