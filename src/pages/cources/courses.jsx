import React from "react";
import "./courses.css";
import Navbar from "../../components/Navbar";

const CoursesPage = () => {
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
        <div className="outerCourceHeading">
          <div className="centerWrapper">
            <h2>User Interface Courses</h2>
            <p>Write an introductory description of the category.</p>
          </div>
        </div>
        <div className="courceCardPrice">
          <div className="centerWrapper">
            <div className="cardDataInfo">
              <div className="leftAccordianInfoCategory">
                 <div className="outerItemCategory">
                    <h4>Category <img src="images/topArrow.png"alt="top arrow"/></h4>
                    <label className="itemCheckinfo">
                      <div className="checkBoxInfo"><input type="checkbox"/> Art</div> 
                      <div className="countInfo">(18)</div>
                    </label>
                    <label className="itemCheckinfo">
                      <div className="checkBoxInfo"><input type="checkbox"/> Exercise</div> 
                      <div className="countInfo">(18)</div>
                    </label>
                    <label className="itemCheckinfo">
                      <div className="checkBoxInfo"><input type="checkbox"/> Software Development</div> 
                      <div className="countInfo">(18)</div>
                    </label>
                    <label className="itemCheckinfo">
                      <div className="checkBoxInfo"><input type="checkbox"/>  Music</div> 
                      <div className="countInfo">(18)</div>
                    </label>
                    <label className="itemCheckinfo">
                      <div className="checkBoxInfo"><input type="checkbox"/> Material Design</div> 
                      <div className="countInfo">(18)</div>
                    </label>
                    <label className="itemCheckinfo">
                      <div className="checkBoxInfo"><input type="checkbox"/> Design Photography</div> 
                      <div className="countInfo">(18)</div>
                    </label>
                 </div>
                 <div className="outerItemCategory">
                    <h4>Price <img src="images/topArrow.png"alt="top arrow"/></h4>
                    <label className="itemCheckinfo">
                      <div className="checkBoxInfo"><input type="radio" name="all"/> All</div> 
                      <div className="countInfo">(18)</div>
                    </label>
                    <label className="itemCheckinfo">
                      <div className="checkBoxInfo"><input type="radio" name="all"/> Free</div> 
                      <div className="countInfo">(18)</div>
                    </label>
                    <label className="itemCheckinfo">
                      <div className="checkBoxInfo"><input type="radio" name="all"/> Food</div> 
                      <div className="countInfo">(18)</div>
                    </label>
                 </div>
              </div>
              <div className="rightDataCardInfo">
                <div className="shortingInfo">
                  <div className="leftShort">
                    <p>Showing <b>250</b> total results</p>
                  </div>
                  <div className="rightShort">
                    Sort by: <select><option>Most Popular</option></select>
                  </div>
                </div>
                <div className="cardMainDetails">
                  <div className="innerCardDta">
                    <div className="cardpart">
                      <div className="imagesData">
                        <img src="images/cardItem.png" alt="Card Info" />
                        <button className="popularBtn">POPULAR</button>
                        <button className="bestBtn">BEST SELLER</button>
                       </div>
                       <div className="ratingInfo">
                         <span className="text">4.5</span>
                         <span><img src="images/star.png"/></span>
                         <span className="year">(1991)</span>
                       </div>
                       <h5>Complete Python Bootcamp From Zero to Hero in Python</h5>
                       <div className="leassonIcon">
                          <div className="leftLessionIcon">
                            <img src="images/document.png" alt="document"/>
                            6 lesson
                          </div>
                          <div className="leftLessionIcon">
                            <img src="images/document.png" alt="document"/>
                            3h 56m
                          </div>
                          <div className="leftLessionIcon">
                            <img src="images/document.png" alt="document"/>
                            Beginner
                          </div>
                       </div>
                       <div className="priceData">
                         <div className="leftPrice">
                           <img src="images/circle.png" alt="document"/>
                            Ali Tufan
                         </div>
                         <div className="rightPrice">
                           <strike>$179</strike>
                           <b>$79</b>
                         </div>
                       </div>
                    </div>
                  </div>
                  <div className="innerCardDta">
                    <div className="cardpart">
                      <div className="imagesData">
                        <img src="images/cardItem.png" alt="Card Info" />
                        <button className="popularBtn">POPULAR</button>
                        <button className="bestBtn">BEST SELLER</button>
                       </div>
                       <div className="ratingInfo">
                         <span className="text">4.5</span>
                         <span><img src="images/star.png"/></span>
                         <span className="year">(1991)</span>
                       </div>
                       <h5>Complete Python Bootcamp From Zero to Hero in Python</h5>
                       <div className="leassonIcon">
                          <div className="leftLessionIcon">
                            <img src="images/document.png" alt="document"/>
                            6 lesson
                          </div>
                          <div className="leftLessionIcon">
                            <img src="images/document.png" alt="document"/>
                            3h 56m
                          </div>
                          <div className="leftLessionIcon">
                            <img src="images/document.png" alt="document"/>
                            Beginner
                          </div>
                       </div>
                       <div className="priceData">
                         <div className="leftPrice">
                           <img src="images/circle.png" alt="document"/>
                            Ali Tufan
                         </div>
                         <div className="rightPrice">
                           <strike>$179</strike>
                           <b>$79</b>
                         </div>
                       </div>
                    </div>
                  </div>
                  <div className="innerCardDta">
                    <div className="cardpart">
                      <div className="imagesData">
                        <img src="images/cardItem.png" alt="Card Info" />
                        <button className="popularBtn">POPULAR</button>
                        <button className="bestBtn">BEST SELLER</button>
                       </div>
                       <div className="ratingInfo">
                         <span className="text">4.5</span>
                         <span><img src="images/star.png"/></span>
                         <span className="year">(1991)</span>
                       </div>
                       <h5>Complete Python Bootcamp From Zero to Hero in Python</h5>
                       <div className="leassonIcon">
                          <div className="leftLessionIcon">
                            <img src="images/document.png" alt="document"/>
                            6 lesson
                          </div>
                          <div className="leftLessionIcon">
                            <img src="images/document.png" alt="document"/>
                            3h 56m
                          </div>
                          <div className="leftLessionIcon">
                            <img src="images/document.png" alt="document"/>
                            Beginner
                          </div>
                       </div>
                       <div className="priceData">
                         <div className="leftPrice">
                           <img src="images/circle.png" alt="document"/>
                            Ali Tufan
                         </div>
                         <div className="rightPrice">
                           <strike>$179</strike>
                           <b>$79</b>
                         </div>
                       </div>
                    </div>
                  </div>
                  <div className="innerCardDta">
                    <div className="cardpart">
                      <div className="imagesData">
                        <img src="images/cardItem.png" alt="Card Info" />
                        <button className="popularBtn">POPULAR</button>
                        <button className="bestBtn">BEST SELLER</button>
                       </div>
                       <div className="ratingInfo">
                         <span className="text">4.5</span>
                         <span><img src="images/star.png"/></span>
                         <span className="year">(1991)</span>
                       </div>
                       <h5>Complete Python Bootcamp From Zero to Hero in Python</h5>
                       <div className="leassonIcon">
                          <div className="leftLessionIcon">
                            <img src="images/document.png" alt="document"/>
                            6 lesson
                          </div>
                          <div className="leftLessionIcon">
                            <img src="images/document.png" alt="document"/>
                            3h 56m
                          </div>
                          <div className="leftLessionIcon">
                            <img src="images/document.png" alt="document"/>
                            Beginner
                          </div>
                       </div>
                       <div className="priceData">
                         <div className="leftPrice">
                           <img src="images/circle.png" alt="document"/>
                            Ali Tufan
                         </div>
                         <div className="rightPrice">
                           <strike>$179</strike>
                           <b>$79</b>
                         </div>
                       </div>
                    </div>
                  </div>
                  <div className="innerCardDta">
                    <div className="cardpart">
                      <div className="imagesData">
                        <img src="images/cardItem.png" alt="Card Info" />
                        <button className="popularBtn">POPULAR</button>
                        <button className="bestBtn">BEST SELLER</button>
                       </div>
                       <div className="ratingInfo">
                         <span className="text">4.5</span>
                         <span><img src="images/star.png"/></span>
                         <span className="year">(1991)</span>
                       </div>
                       <h5>Complete Python Bootcamp From Zero to Hero in Python</h5>
                       <div className="leassonIcon">
                          <div className="leftLessionIcon">
                            <img src="images/document.png" alt="document"/>
                            6 lesson
                          </div>
                          <div className="leftLessionIcon">
                            <img src="images/document.png" alt="document"/>
                            3h 56m
                          </div>
                          <div className="leftLessionIcon">
                            <img src="images/document.png" alt="document"/>
                            Beginner
                          </div>
                       </div>
                       <div className="priceData">
                         <div className="leftPrice">
                           <img src="images/circle.png" alt="document"/>
                            Ali Tufan
                         </div>
                         <div className="rightPrice">
                           <strike>$179</strike>
                           <b>$79</b>
                         </div>
                       </div>
                    </div>
                  </div>
                  <div className="innerCardDta">
                    <div className="cardpart">
                      <div className="imagesData">
                        <img src="images/cardItem.png" alt="Card Info" />
                        <button className="popularBtn">POPULAR</button>
                        <button className="bestBtn">BEST SELLER</button>
                       </div>
                       <div className="ratingInfo">
                         <span className="text">4.5</span>
                         <span><img src="images/star.png"/></span>
                         <span className="year">(1991)</span>
                       </div>
                       <h5>Complete Python Bootcamp From Zero to Hero in Python</h5>
                       <div className="leassonIcon">
                          <div className="leftLessionIcon">
                            <img src="images/document.png" alt="document"/>
                            6 lesson
                          </div>
                          <div className="leftLessionIcon">
                            <img src="images/document.png" alt="document"/>
                            3h 56m
                          </div>
                          <div className="leftLessionIcon">
                            <img src="images/document.png" alt="document"/>
                            Beginner
                          </div>
                       </div>
                       <div className="priceData">
                         <div className="leftPrice">
                           <img src="images/circle.png" alt="document"/>
                            Ali Tufan
                         </div>
                         <div className="rightPrice">
                           <strike>$179</strike>
                           <b>$79</b>
                         </div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
