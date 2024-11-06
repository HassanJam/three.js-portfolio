import {React,useState} from 'react'
import Globe from 'react-globe.gl'
import { color } from 'three/webgpu'
import Button from '../components/Button'
const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('hassanjamshaid364@gmail.com');
        setHasCopied(true);
        setTimeout(()=>{
            setHasCopied(false);
        },2000)
    }
  return (
    <section className='c-space margin-y-20'>
        <div className='grid xl:grid-cols-3
        xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5
        h-full'>
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/grid1.png" alt="grid-1"
                    className='w-full sm:h-[270px] h-fit 
                    object-contain' />
                    <div>
                        <p className='grid-headtext'>HI, I am Hassan</p>
                        <p className='grid-subtext'>with 3 Months of Industries experience.
                            I have build many projects that are Live and runnung in the industry.
                        </p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:w-[276px] h-fit object-contain' />
                    <div>
                        <p className='grid-headtext'>Tech Stack</p>
                        <p className='grid-subtext'>I Specialize in Javascript with focus on React</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-4'>
                <div className='grid-container'>
                    <div className='rounded-3xl w-full containersm:h-[326px] h-fit flex justify-center
                     items-center'>
                        <Globe 
                            height={326}
                            width={326}
                            backgroundColor='rgba(0,0,0,0)'
                            backgroundImageOpacity={0.5}
                            showAtmosphere
                            showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"       
                            /** 
                            labelsData={[{
                                lat:40,lng:-100,
                                text: "I am here!",
                                color:'white',
                                size:20,
                            }]}   
                            */             
                        />
                    </div>
                     <p className='grid-headtext'>
                        I Work can Work Remotly across most Timezones.

                     </p>
                     <p className='grid-subtext'>
                        I'm Based in Pakistan, with remote work available.
                     </p>
                     <Button name="Contact Me" isBeam 
                     containerClass="w-full mt-10"/>
                </div>
            </div>
            <div className='xl:col-span-2 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit 
                    object-contain' />

                    <div>
                        <p className='grid-headtext'>My Passion for Coding</p>
                        <p className='grid-subtext'>I love Solving problem
                            and building things that make a difference through Code.
                        </p>
                    </div>
                </div>
            </div>
            <div className='xl:col-span-1
            xl:row-span-2'>
                <div className='grid-container'>
                    <img src="/assets/grid4.png" alt="grid-4" className='w-fill md:h-[126px]
                    sm:h-[276px] h-fit object-cover sm:object-top ' />
                    <div className='space-y-2'>
                        <p className='grid-subtext text-center'>Contact Me</p>
                        <div className='copy-container' onClick={handleCopy}>
                            <img src={hasCopied ? 
                                '/assets/tick.svg' : '/assets/copy.svg'
                            } alt="Copy" />
                            <p className='lg:text-xl md:text-xl font-medium text-gray-gradient
                            text-white'>hassanjamshaid364@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About