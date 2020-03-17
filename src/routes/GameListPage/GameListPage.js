import React, { Component } from 'react'
import './GameListPage.css'
import GameItem from '../../components/GameItem/GameItem'
import Header from '../../components/Header/Header'
import AddGame from '../../components/AddGame/AddGame'

export default class GameListPage extends Component {
    renderGames(){
        const Games = this.props.STORE.Games
        return Games.map(game => 
            <GameItem
                title={game.title}
                avgRating={game.avgRating}
            />
        )
    }


    render() {
        

        return(
            <div>
                
                <Header />
                
                <label forHtml="gameSearch">Search for Games by Title: </label>
                <input type="search" className="gameSearch" placeholder="i.e. Grand Theft Auto" />
                <button>Search</button>
                {/*
                <label htmlFor ="gameSearch">
                    Search For Games by Title: 
                </label>
                <input 
                type="search" 
                placeholder="i.e. Grand Theft Auto"
                className="gameSearch"
                />
                */}
                
                {this.renderGames()}
                <AddGame />
            </div>
        )
    }
    
}