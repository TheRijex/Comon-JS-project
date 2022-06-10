import './games-add-form.css';

const GameAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Добавьте новый проект</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Оценка?" />

                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
}

export default GameAddForm;