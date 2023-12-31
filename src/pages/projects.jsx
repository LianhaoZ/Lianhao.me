import { Footer } from "../Components";

const ProjectsPage = () => {
    return(
        <>
        <div className='prose m-auto'>
            <h1>
                <div className=' text-gray-200 justify-center pt-2 lt-sm:text-size-0.75em'>
                    <div>Projects</div>
                </div>
            </h1>
            <p className="text-gray-300">
                Below is the list of projects I am involved in. 
            </p> 

            {/* <div>need to insert projects...</div> */}
            <Footer />
        </div> 
            
        
        </>
    )
}

export default ProjectsPage;