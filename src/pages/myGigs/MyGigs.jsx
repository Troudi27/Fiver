import { Link } from "react-router-dom"
import "./MyGigs.scss"

export default function MyGigs() {
  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add">
            <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img className="pimg" src="https://images.pexels.com/photos/11295165/pexels-photo-11295165.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            </td>
            <td>Gig 1</td>
            <td>88</td>
            <td>122</td>
            <td>
              <img className="delete" src="/img/delete.png" alt="" />
            </td>
          </tr>

          <tr>
            <td>
              <img className="pimg" src="https://images.pexels.com/photos/11295165/pexels-photo-11295165.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            </td>
            <td>Gig 1</td>
            <td>88</td>
            <td>122</td>
            <td>
              <img className="delete" src="/img/delete.png" alt="" />
            </td>
          </tr>

          <tr>
            <td>
              <img className="pimg" src="https://images.pexels.com/photos/11295165/pexels-photo-11295165.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            </td>
            <td>Gig 1</td>
            <td>88</td>
            <td>122</td>
            <td>
              <img className="delete" src="/img/delete.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}
