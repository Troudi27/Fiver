import { Link } from "react-router-dom"
import "./Messages.scss"

const message = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quia, alias cumque quas laudantium quibusdam exercitationem delectus provident explicabo quis ullam autem officiis reiciendis ducimus adipisci nesciunt assumenda architecto. Ex!`

export default function Messages() {
  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>Houssem Troudi</td>
            <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>

          <tr className="active">
            <td>Houssem Troudi</td>
            <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>

          <tr >
            <td>Houssem Troudi</td>
            <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
          </tr>
          <tr >
            <td>Houssem Troudi</td>
            <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
          </tr>
        </table>
      </div>
    </div>
  )
}
