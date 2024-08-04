import { Footer } from "../Components";
import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <div className='prose m-auto'>
            <h1>
                <span className='text-size-0.5em text-gray-200 text-xl'>Hey! My name is</span>
                <div className=' text-gray-200 pt-2 lt-sm:text-size-0.75em'>
                    <div>Lianhao Zheng.</div>
                </div>
            </h1>
            <div className="text-gray-300">
                <p>
                    I'm an undergrad pursuing a four-year concurrent BA and MS in Computer Science at{' '}
                    <a target='_blank' href='https://www.northwestern.edu/'>
                        <span className="text-gray-200 hover: brightness-150" >Northwestern University. </span>
                    </a>
                    I am currently working with  
                    <a target='_blank' href='https://projectolympus.app'>
                        <span className="text-gray-200 hover: brightness-150" >Project Olympus LLC </span> 
                    </a> as a software engineer intern for the summer.  
                </p>
                <p>
                    At school, I am a committe member on the {' '}
                    <a target='_blank' href='http://nwusase.weebly.com'>
                        <span className="text-gray-200 hover: brightness-150" > Society of Asian Scientists and Engineers </span> 
                    </a>, and I worked on the software team at  
                    <a target='_blank' href='https://www.linkedin.com/company/northwestern-university-ieee-student-branch/'>
                        <span className="text-gray-200 hover: brightness-150" > Northwestern IEEE. </span> 
                    </a>
                     
                    
                    I was also a Peer Mentor for{' '}
                    <a target='_blank' href='https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/111.html'>
                        <span className="text-gray-200 hover: brightness-150" > COMP_SCI 111: Fundamentals of Computer Programming </span>
                    </a>
                    and 
                    <a target='_blank' href='https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/396-6.html'>
                        <span className="text-gray-200 hover: brightness-150" > COMP_SCI 396: Intro to Web Development </span>
                    </a>.
                </p> 
                {/* <hr className='w-10 m-auto' />  */}
                <p>
                    Outside of School, I am a founder at{' '}
                    <a target='_blank' href='https://www.thegarage.northwestern.edu/programs/the-luminate-program'>
                        <span className="text-gray-200 hover: brightness-150" >The Garage </span> 
                    </a>, where I am currently working on developing a ride share application 
                     to help connect riders to save cost and lower carbon emission. Besides software engineering, I also interned at{' '}
                    <a target='_blank' href='https://sites.northwestern.edu/lanelab/'>
                        <span className="text-gray-200 hover: brightness-150" >The Lane Lab </span>
                    </a>{' '}
                    as a Research Assistant, where I worked on building a pipeline for image classification of cells under salmonella infection.
                    <br></br> 
                </p>
                <p>
                    You can find more about my projects in {' '} 
                    <Link to="/projects" >
                    <span className="text-gray-200 hover: brightness-150">  Projects </span>
                    </Link>
                </p>
                {/* <p> more stuff to come...</p> */}
            </div>
            
            <hr className='w-10 m-auto' /> 
            <div className="text-gray-300">
                <p>
                    Find me on{' '}
                    <a target='_blank' href='https://github.com/LianhaoZ'>
                        <span className="text-gray-200 hover: brightness-150" >GitHub </span>
                    </a>{' '}
                    and{' '}
                    <a href='https://www.linkedin.com/in/lianhao-zheng-a56030207/'><span className="text-gray-200 hover: brightness-150" >LinkedIn</span></a>,
                    or shoot me an email at{' '}
                    <a
                        href='mailto:lianzheng2026@northwestern.edu' 
                        target='_blank'
                    >
                        <span className="text-gray-200 hover: brightness-150" >lianzheng2026@northwestern.edu </span>
                         
                    </a>{' '} 
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage;