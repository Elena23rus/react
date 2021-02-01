import './Aside.css'

function Aside() {
    return(
        <aside className="editor">
            <div className="wrap">
                <h2 className="editor__title" contenteditable="true">Текст заголовка</h2>
                <div className="editor__content" contenteditable="true">Текст</div>
                <p>Введите дату </p>
                <input class="date__editor" type="date"></input>

                 <div class="editor__button">
                <button class="editor__save">Сохранить</button>
                <button class="editor__back">Назад</button>
            </div>
        </div>
      


    </aside>
    );
    }
    export default Aside;