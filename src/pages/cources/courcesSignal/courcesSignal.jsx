import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./coursesSignal.css";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import Accordion from "../../../components/common/accordian";

const CoursesSignal = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Navbar/>
      <div className="outerCource">
        <div className="outerBrateKrams">
          <div className="centerWrapper">
            <div className="brateKramInfo">
              <ul>
                <li>Home</li>
                <li>All courses</li>
                <li>User Experience Design</li>
                <li>User Interface</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bannerInfoCources">
            <div className="centerWrapper">
                <div className="userExperience">
                    <div className="bestSellerBtn">
                        <button className="bestSellBtn">BEST SELLER</button>
                        <button className="bestSellBtnNew">NEW</button>
                        <button className="bestSellBtnPop">POPULAR</button>
                    </div>
                    <h1>User Experience Design Essentials - Adobe XD UI UX Design</h1>
                    <p>Use XD to get a job in UI Design, User Interface, User Experience design, UX design & Web Design</p>
                    <div className="ratingInfoBannerInfo">
                        <div className="ratingCard">
                            <span className="text">4.5</span>
                            <span><img src="images/star.png"/></span>
                            <span className="year">(1991)</span>
                        </div>
                        <div className="enrolled">
                           <span><img src="images/online-learning.svg"/></span>
                           853 enrolled on this course
                        </div>
                        <div className="enrolled">
                           <span><img src="images/wall-clock.svg"/></span>
                             Last updated 11/2021
                        </div>
                    </div>
                    <div className="ratingInfoUser">
                            <span><img src="images/user.png"/></span>
                            Satyam dubey
                    </div>
                </div>
            </div>
        </div>
        <div className="tabInfoContent">
            <div className="centerWrapper">
                <div className="tabSection">
                    <div className="leftTabInfo">
                    <Tabs>
                        <TabList>
                            <Tab>Overview</Tab>
                            <Tab>Course Content</Tab>
                            <Tab>Instructors</Tab>
                            <Tab>Reviews</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="outerTabInnerCnt">
                                <h2>Description</h2>
                                <p>Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur. This course is aimed at people interested in UI/UX Design. We’ll start from the very beginning and work all the way through, step by step. If you already have some UI/UX Design experience but want to get up to speed using Adobe XD then this course is perfect for you too! First, we will go over the differences between UX and UI Design. We will look at what our brief for this real-world project is, then we will learn about low-fidelity wireframes and how to make use of existing UI design kits.</p>
                                 <div className="aboutLearn">
                                    <h2>What you'll learn</h2>
                                    <div className="contentDataInr">
                                        <div className="cardInrPrt">
                                            <img src="images/Circleicons.png"/>
                                            Become a UX designer.
                                        </div>
                                        <div className="cardInrPrt">
                                            <img src="images/Circleicons.png"/>
                                            Become a UX designer.
                                        </div>
                                        <div className="cardInrPrt">
                                            <img src="images/Circleicons.png"/>
                                            Become a UX designer.
                                        </div>
                                        <div className="cardInrPrt">
                                            <img src="images/Circleicons.png"/>
                                            Become a UX designer.
                                        </div>
                                    </div>
                                    <div className="aboutLearn">
                                    <h2>Requirements</h2>
                                       <div className="contentDataInr">
                                        <ul>
                                            <li>You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe.</li>
                                            <li>No previous design experience is needed.</li>
                                            <li>No previous Adobe XD skills are needed.</li>
                                        </ul>
                                    </div>
                                    </div>
                                 </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                           <div className="outerTabInnerCnt">
                                <h2>Course Content</h2>
                                <Accordion/>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <h2>Content 3</h2>
                            <p>Tab 3 content goes here.</p>
                        </TabPanel>
                        <TabPanel>
                            <h2>Content 4</h2>
                            <p>Tab 4 content goes here.</p>
                        </TabPanel>
                    </Tabs>
                    </div>
                    <div className="videoCardLession">
                        <div className="videoData">
                           <iframe src="https://www.youtube.com/embed/-mJFZp84TIY?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt" title="Introduction to React Js + Installation | Complete React Course in Hindi #1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className="outerCardPr">
                            <div className="priceIn">
                                <h3>$96.00</h3>
                                <p>$76.00</p>
                            </div>
                            <button className="addtoCart">Add to Cart</button>
                            <button className="buyNowBtn">Buy Now</button>
                            <h5>30-Day Money-Back Guarantee</h5>
                            <div className="lessionInfo">
                                <div className="innerLesson">
                                    <div className="cntLft">
                                        <img src="images/video-file.png"/>
                                        Lessons
                                    </div>
                                    <div className="smallIfo">20</div>
                                </div>
                                <div className="innerLesson">
                                    <div className="cntLft">
                                        <img src="images/video-file.png"/>
                                        Lessons
                                    </div>
                                    <div className="smallIfo">20</div>
                                </div>
                                <div className="innerLesson">
                                    <div className="cntLft">
                                        <img src="images/video-file.png"/>
                                        Lessons
                                    </div>
                                    <div className="smallIfo">20</div>
                                </div>
                                <div className="innerLesson">
                                    <div className="cntLft">
                                        <img src="images/video-file.png"/>
                                        Lessons
                                    </div>
                                    <div className="smallIfo">20</div>
                                </div>
                                <div className="innerLesson">
                                    <div className="cntLft">
                                        <img src="images/video-file.png"/>
                                        Lessons
                                    </div>
                                    <div className="smallIfo">20</div>
                                </div>
                                <div className="innerLesson">
                                    <div className="cntLft">
                                        <img src="images/video-file.png"/>
                                        Lessons
                                    </div>
                                    <div className="smallIfo">20</div>
                                </div>
                            </div>
                            <div className="socialInfo"></div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
      </div>
      <div className="py-[100px] px-[50px] lg:px-[100px]  bg-black text-white">
        <Footer/>
      </div>
    </div>
  );
};

export default CoursesSignal;
