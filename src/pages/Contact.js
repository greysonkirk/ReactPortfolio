import React from "react";

export default function Contact() {
  const senderMail = "greysonkirk@yahoo.com";

  // const emailTransporter = nodemailer.createTransport({
  //             host: 'smtp.mail.yahoo.com',
  //             port: 465,
  //             service:'yahoo',
  //             secure: false,
  //             auth: {
  //                user: senderMail,
  //                pass: 'mypassword'
  //             },
  //             debug: false,
  //             logger: true
  // });

  return (
    <div className="container bg-dark">

    <form id="contactForm" method="POST" onsubmit="return submitUserForm();">
       
      <div className="container contact">
        <div className="row my-3">
          <div className="col-md-3">
            <div className="contact-info text-light mt-4">
              <i className="fas fa-envelope-open-text fa-3x red"></i>
        
              <h4>I would love to hear from you!</h4>
                 <h5 className="mt-3"><a href="tel:972-332-4205" style={{color:"white"}}><i className="fas fa-phone-alt"></i> (214)
                                  236-9009 </a></h5>
            </div>
          </div>
          <div className="col-md-9">
            <div className="contact-form text-light text-left">
  
             
              <div className="form-group">
                <label className="control-label col-sm-2" for="fname">Name:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="fname" placeholder="Enter Name (required)"
                    name="fname" required></input>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" for="subject">Subject:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="subject"
                    placeholder="Enter subject (required)" name="subject" required></input>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" for="email">Email:</label>
                <div className="col-sm-10">
                  <input type="email" className="form-control" id="email" placeholder="Enter email (required)"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"	name="email" required></input>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" for="phone">Phone:</label>
                <div className="col-sm-10">
                  <input type="phone" className="form-control" id="phone" maxlength="10"
                    placeholder="Enter phone number (required)" name="phone" required></input>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" for="comment">Message:</label>
                <div className="col-sm-10">
                  <textarea className="form-control" rows="5" id="comment" name="comment" required></textarea>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
  
  
                  <button type="submit" className="btn btn-success my-2">Submit</button>
                </div>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    </form>
  
  </div>
  
  );
}
