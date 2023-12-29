
const Footer = () => {

    return (
        <>
        <footer className='mt-10 mb-6 opacity-50 flex flex-row'>
            <div className='inline-block flex-auto'> 
                <span className="text-sm"><a className=" text-inherit" target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> 2023-PRESENT © Lianhao Zheng</span>
            </div>
            <div className='justify-self-end self-center'>
                <a
                    className='cursor-pointer flex-nowrap lt-sm:border-b-0!'
                    title='Back to top'
                    onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
                >
                    <span
                        className='lt-sm:display-none text-gray-300'
                        style={{
                            whiteSpace: 'nowrap',
                        }}
                    >
                        Back to Top
                    </span>
                    <i className='text-gray-300 icon-[ri--arrow-up-s-line]' />
                </a>
            </div>
        </footer>
        </>
    )
}

export default Footer;