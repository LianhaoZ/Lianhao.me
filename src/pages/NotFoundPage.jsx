import { Link } from 'react-router-dom'; 
import {Footer} from '../Components';

const NotFound = () => {
    return (
        <div className='prose m-auto'>
            <h1><div className='text-gray-200'>Error 404</div></h1>
            <p>Oops! We couldn't find the page you're looking for.</p>
            <Link to='/'><div className='text-gray-300'><i className='icon-[ri--arrow-up-s-line]'  />cd ..</div></Link> 
            <Footer />
        </div>
    )
}

export default NotFound;