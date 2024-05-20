import { Footer } from "../Components"; 

const Blog = () => {
    const posts = [
        { title: "Starting Introduction About some random development", date: "May 20", duration: "10min", link: "#" }, 
    ];

    
    return(
        <>
        {/* <div className='prose m-auto'>
            <h1>
                <div className=' text-gray-200 justify-center pt-2 lt-sm:text-size-0.75em'>
                    <div>Blog</div>
                </div>
            </h1>
            <p className="text-gray-300">
                Start of Blog
            </p> 



            <div className="text-gray-300">need to insert projects...</div>

            <Footer />
        </div>  */}
         <div className='prose m-auto max-w-4xl p-4 text-gray-300'>
                <header className='text-center pt-4'> 
                    <h1>
                        <div className=' text-gray-300 text-4xl font-bold justify-center pt-2 lt-sm:text-size-0.75em'>
                            <div>Blog</div>
                        </div>
                    </h1>
                    <nav className="flex justify-center space-x-4 mt-2">
                        <a href="#" className="text-gray-300 hover:text-gray-200">Talks</a>
                        <a href="#" className="text-gray-300 hover:text-gray-200">Projects</a>
                        {/* <a href="#" className="text-gray-300 hover:text-gray-200">Streams</a> */}
                        <a href="#" className="text-gray-300 hover:text-gray-200">Notes</a>
                    </nav>
                </header>

                <main className='mt-8'>
                    {posts.map((post, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700">
                            <a href={post.link} className="text-gray-200 text-lg hover:text-gray-400">{post.title}</a>
                            <div className="text-gray-300 flex-shrink-0">{post.date} &middot; {post.duration}</div>
                        </div>
                    ))}
                </main>

                <Footer />
            </div>           
        
        </>
    )
}

export default Blog;