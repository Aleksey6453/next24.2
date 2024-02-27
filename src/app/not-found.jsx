import Image from 'next/image'
export default function NotFound (){

    return (
        <div className="wrapPage">
            <h1 className="title">This is page is not found</h1>
            <img src="/4.jpg" alt="loading" className="image"/>
            {/* <Image src='/1.jpg' className='image' /> */}
        </div>
    )
}