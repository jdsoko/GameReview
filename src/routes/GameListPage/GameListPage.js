import React, { Component } from 'react'
import './GameListPage.css'
import GameItem from '../../components/GameItem/GameItem'
import Header from '../../components/Header/Header'
import AddGame from '../../components/AddGame/AddGame'
import config from '../../config'
import TokenService from '../../services/token-service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'
 
export default class GameListPage extends Component {
    state = {
        error: null,
        games: [],
        filtered: []
    }
    
    componentDidMount(){
        this.fetchGames()
        
    }

    filterGames = (event) => {
        let games = this.state.games;
        games = games.filter((game) => {
            return game.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        })
        this.setState({filtered: games});
    }
    
    renderGames(games){
        const { error } = this.state
        if(error !== null){
          return  <div role='alert' id='gamePageError'>
            {error && <p className='red'>{error}</p>}
        </div>
        }
        else{
        const Games = games
        return Games.map(game => 

            <GameItem
                title={game.title}
                avgRating={game.average_rating}
                id={game.id}
            />
            
        )}
    }

    fetchGames(){
        fetch(`${config.API_BASE_URL}/games`, {
            headers: {
             'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
            .then(resJson => this.setState({games: resJson, filtered: resJson})
            )
            .catch(res => {
                this.setState({ error: res.error })
            })
        
    }


    render() {
        

        return(
            <div>
                
                <Header />
                
                <div className="searchCont">
                    <FontAwesomeIcon className="searchIcon" icon={faSearch} />
                    <input 
                        type="text" 
                        className="gameSearch" 
                        placeholder="i.e. Grand Theft Auto"
                        onChange={this.filterGames}
                    />
                </div>
                {this.renderGames(this.state.filtered)}
                <AddGame />
            </div>
        )
    }
    
}