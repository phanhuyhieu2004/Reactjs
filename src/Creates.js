import './create.css'
function Creates() {
    return(
        <>
            <div className="container">
                <a href="#" className="button">
                    Add new customer
                </a>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <button>Search</button>
                </div>
            </div>
            <table>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>View</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>john@example.com</td>
                    <td>123 Main St, City</td>
                    <td>
                        <a href="#">Edit</a>
                    </td>
                    <td>
                        <a onclick="return confirm('Delete?')">Delete</a>
                    </td>
                    <td>
                        <a href="#">View</a>
                    </td>
                </tr>
                {/* Add more rows as needed */}
                </tbody>
            </table>
        </>

    )
}
export default Creates