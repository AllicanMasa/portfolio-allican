import React from 'react'
import CurvedLoop from "@/components/CurvedLoop";


const Curvedloop = () => {
  return (
      <section className="-mt-100 -mb-70 sm:mt-0 sm:mb-0">
        <CurvedLoop
          marqueeText="Deep Dive ✦ and ✦ Know Me ✦ More! ✦"
          speed={3}
          curveAmount={150}
          direction="right"
          interactive={true}
          className="custom-text-style"
        />
      </section>
  )
}

export default Curvedloop