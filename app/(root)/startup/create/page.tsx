import CreateForm from '@components/CreateForm';
import React from 'react'

const page = () => {
  return (
    <>
        <section className="pink_container !min-h-[230px]">
            <h1 className="heading">Submit your Starup</h1>
        </section>
        <CreateForm />
    </>
  )
}

export default page;