import '../CSS/Career.css'

function Career() {
    return (
        <div>
            <div className='CareerSection'>
                <div className='CareerSectionTitle'>Want to Work at <br></br><span className='brandcolor'>Aero2Astro</span> ?</div>
                <div className='CareerSectionDecrip'>
                    <div className="container">
                        <div className="row">
                            <div className="col CareerSectionHeading">WHO ARE WE LOOKING FOR.</div>
                            <div className="w-100"></div>
                            <div className="col">Are you someone who is dream-oriented <br></br>
                                person with a Strong Mindset to make a change?</div>
                        </div>
                    </div>
                </div>

                <div className='CareerForm'>
                    <div className="containerFM">
                        <form id="contact" action="" method="post">
                            <h3>Quick Approach</h3>
                            <h4>Contact today to work with <span className='brandcolor'>Aero2Astro</span></h4>
                            <fieldset>
                                <input placeholder="Your name" type="text" required ></input>
                            </fieldset>
                            <fieldset>
                                <input placeholder="Your Email Address" type="email" required></input>
                            </fieldset>
                            <fieldset>
                                <input placeholder="Your Phone Number" type="tel" required></input>
                            </fieldset>
                            <fieldset>
                                <div className="dropdown">
                                    <button onclick="myFunction()" className="dropbtn">Select Location you want to work at</button>
                                    <div id="myDropdown" className="dropdown-content">
                                        <a href="/">Link 1</a>
                                        <a href="/">Link 2</a>
                                        <a href="/">Link 3</a>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <p className='contacttext'> Choose Job Type</p>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text contacttext">
                                            <p>Internship &nbsp;</p>
                                            <input type="radio" aria-label="Radio button for following text input"></input>
                                        </div>
                                        <div className="input-group-text contacttext">
                                            <p>Job &nbsp;</p>
                                            <input type="radio" aria-label="Radio button for following text input"></input>
                                        </div>
                                    </div>
                                    {/* <input type="text" className="form-control" aria-label="Text input with radio button"></input> */}
                                </div>
                                <div className="input-group">
                                    <div className="input-group-prepend">

                                    </div>
                                    {/* <input type="text" className="form-control" aria-label="Text input with radio button"></input> */}
                                </div>
                            </fieldset>

                            <fieldset>
                                <p className='contacttext'> Upload Resume</p>

                                <div className="input-group mb-3 contacttext">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Upload</span>
                                    </div>
                                    <div className="custom-file">
                                        <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                                    </div>
                                </div>
                                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>

                            </fieldset>
                        </form>


                    </div>
                </div>
                <div className='CareerList'>
                    <div className='CareerListTitle'>Opening Available Currently</div>
                    <table className="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Position</th>
                                <th scope="col">Mission</th>
                                <th scope="col">Location</th>
                                <th scope="col">Job Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Career;
