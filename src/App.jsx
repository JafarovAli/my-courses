import './App.css'
import Header from './Components/Header'
import { courses } from './Components/Data'
import Course from './Components/Course'
import './css/Course.css'

function App()
{
  return (
    <>
      <Header />
      <div className='course-main'>
        {
          courses?.map((course) => (
            <Course key={course.id} course={course} />
          ))
        }
      </div>
    </>
  )
}

export default App