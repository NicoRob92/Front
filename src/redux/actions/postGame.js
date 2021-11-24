import axios from 'axios';

/* =-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-= */
/* ==================POSTEO==================== */

export function postGame(payload) {
  return async  (dispatch) => {
    dispatch({ type: "POST", payload });
    try{
    let post = await axios.post("http://localhost:3001/videogame", payload);
    alert ('Video Juego creado con exito')}catch{
      alert ('El Video Juego ya existe')
    }
  };
}
