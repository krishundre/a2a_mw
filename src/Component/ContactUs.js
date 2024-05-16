import '../CSS/ContactUs.css'
import PhoneIcon from '../Asset/device-mobile.svg'
function Contact() {
    return (
        <div>
            <div className='ContactSec'>
                <div className="container ">
                    <div className="contact-section">
                        <h2 className="ct-section-head ContactTitle">Contact <span className='brandcolor'>Us</span></h2>
                        <div className="row contact-fields">
                            <div className="col-md-8 left-form">
                                <form method="post" action="">
                                    <div class="form-group">
                                        <label className="sr-only" for="fname">First Name *</label>
                                        <input className="required form-control" id="fname" name="fname" placeholder="First Name&nbsp;*" type="text" required></input>

                                    </div>
                                    <div className="form-group">
                                        <label className="sr-only" for="lname">Last Name *</label>
                                        <input className="required form-control" id="lname" name="lname" placeholder="Last Name&nbsp;*" type="text" required></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="sr-only" for="contactEmail">Email *</label>
                                        <input className="required form-control h5-email" id="contactEmail" name="contactEmail" placeholder="Email&nbsp;*" type="text" required></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="sr-only" for="contactPhone">Phone *</label>
                                        <input className="required form-control h5-phone" id="contactPhone" name="contactPhone" placeholder="Phone&nbsp;*" type="text" required></input>
                                    </div>
                                    <div classNames="form-group">
                                        <label className="sr-only" for="comment">Type your message here</label>
                                        <textarea className="required form-control" id="comment" name="comment" placeholder="Type your message here&nbsp;*" rows="6" required></textarea>
                                    </div>
                                    <button className="btnC btn-accent sbtbtn" type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ContactInfo'>
                    <div class="container">
                        <div class="row">
                            <div class="col ContactInfoTitle">Is it more Important?</div>
                            <div class="w-100"></div>
                            <div class="col"><img className='icon' src={PhoneIcon} alt='Phone Icon'></img><a href='/'>+91 85914 81281</a></div>
                            <div class="w-100"></div>
                            <div class="col"><img className='icon' src={PhoneIcon} alt='Phone Icon'></img><a href='/'>krisundre@gmail.com</a></div>
                            <div class="w-100"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact;
