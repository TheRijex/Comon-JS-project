import './games-list-item.css';

const GamesListItem = ({title, rate, increase}) => {
    let classType;
    if(increase){
        classType = "list-group-item d-flex justify-content-between increase"
    }
    else{
        classType = "list-group-item d-flex justify-content-between"
    }

    return (
        <li className={classType}>
            <span className="list-group-item-label">{title}</span>
            <input type="text" className="list-group-item-input" defaultValue={rate + " points"}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default GamesListItem;