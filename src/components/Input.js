import React, { useState } from "react";

function Input() {
    const [state, setState] = useState([]);
    const [total, setTotal] = useState(0);
    const [totaltip, setTotalTip] = useState(0);
    const [customerdata, setCustomerdata] = useState({
        name: "",
        tip: 0,
        service: 0,
        totalamt: 0,
        id: Math.random()
    });
    const Handleinput = (e) => {
        console.log(e.target.name);
        setCustomerdata({ ...customerdata, [e.target.name]: e.target.value })
        // console.log(customerdata);
        console.log(e.target.name + e.target.value);
    }
    function AddCustomer() {
        // console.log(customerdata.tip);
        // console.log(customerdata.totalamt);
        customerdata.tip = customerdata.totalamt * customerdata.service / 100;
        // console.log(customerdata.service);

        setState([...state, customerdata]);
        console.log(state);

    }

    const CalculateTotal = () => {
        let tiptotal = 0;
        state.map((ele) => (
            tiptotal = tiptotal + ele.tip
        ))
        setTotalTip(tiptotal);

        setTotal(state.length);
    }



    return (
        <div className="Main">

            <div className="billamt">
                <p >Enter your bill amount </p>
                <input type="Number" name="totalamt" onChange={Handleinput} />
            </div>

            <div className="billinfo">
                <span className="ServiceName">How Was The Service?</span>
                <select className="Select" name="service" onChange={Handleinput}>
                    <option selected disabled  >Select</option>
                    <option value="20"  >Excellent-20%</option>
                    <option value="10"  >Medium-10%</option>
                    <option value="5" >bad-5%</option>
                </select>
            </div>
            <div className="addcustomer">
                <input placeholder="Customer Name" className="CustomerName" name="name" onChange={Handleinput} />
                <button className="btn btn-success" onClick={AddCustomer}>Add Customer</button>
            </div>
            <div className="Cname">
                <h3 className="Customerlist">Customer List</h3>
                <ul>
                    {state.map((ele) => (
                        <li> Customer Name :{ele.name} --- Tip Amount: {ele.tip}</li>
                    ))}
                </ul>
            </div>
            <div className="table">
                <button className="btn1 " onClick={CalculateTotal}>Calculate tip and & customer</button>

                <table border="3" className="Table"> <tbody>
                    <tr>
                        <th> Total Customer </th>
                        <th>Tip amount</th>
                    </tr>
                    <tr>
                        {<td>{total} </td>}
                        {<td>{totaltip} </td>}
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    )
}
export default Input
