

import Footer from "../Components/footer";

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
                        <span className="text-gray-200 hover: brightness-150" >Northwestern University </span>
                    </a>
                    . This past summer, I interned at{' '}
                    <a target='_blank' href='https://www.janestreet.com/'>
                        <span className="text-gray-200 hover: brightness-150" >The Lane Lab </span>
                    </a>{' '}
                    as a Research Assistant. 
                </p>
                {/* <p>
                    At school, I was the Projects Director at{' '}
                    <a target='_blank' href='https://www.fullstackatbrown.com/about'>
                        Full Stack at Brown
                    </a>
                    , where I coordinated 30+ project teams and directly manage several
                    high impact products, such as{' '}
                    <a target='_blank' href='https://hours.cs.brown.edu/'>
                        Hours
                    </a>
                    , Brown CS's TA hours platform, and{' '}
                    <a target='_blank' href='https://thecriticalreview.org/'>
                        The Critical Review
                    </a>
                    , Brown's official course review website. I was also a TA for{' '}
                    <a target='_blank' href='https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/111.html'>
                    COMP_SCI 111: Fundamentals of Computer Programming
                    </a>
                    .
                </p> */}
                {/* <p>
                    Besides software engineering, I did research in body-aware generative
                    models through{' '}
                    <a target='_blank' href='https://visual.cs.brown.edu/'>
                        Brown Visual Computing
                    </a>{' '}
                    and worked on specializing object segmentation and image
                    classification techniques to biomedical applications. You can read
                    more about my research in my{' '}
                    <Link disabled={partyMode} to='/research'>
                        publications
                    </Link>
                    .
                </p> */}
                {/* <p>
                    Outside of work, I'm a big time classical music nerd and play the
                    cello. I also run an{' '}
                    <a target='_blank' href='https://www.instagram.com/dingsdinner/'>
                        Instagram food account
                    </a>{' '}
                    to document my dining and cooking adventures, all while playing{' '}
                    <a target='_blank' href='https://na.op.gg/summoners/na/IAGDL'>
                        a little too much
                    </a>{' '}
                    League of Legends for my own good.
                </p> */}
            </div>
            <hr className='w-10 m-auto' /> 
            <div>
                <p>
                    stuff to be filled in... <br /> 
                    stuff to be filled in... <br /> 
                    stuff to be filled in... <br /> 
                    stuff to be filled in... <br /> 
                </p>
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