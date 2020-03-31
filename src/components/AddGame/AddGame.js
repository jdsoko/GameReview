import React, { Component } from 'react'
import './AddGame.css'
import config from '../../config'
import TokenService from '../../services/token-service'
import { Redirect } from 'react-router-dom'

export default class AddGame extends Component {
    state = {
        error: null,
        title: '',
        newGameTitle: '',
        newGameId: '',
        newGameAvgRating: '',
        redirect: false
    }

    renderRedirect(newGame) {
        this.setState({newGameTitle: newGame.title, newGameId: newGame.id, newGameAvgRating: newGame.average_rating, redirect: true}) 
    }

    handleSubmit = e => {
        e.preventDefault()
        const reqBody = {title: this.state.title}
        fetch(`${config.API_BASE_URL}/games`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(reqBody)
        })
        .then(res =>
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
        .then(resJson => this.renderRedirect(resJson)
        )
        .catch(res => {
            this.setState({ error: res.error})
            
        })
        
    }
    render() {
        const { error } = this.state

        if(this.state.redirect === true){
          return  <Redirect 
                 to={{
                        pathname: '/reviews',
                        state: {
                            title: this.state.newGameTitle, 
                            avgRating: this.state.newGameAvgRating, 
                            id: this.state.newGameId
                    }}} 
                    />
             }
        return(
            <form 
                className="addGameForm"
                onSubmit={this.handleSubmit}>
                <div role='alert' id='gamePageError'>
                {error && <p className='red'>{error}</p>}
                </div>
                <label htmlFor="addGame" className="addLabel">
                    Can't Find a Game? Add it here:
                </label>
                <input 
                    type="text" 
                    className="addGameInput" 
                    placeholder="Game Title"
                    required
                    onChange={e => this.setState({title: e.target.value})}
                />
                
                <button type="submit" className="addGameButton">Add</button>
                
            </form>
        )
    }
} 