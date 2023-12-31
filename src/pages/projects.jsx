import { Footer} from "../Components";
import { projects } from "../constants/Data"; 
import '../Components/project.css';

const projectcard = ({ index,
    name,
    description,
    tags,
    image,
    source_code_link,
  }) => {
    return(
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
                    {projects.map((p,index) => (
                        <projectcard key = { `project-${index}`} 
                        index = {index} {...p}
                      />
                    ))}
                </div>
                <Footer />
            </div>


        </>
    )
}

export default ProjectsPage;