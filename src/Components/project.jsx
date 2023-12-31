import './project.css';

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

export default projectcard;