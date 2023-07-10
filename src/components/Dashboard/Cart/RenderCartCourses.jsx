import { FaStar } from "react-icons/fa"
import { RiDeleteBin6Line } from "react-icons/ri"
import ReactStars from "react-rating-stars-component"
import { useDispatch, useSelector } from "react-redux"

import { removeFromCart } from "../../../slices/cartSlice"

export default function RenderCartCourses() {
  const { cart } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const getRatingsAvgCount =(course) => {
    let sum = 0;

    // Iterate over each review
    course.ratingAndReviews.forEach((rate) => {
      sum += rate.rating;
    });
  
    // Calculate average rating. Ensure we don't divide by 0.
    let avgCount = course.ratingAndReviews.length > 0 ? sum / course.ratingAndReviews.length : 0;
  
    return avgCount;
  }
  return (
    <div className="flex flex-1 flex-col">
      {cart.map((course, indx) => (
        <div
          key={course._id}
          className={`flex w-full flex-wrap items-start justify-between gap-6 ${
            indx !== cart.length - 1 && "border-b border-b-richblack-400 pb-6"
          } ${indx !== 0 && "mt-6"} `}
        >
          <div className="flex flex-1 flex-col gap-4 xl:flex-row">
            <img
              src={course?.thumbnail}
              alt={course?.courseName}
              className="h-[148px] w-[220px] rounded-lg object-cover"
            />
            <div className="flex flex-col space-y-1">
              <p className="text-lg font-medium text-darkblue font-walsheimCon">
                {course?.courseName}
              </p>
              <p className="text-sm text-richblack-300 font-walsheimMed">
                {course?.category?.name}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-yellow-600">{getRatingsAvgCount(course).toPrecision(2)}</span>
                <ReactStars
                  count={5}
                  value={getRatingsAvgCount(course)}
                  size={20}
                  edit={false}
                  activeColor="#ffd700"
                  emptyIcon={<FaStar />}
                  fullIcon={<FaStar />}
                />
                <span className="text-richblack-400">
                  {course?.ratingAndReviews?.length} Ratings
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <button
              onClick={() => dispatch(removeFromCart(course._id))}
              className="flex items-center gap-x-1 rounded-md border border-richblack-600 bg-white py-3 px-[12px] text-pink-200 duration-300 hover:scale-90"
            >
              <RiDeleteBin6Line />
              <span>Remove</span>
            </button>
            <p className="mb-6 text-3xl font-medium text-darkblue font-walsheimReg">
              ₹ {course?.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}