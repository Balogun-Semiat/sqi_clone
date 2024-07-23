import React from 'react';
import firstImage from '../../img/sqi-img-1.png'
import college from '../../img/college.jpg'
import prof from '../../img/prof.jpg'
import certificate from '../../img/certificate.jpg'
import software from '../../img/software-1.webp'
import product from '../../img/product.jpg'
import data from '../../img/data.jpg'
import digital from '../../img/digital.jpg'
import google from '../../img/google.png'
import interswitch from '../../img/Interswitch.png'
import andela from '../../img/andela.png'
import Microsoft from '../../img/Microsoft.png'
import Paystack from '../../img/Paystack.png'
import brewery from '../../img/brewery.png'
import wema from '../../img/wema.png'
import clan from '../../img/clan-logo.png'
import Card from './Card';
import Button from './Button';
import { FaAngleRight } from "react-icons/fa6";


 export const FirstPage = () => {
    return(
        <div className='md:flex md:px-20 px-10 py-3 justify-between align-items-center'>
            <div className='w-full md:w-50'>
                <h5 className='text-7xl font-bold text-blue-950 hidden md:block'>Study to <br />become a <br /> global talent</h5>
                <h5 className='text-4xl font-extrabold text-blue-950 md:hidden' style={{fontFamily: "serif"}}>Study to <br />become a global <br /> talent</h5>
                <p className='text-lg py-3 hidden md:block'>Learn new tech skills using a world-class
                curriculum from top <br />industry experts in an accredited institution.</p>
                <p className='md:hidden text-sm py-3'>Learn new tech skills using a world-class
                curriculum from top industry experts in an accredited institution.</p>
                <Button
                innerText={"Start now"} />
            </div>

            <div className='w-full md:w-50'>
            <img className='w-full' src={firstImage} alt="" />
            </div>
            
        </div>
    )
}

 export const SecondPage = () => {
    return(
        <div className='md:px-20 px-12 mt-20'>
            <div className=''>
                <h5 className='text-2xl md:text-5xl font-bold text-blue-950'>Start here. Change the world.</h5>
            </div>

            <div className='w-full md:flex justify-content-between'>
    
                <Card
                    image= {college} 
                    title = 'National Innovative Diploma (NID)'
                    text='The National Innovation Diploma (NID) offered at SQI College 
                    of ICT is a 2 year approved academic program of the National Board for Technical Education (NBTE).'
                    learn='Learn More'
                />    
                  
                <Card
                    image= {prof} 
                    title = 'Professional Diploma Certificate'
                    text='The Professional Certificate Program is 1 year practical training with wide range of edge-cutting IT certification
//                          courses offered in SQI College of ICT to people who want to advance their career. (NBTE).'
                    learn='Learn More'
                />     
                
                <Card
                    image= {certificate} 
                    title = 'Certificate Program'
                    text='The Certificate Program is a short-term training, 2 weeks to 6 months with a wide range of edge-cutting IT certification courses
//                         offered in SQI College of ICT to people who want to advance their careers. (NBTE).'
                    learn='Learn More'
                />     
            </div>         
        </div>
    )
}

 export const ThirdPage = () => {
    return(

            <div className='md:flex grid justify-content-between md:px-20 px-12 mt-20 w-full text-gray-600'>
                <div className='w-full md:w-3/12'>
                    <h3 className='text-lg'>NATIONAL DIPLOMA COURSES</h3>
                    <p className='border-b-2 border-emerald-300 mt-3 text-sm md:text-base'>Duration: 2 Years</p>
                    <p className='border-b-2 border-emerald-300 mt-3 text-sm md:text-base'>Certificate: Both National Diploma and Professional Diploma.</p>
                    <p className='border-b-2 border-emerald-300 mt-3 text-sm md:text-base'>Skills: Academic Institution recognized skills and In-demand professional skills.</p>
                    <p className='border-b-2 border-emerald-300 mt-3 text-sm md:text-base'>Entry Requirements: 120 min in JAMB 5 Credits in O-Level, Your passion</p>
                    <p className='border-b-2 border-emerald-300 mt-3 text-sm md:text-base'>Required Hardware: (usually Laptop)</p>
                    <p className='border-b-2 border-emerald-300 mt-3 text-sm md:text-base'>Direct Entry: Yes (Any University)</p>
                    <p className='text-sm md:text-base'>Access to Alumni Network and Opportunities: Yes.</p>
                </div>
                
                <div className='w-full md:w-3/12'>
                    <h3 className='text-lg'>PROFESSIONAL DIPLOMA COURSES</h3>
                    <p className='border-b-2 border-emerald-300 mt-3 text-sm md:text-base'>Duration: 1 Year Courses</p>
                    <p className='border-b-2 border-emerald-300 mt-3 text-sm md:text-base'>Certificate: Professional Diploma</p>
                    <p className='border-b-2 border-emerald-300 mt-3 text-sm md:text-base'>Skills:  In-demand professional skills</p>
                    <p className='border-b-2 border-emerald-300 mt-3 text-sm md:text-base'>Entry Requirements: Your passion</p>
                    <p className='border-b-2 border-emerald-300 mt-3 text-sm md:text-base'>Required Hardware: (usually Laptop)</p>
                    <p className='border-b-2 border-emerald-300 mt-3 text-sm md:text-base'>Direct Entry: Partially Yes (LAUTECH ODL)</p>
                    <p>Access to Alumni Network and Opportunities: Yes.</p>
                </div>

                <div className='w-full md:w-3/12'>
                    <h3 className='text-lg'>CERTIFICATE PROGRAM</h3>
                    <p className='border-b-2 border-emerald-300 mt-3 text-sm md:text-base'>Duration: 2 weeks to 6 months</p>
                    <p className='border-b-2 border-emerald-300 mt-3 text-sm md:text-base'>Certificate: Certificate Program</p>
                    <p className='border-b-2 border-emerald-300 mt-3 text-sm md:text-base'>Skills:  In-demand professional skills</p>
                    <p className='border-b-2 border-emerald-300 mt-3 text-sm md:text-base'>Entry Requirements: Your passion</p>
                    <p className='border-b-2 border-emerald-300 mt-3 text-sm md:text-base'>Required Hardware: (usually Laptop)</p>
                    <p className='border-b-2 border-emerald-300 mt-3 text-sm md:text-base'>Direct Entry: No (LAUTECH ODL)</p>
                    <p className=' text-sm md:text-base'>Access to Alumni Network and Opportunities: Yes.</p>
                </div>
            </div>

    )
}

 export const FourthPage = () => {
    return(
        <div className='grid md:px-20 px-12 md:mt-20 mt-10 md:flex gap-5'>
            <div className=''>
                <h1>Our Top Courses</h1>
                <p>Take a look at some of our popular courses</p>
                <p className='flex items-center text-blue-500 hover:text-orange-500 hover:border-b-2 w-fit'><a href="/" style={{color: 'inherit',textDecoration:"none"}}>View all courses</a> 
                <FaAngleRight className='text-sm ml-2' /></p>

                <div className='bg-slate-300 p-3 rounded-2xl my-3 drop-shadow-2xl'>
                    <img className='rounded-3xl' src={software} alt="" />
                    <h3>Software Engineering</h3>
                    <p>Software Engineering is one of the most in-demand jobs across the globe today.</p>
                    <p>Software Engineers are also known as programmers, developers or coders. 
                        They are the ones behind all the apps and software you use today either on your phone or computer within your browser. 
                        Software such as banking apps, booking apps, mailing apps (e.g Gmail), Chat apps (e.g WhatsApp) and other Social apps
                        (e.g Twitter, Facebook) and many more are created by software engineers.</p>
                </div>

                <div className='bg-red-200 p-3 rounded-2xl drop-shadow-2xl'>
                    <img className='rounded-3xl' src={product} alt="" />
                    <h3>UI/UX – Product Design</h3>
                    <p>More than ever before individuals and businesses are relying on digital products and services.
                        From online meeting tools to finance, from e-commerce platforms to healthcare and food apps.
                        Making an intuitive digital product design is even more import at this time as it determines 
                        the overall experience of the users.</p>
                    <p>Here, you’ll build your product design skillset from the bottom up with lessons, 
                        mentorship sessions, and career advice from our design professionals.</p>
                </div>
            </div>

            <div>
                <div className='bg-yellow-200 p-3 rounded-2xl mb-3 border-black border-2 drop-shadow-2xl'>
                    <img className='rounded-3xl' src={data} alt="" />
                    <h3>Data Science & Analysis</h3>
                    <p>Software Engineering is one of the most in-demand jobs across the globe today.</p>
                    <p>Software Engineers are also known as programmers, developers or coders. 
                        They are the ones behind all the apps and software you use today either on your phone or computer within your browser. 
                        Software such as banking apps, booking apps, mailing apps (e.g Gmail), Chat apps (e.g WhatsApp) and other Social apps
                        (e.g Twitter, Facebook) and many more are created by software engineers.</p>
                </div>

                <div className='bg-indigo-300 p-3 rounded-2xl border-black border-2 drop-shadow-2xl'>
                    <img className='rounded-3xl' src={digital} alt="" />
                    <h3>Digital Literacy</h3>
                    <p>Software Engineering is one of the most in-demand jobs across the globe today.</p>
                    <p>Software Engineers are also known as programmers, developers or coders. 
                        They are the ones behind all the apps and software you use today either on your phone or computer within your browser. 
                        Software such as banking apps, booking apps, mailing apps (e.g Gmail), Chat apps (e.g WhatsApp) and other Social apps
                        (e.g Twitter, Facebook) and many more are created by software engineers.</p>
                </div>
            </div>
        </div>
    )
}

export const FifthPage = () => {
    return (
        <div className='px-20 mt-20 hidden md:block'>
            <h2>Our alumni work at world-class <br/> companies around the world including</h2>

            <div className='mt-16'>
                <div className='w-full flex justify-around'>
                <img className='w-40' src={google} alt="" />
                <img className='w-40' src={interswitch} alt="" />
                <img className='w-40' src={andela} alt="" />
                <img className='w-40' src={Microsoft} alt="" />
                </div>
               <div className=' flex justify-around mt-10'>
                <img className='w-40' src={Paystack} alt="" />
                <img className='w-40' src={brewery} alt="" />
                <img className='w-40' src={wema} alt="" />
                <img className='w-40' src={clan} alt="" />
               </div>
               <div className='flex justify-around mt-10'>
                    <img className='w-40' src={google} alt="" />
                    <img className='w-40' src={interswitch} alt="" />
                    <img className='w-40' src={andela} alt="" />
                    <img className='w-40' src={Microsoft} alt="" />
               </div>
            </div>
        </div>
    )
}


export const SixthPage = () => {
     const MyStyle = () =>{
        return{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 0, rgba(0, 0, 0, 0.7) 60%,
                rgba(0, 0, 0, 0.7) 100%), url(${product})`,
                backgroundSize:'cover',
                backgroundPosition: 'center',
        }   
    }

    return ( 
        <div style={MyStyle()} className='px-12 py-20 md:px-20 mt-20 md:h-96 h-fit md:flex w-full align-items-center gap-2'>
           <div className='w-full md:w-50'>
           <iframe className='rounded-lg w-full md:p-20 md:h-[400px]'  src="https://www.youtube.com/embed/HgC6bjMbqpw" title="Campus Tour | SQI College of ICT, Ibadan" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           </div>
           
           <div className='w-full mt-3 md:w-50 text-light'>
            <h4>Take a Tour</h4>
            <p>Our campus is a living centre for innovation and creativity for sustainability. We love showing students our campus and allowing them to see, hear and feel the excitement that comes with being part of the Central community which is an
            atmosphere that is open-minded, always exciting, and filled with academic excellence.</p>
            <Button
                innerText={"Apply now"} />
           </div>
        </div>
    )
}

export const SeventhPage = () => {
    return ( 
        <div className='px-12 md:px-20 mt-20'>
            <h5 className='font-bold text-3xl md:text-5xl text-blue-900'>Testimonials</h5>
            <p>Read what our current students and alumni have to say about their SQI experience. </p>
           <div className='grid md:flex justify-content-around'>
                <div className='w-full md:w-3/12  rounded-lg bg-gray-100 p-3 mb-2'>
                        <div className='flex align-items-center shadow-sm'>
                            <img className='w-14 rounded-full mr-3 shadow-lg' src={certificate} alt="" />
                            <p>Oluwaseyi Odekomaya <br /> 3 days ago</p>
                        </div>

                        <div className='overflow-y-scroll h-60'>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptate qui dolores molestiae laborum magni adipisci ducimus magnam accusantium autem aliquid maiores dolore illo eum et, quibusdam pariatur, odio numquam?
                            Mivoluptatum assumenda. Est laudantium maiores beatae inventore quisquam, minima dolorem placeat ducimus suscipit modi. Nobis nam quae voluptates officia!
                        ore quo neque voluptatibus deleniti. Doloribus dolor facilis sequi.
                            At fugiat commodi distinctio aspernatur, facilis fuga nam error. Impedit perferendis placeat necessitatibus voluptas minus magni facere, magnam vel eveniet voluptatum quo eius a, aliquam itaque exercitationem. Aperiam, tempore alias.
                        </p>
                        </div>
                </div>

                <div className='w-full md:w-3/12  rounded-lg bg-gray-100 p-3 mb-2'>
                        <div className='flex align-items-center shadow-sm'>
                            <img className='w-14 rounded-full mr-3 shadow-lg' src={certificate} alt="" />
                            <p>Oluwaseyi Odekomaya <br /> 3 days ago</p>
                        </div>

                        <div className='overflow-y-scroll h-60'>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptate qui dolores molestiae laborum magni adipisci ducimus magnam accusantium autem aliquid maiores dolore illo eum et, quibusdam pariatur, odio numquam?
                            Mivoluptatum assumenda. Est laudantium maiores beatae inventore quisquam, minima dolorem placeat ducimus suscipit modi. Nobis nam quae voluptates officia!
                        ore quo neque voluptatibus deleniti. Doloribus dolor facilis sequi.
                            At fugiat commodi distinctio aspernatur, facilis fuga nam error. Impedit perferendis placeat necessitatibus voluptas minus magni facere, magnam vel eveniet voluptatum quo eius a, aliquam itaque exercitationem. Aperiam, tempore alias.
                        </p>
                        </div>
                </div>

                <div className='w-full md:w-3/12  rounded-lg bg-gray-100 p-3 mb-2'>
                        <div className='flex align-items-center shadow-sm'>
                            <img className='w-14 rounded-full mr-3 shadow-lg' src={certificate} alt="" />
                            <p>Oluwaseyi Odekomaya <br /> 3 days ago</p>
                        </div>

                        <div className='overflow-y-scroll h-60'>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptate qui dolores molestiae laborum magni adipisci ducimus magnam accusantium autem aliquid maiores dolore illo eum et, quibusdam pariatur, odio numquam?
                            Mivoluptatum assumenda. Est laudantium maiores beatae inventore quisquam, minima dolorem placeat ducimus suscipit modi. Nobis nam quae voluptates officia!
                        ore quo neque voluptatibus deleniti. Doloribus dolor facilis sequi.
                            At fugiat commodi distinctio aspernatur, facilis fuga nam error. Impedit perferendis placeat necessitatibus voluptas minus magni facere, magnam vel eveniet voluptatum quo eius a, aliquam itaque exercitationem. Aperiam, tempore alias.
                        </p>
                        </div>
                </div>

           </div>
        </div>
    )
}

export const EighthPage = () => {
    return ( 
       <>
             <div className='p-12 md:p-20 mt-20 font-bold h-fit md:h-screen' style={{backgroundColor: "rgb(9,3,38)"}}>
            <p className='text-white'>FAQ</p> 
            <div className='grid md:flex justify-content-between'>
            <div className='w-full md:w-1/2'>
                <h5 className='text-light text-5xl hidden md:block'>Frequently Asked <br /> Questions</h5>
                <h5 className='text-light text-xl md:hidden'>Frequently Asked Questions</h5>
                <p className='mt-10 md:mt-20 text-yellow-400 text-sm md:text-xl'>Contact Us</p>
            </div>

            <div className='w-full md:w-1/2 text-xl'>
                <p className='text-yellow-400 text-sm md:text-base'>How do I get into the college</p>
                <p className='text-light border-b-2 border-yellow-200 pb-6 mt-10 text-sm md:text-base'>We currently have 3 modes of study at SQI College of ICT, the National Innovative Diploma, Professional Diploma Certificate, and Ordinary 
                    Professional Certificate Program. You can join us by applying through any of the modes of study.</p>
                <p className='text-sm md:text-base text-yellow-400 border-b-2 border-yellow-200 pb-6 mt-10'>How much is the tution?</p>
                <p className='text-sm md:text-base text-yellow-400 border-b-2 border-yellow-200 pb-6 mt-10'>Are your classes physical or virtual</p>
                <p className='text-sm md:text-base text-yellow-400 border-b-2 border-yellow-200 pb-6 mt-10'>Will I get a job after my training?</p>
            </div>
            </div>
        </div>

        <div className='h-[60vh] p-12 md:p-20 text-white' style={{backgroundColor: "rgb(0,11,63)"}}>
            <p className='font-bold text-base'>IT’S TIME FOR YOU TO TAKE YOUR TECH CAREER TO THE NEXT LEVEL</p>
            <h1 className='text-2xl md:text-6xl font-bold'>Ready to Get Started?</h1>
            <p className='md:mt-5 mt-3'>We provide and lead others in quality education, service, industry, 
                and character as well as discipline.</p>
            <Button
            innerText={"Join us today"} />
        </div>
       </>
    )
}

export const NinthPage = ()=>{
    return (
            <div className='md:p-20 py-20 px-12'>
                <div className='flex justify-between items-center'>
                    <p className='font-bold text-base md:text-2xl'>Latest News</p>
                    <Button
                    innerText={"Read more"} />
                </div>
                <div>
                <div className='grid md:flex justify-content-between mt-10'>
                        <Card
                            smtitle = '5TH MATRICULATION CEREMONY | SQI COLLEGE OF ICT'
                            small={"May 27, 2024"}
                            text='The Rector, on behalf of the Governing Council, Academic Board, Management, Staff and Students of SQI College of ICT, heartily requests the esteem presence of parents/guardian, friends and the general public at the 5th Matriculation Ceremony of the College. The...'
                        />    
                        
                        <Card
                            imgtwo= {"https://edu.sqi.ng/wp-content/uploads/2024/01/commisioner-for-education-400x250.jpg"} 
                            smtitle = 'THE KEY NOTE ADDRESS DELIVERED BY THE HONOURABLE COMMISSIONER PROFESSOR ABDULWAHEED ADELABU'
                            small={"Jan 30, 2024"}
                            text='THE KEYNOTE ADDRESS DELIVERED BY THE HONOURABLE COMMISSIONER MINISTRY OF EDUCATION SCIENCE AND TECHNOLOGY, PROFESSOR ABDULWAHEED ADELABU ON THE OCCASION OF OPENING OF THE SQI AI AND ROBOTIC RESEARCH AND TRAINING AT HAIER THERMOCOOL BUILDING CHALLENGE ON 27TH JANUARY,...'
                        />     
                        
                        <Card
                            imgtwo= "https://edu.sqi.ng/wp-content/uploads/2024/01/NID-admission-2023-2024-400x250.jpg" 
                            smtitle = 'APPLICATION FOR ALL PROGRAMS FOR THE 2023/2024 ACADEMIC SESSION IS NOW OPEN!'
                            small={"Jan 13, 2024"}
                            text='APPLICATION FOR ALL PROGRAMS FOR THE 2023/2024 ACADEMIC SESSION IS NOW OPEN!
                            We are pleased to let you know that the admission process for the 2023/2024 academic session has started.
                            Intending candidates are to choose SOFTQUEST INCORPORATED (SQI) College of ICT as their first choice in their JAMB/UTME registration to be eligible.'
                        />     
                    </div>  
                </div>
            </div>
    )
}

export const PageTen = ()=>{
    return(
        <>
            <footer className='md:flex justify-between md:p-20 p-12 '>
                <div className='md:w-2/10'>
                    <p className='text-blue-900 font-bold text-lg'>Hello, we’re SQI <br /> College of ICT</p>
                    <p>We provide and lead others <br /> in quality ICT education.</p>
                    <p>Send us a mail <br /> <a href="/">enquiry@edu.sqi.ng</a></p>
                    <p></p>
                </div>
                <div className='md:w-2/10'>
                    <p className='font-bold'>Quick Links</p>
                    <p>Application Portal</p>
                    <p>Student Portal</p>
                    <p>Professional Courses</p>
                    <p>NID Courses</p>
                    <p>Campus Info</p>
                    <p>Accomodation</p>
                    <p>SQI Scholarship</p>
                    <p>Donate</p>
                </div>
                <div className='md:w-2/10'>
                    <p className='font-bold'>Ogbomoso</p>
                    <p>Old Ilorin Road,</p>
                    <p>Opposite Yoaco Filling Station,</p>
                    <p>Yoaco, Ogbomoso.</p>
                    <p>0906 281 9991, 0906 281 9993</p>
                </div>
                <div className='md:w-2/10'>
                    <p className='font-bold'>Ibadan</p>
                    <p>Application Portal</p>
                    <p>Student Portal</p>
                    <p>Professional Courses</p>
                    <p>NID Courses</p>
                    <p>Campus Info</p>
                    <p>Accomodation</p>
                    <p>SQI Scholarship</p>
                    <p>Donate</p>
                </div>
                <div className='md:w-2/10'>
                    <p className='font-bold'>Abeokuta</p>
                    <p>Application Portal</p>
                    <p>Student Portal</p>
                    <p>Professional Courses</p>
                    <p>NID Courses</p>
                    <p>Campus Info</p>
                    <p>Accomodation</p>
                    <p>SQI Scholarship</p>
                    <p>Donate</p>
                </div>
            </footer>
        </>
    )
}

export const Footer =()=>{
    return(
        <div className='bg-blue-900 p-3'>
            <p className='md:pl-32 sm:text-center text-white'>Copyright © 2024 | SQI ICT Consultants. All Rights Reserved</p>
        </div>
    )
}
// export default FirstPage