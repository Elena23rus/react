import './Main.css'

function Main () {
    return(
<ul className="wrap note__list">
    <li className="note" >
        <h2 className="note__title" contenteditable="true">Текст напоминания: </h2>
        <p className="note__preview"></p>
    </li>
</ul>
    );
}

export default Main;