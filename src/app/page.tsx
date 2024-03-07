import Button from "@/components/button/Button";
import styles from "./page.module.css";
import Image from 'next/image';
import Hero from '../../public/hero.jpeg'

export default function Home() {
  return (
    <div className='wrapPage'>
      <h1 className='title'>
        This is Home page!
      </h1>
      <p>
        This is page is home, 100%
      </p>
      <Button text='See our works' url='/portfolio'/>
      <Image src={Hero} alt='Hero' className='image img'/>
    </div>
  );
}
