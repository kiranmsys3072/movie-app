export default function movies(state=[],action){
    if(action.type==="Add Movies"){
        return action.movies
    }
    return state

}