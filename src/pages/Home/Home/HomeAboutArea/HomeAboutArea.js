import React from "react";

const HomeAboutArea = () => {
  return (
    //       <>
    //          <section className="about-area pt-120 pb-90">
    //             <div className="container">
    //                <div className="row">
    //                   <div className="col-xl-6 col-lg-5 about_left">
    //                      <div className="medical-icon-brand-2">
    //                         <img src="img/about/medical-brand-icon-border.png" alt=""/>
    //                      </div>
    //                      <div className="about-left-side pos-rel mb-30">
    //                         <div className="about-front-img">
    //                            <img src="img/about/about-img-4.jpg" alt=""/>
    //                         </div>
    //                         <div className="about-shape">
    //                            <img src="img/about/about-shape.png" alt=""/>
    //                         </div>
    //                      </div>
    //                   </div>
    //                   <div className="col-xl-6 col-lg-7">
    //                      <div className="about-right-side pt-55 mb-30 flex justify-center flex-col">
    //                         <div className="about-title mb-20">
    //                            <h5>About Us</h5>
    //                            {/* <h1>Short Story About Blessed Soul Health Care.</h1> */}
    //                         </div>
    //                         <div className="about-text">
    //                            <p>At Blessed Soul Healthcare, we are dedicated to providing a safe, nurturing, and supportive environment where residents can thrive with dignity and independence.
    //                                Our mission is to offer an exceptional care tailored to meet the unique needs of each while fostering a sense of community and belonging.</p>
    //                            <p>At Blessed Soul Healthcare, we believe in celebrating life’s blessings every day. With a team of dedicated caregivers, a warm atmosphere, and a focus on quality care. We strive to be a trusted partner in your loved one’s journey.
    // </p><p>Let us provide peace of mind while, your loved one enjoys a vibrant and supportive community.
    // </p><br/>
    //                         </div>

    //                      </div>
    //                      <div className="about-right-side  about-right-side-bottom pt-55 mb-30 flex justify-center flex-col">
    //                         <div className="about-title mb-20">
    //                            <h5>Core Value</h5>
    //                            {/* <h1>Short Story About Blessed Soul Health Care.</h1> */}
    //                         </div>
    //                         <div className="about-text">
    //                            <p>Compassion, Integrity, Rescept, Excellence, Innovation, Community, Family – centered care.</p><br/>
    //                         </div>
    //                         <div className="about-author d-flex align-items-center">
    //                            <div className="author-ava">
    //                               <img src="img/about/author-ava.png" alt=""/>
    //                            </div>
    //                            <div className="author-desination">
    //                               <h4>Esther Awosogba</h4>
    //                               <h6>founder</h6>
    //                            </div>
    //                         </div>
    //                      </div>
    //                   </div>
    //                </div>
    //             </div>
    //          </section>
    //       </>
    <>
      <section className="about-area pt-120 pb-90" id="about">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-5 about_left">
              <div className="medical-icon-brand-2">
                <img src="img/about/medical-brand-icon-border.png" alt="" />
              </div>
              <div className="about-left-side pos-rel mb-30">
                {" "}
                <div className="about-front-img">
                  <img src="img/about/about-img-4.jpg" alt="" />
                </div>
                <div className="about-shape">
                  <img src="img/about/about-shape.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="about-right-side pt-55 mb-30">
                <div className="about-title mb-20">
                  <h5>About Us</h5>
                </div>
                <div className="about-text mb-50">
                  <p>
                    At Blessed Soul Healthcare, we are dedicated to providing a
                    safe, nurturing, and supportive environment where residents
                    can thrive with dignity and independence. Our mission is to
                    offer an exceptional care tailored to meet the unique needs
                    of each while fostering a sense of community and belonging.
                  </p>
                </div>
                <div className="our-destination">
                  <div className="single-item mb-30">
                    <div className="mv-icon f-left">
                      <img src="img/about/destination-icon-1.png" alt="" />
                    </div>
                    <div className="mv-title fix">
                      <h3>Core Values</h3>
                      <p>
                        At Blessed Soul Healthcare, our core value guide every
                        aspect of the care and support we provide to our
                        residents and their families.
                      </p>
                      <ul className="professinals-list pt-30">
                        <li>
                          <i className="fa fa-check"></i>
                          COMPASSION
                        </li>
                        <li>
                          <i className="fa fa-check"></i>
                          INTEGRITY
                        </li>
                        <li>
                          <i className="fa fa-check"></i>
                          RESPECT
                        </li>
                        <li>
                          <i className="fa fa-check"></i>
                          EXCELLENCE
                        </li>
                        <li>
                          <i className="fa fa-check"></i>
                          COMMUNITY
                        </li>
                        <li>
                          <i className="fa fa-check"></i>
                          INNOVATION
                        </li>
                        <li>
                          <i className="fa fa-check"></i>
                          FAMILY-CENTERED CARE
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="single-item">
                    <div className="mv-icon f-left">
                      <img src="img/about/destination-icon-2.png" alt="" />
                    </div>
                    <div className="mv-title fix">
                      <h3>Our Vission</h3>
                      <p>
                        We aim to create a home away from home, where residents
                        enjoy a fulfilling lifestyle through compassionate care,
                        meaningful connections and a focus on holistic
                        wellbeing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAboutArea;
