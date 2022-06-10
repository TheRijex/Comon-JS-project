import "./app-filter.css";

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button type="button"
                    className="btn btn-light">
                    Все проекты
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    На прохождение
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    оценка больше 8
            </button>
        </div>
    )
}

export default AppFilter;