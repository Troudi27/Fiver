import { Link } from "react-router-dom"
import "./Message.scss"

export default function Message() {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages" className="link">MESSAGE</Link> - HOUSSEM -
        </span>
        <div className="messages">
          <div className="item">
            <img src="https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi eum enim soluta animi unde, natus placeat facere temporibus voluptatibus doloremque quaerat deserunt sed expedita facilis sint sequi quia quod ratione.</p>
          </div>

          <div className="item owner">
            <img src="https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi eum enim soluta animi unde, natus placeat facere temporibus voluptatibus doloremque quaerat deserunt sed expedita facilis sint sequi quia quod ratione.</p>
          </div>

          <div className="item">
            <img src="https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi eum enim soluta animi unde, natus placeat facere temporibus voluptatibus doloremque quaerat deserunt sed expedita facilis sint sequi quia quod ratione.</p>
          </div>

          <div className="item owner">
            <img src="https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi eum enim soluta animi unde, natus placeat facere temporibus voluptatibus doloremque quaerat deserunt sed expedita facilis sint sequi quia quod ratione.</p>
          </div>

          <div className="item">
            <img src="https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi eum enim soluta animi unde, natus placeat facere temporibus voluptatibus doloremque quaerat deserunt sed expedita facilis sint sequi quia quod ratione.</p>
          </div>

          <div className="item owner">
            <img src="https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi eum enim soluta animi unde, natus placeat facere temporibus voluptatibus doloremque quaerat deserunt sed expedita facilis sint sequi quia quod ratione.</p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea placeholder="Write a message" name="" id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}
