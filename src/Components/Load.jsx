import nProgress from 'nprogress';
import { useEffect } from 'react';

const Load = () => {
  useEffect(() => {
    nProgress.start()

    return () => {
      nProgress.done()
    }
  })

  return null
}

export default Load;