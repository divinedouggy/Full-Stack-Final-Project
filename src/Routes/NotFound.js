import bunny from '../Images/facepalm-bunny.png'

function NotFound() {
    return(
        <div className='not-found'>
            <h1>Page Not Found</h1>
            <img src={bunny} alt="Gorilla Facepalming"/>
            <p>Sorry! It would seem this page doesn't exist!</p> 
        </div>
    )
}

export default NotFound