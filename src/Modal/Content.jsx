import "../App.css"

const Content = ({setIsOpen}) => {
    return (<div className="modal_content">
        <p>No places left to visit</p>
        <button onClick={() => setIsOpen(false)}>Close modal</button>
    </div>)
}

export default Content;