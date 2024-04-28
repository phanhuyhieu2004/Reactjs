import './createss.css'
function Createss() {
    return(
        <>
            <>
                <div style={{ textAlign: "left" }}>
                    <a href="#" className="button">
                        Back to customer list
                    </a>
                </div>
                <div id="form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" id="firstname" placeholder="Enter first name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" id="lastname" placeholder="Enter last name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="province">Province</label>
                            <select id="province">
                                <option value="">Select province</option>
                                <option value="province1">Province 1</option>
                                <option value="province2">Province 2</option>
                                <option value="province3">Province 3</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                        <input type="submit" defaultValue="Save" />
                    </form>
                </div>
            </>

        </>
    )
}
export default Createss