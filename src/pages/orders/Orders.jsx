
import "./Orders.scss"

export default function Orders() {

  const curentUser ={
    id:1,
    username:"houssem",
    isSeller:true,
}

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{curentUser ?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img className="pimg" src="https://images.pexels.com/photos/11295165/pexels-photo-11295165.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            </td>
            <td>Gig 1</td>
            <td>88</td>
            <td>122</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
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
              <img className="message" src="/img/message.png" alt="" />
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
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}
