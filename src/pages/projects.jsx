import { Footer } from "../Components";
import { projects } from "../constants/Data";
import '../Components/project.css';
import { Mask, cell } from "../../public/assets";
import { Link } from "react-router-dom";

const projectcard = ({ index,
    name,
    description,
    tags,
    image,
    source_code_link,
}) => {
    return (
        <a className='project'>
            <h3 className='align-mid text'>
                {name}
            </h3>
            <p className='description'>{description}</p>
            <a className=" m-auto" href={source_code_link}><img src={image}> </img> </a>

        </a>
    )
}

const ProjectsPage = () => {
    return (
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

                {/* <div>need to fix inseting projects...</div> */}
                <div
                    style={{
                        display: 'grid',
                        gap: '0.5rem',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(288px, 1fr))',
                    }}
                >
                    <a className='project'>
                        <h3 className='align-mid text '>
                            <a href="https://mask-up.glitch.me" className="text-gray-300">Mask Up</a> 
                        </h3>
                        <p className='description'> Face tracker Website that models face coordinates using trained machine learning model integrated with FaceMesh</p>
                        {/* <a className=" m-auto h-5" href="https://mask-up.glitch.me"><img className="h-5" src={Mask} /></a> */}
                        {/* <img className="h-auto w-auto" src={Mask}/> */}
                    </a>
                    <a className='project'>
                        <h3 className='align-mid text '>
                             <a href="https://github.com/LaneLab/ImageAnalysisPipeline" className="text-gray-300">Cell Tracker</a>  
                        </h3>
                        <p className='description'> Pipeline to classify cells during imaging, it is hypothesized that changes in the shape and size of the nucleus can be used to train a model using deep learning. This project aims to develop/incorporate a deep learning algorithm to be used for optimizing a pipeline that classifies cells and track their movements during infection. </p>
                        {/* <Link to="https://github.com/LaneLab/ImageAnalysisPipeline" className=" m-auto"><img src={cell} /></Link> */}
                        {/* <img className=" h-30 m-auto" src={cell}/> */}
                    </a>
                    {/* {projects.map((p,index) => (
                        <projectcard key = { `project-${index}`} 
                        index = {index} {...p}
                      />
                    ))} */}
                </div>
                <Footer />
            </div>


        </>
    )
}

export default ProjectsPage;