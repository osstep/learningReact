import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import courses from '../data/courses'
import { Link } from 'react-router-dom'


const SingleCourse = () => {
  const params = useParams()
  const navigate = useNavigate()
  
  const course = courses.find((course) => course.slug === params.courseSlug)

  
  useEffect(() => {
    if (!course) {
        navigate('..', {relative: 'path'})
      }
  }, [course, navigate])


  //   if (!course) {
  //     return (
  //       <>
  //         <NotFound></NotFound>
  //         <Link
  //           to=".."
  //           relative="path"
  //         >
  //           All Courses
  //         </Link>
  //       </>
  //     )
  //   }

  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h3>{course?.id}</h3>
      <Link
        to=".."
        relative="path"
      >
        All Courses
      </Link>
    </>
  )
}

export default SingleCourse
