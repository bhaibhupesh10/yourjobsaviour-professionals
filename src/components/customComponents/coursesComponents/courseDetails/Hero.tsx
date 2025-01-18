// CourseHero.tsx
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import devopsheroimage from "../../../../../public/assets/HeroImage.png"
import { MdOnlinePrediction } from "react-icons/md"
import { BsCalendarCheck } from "react-icons/bs"
import { FaMoneyBillWave } from "react-icons/fa"
import { TbCertificate } from "react-icons/tb"
import { payment } from "@/data/paymentLink"

 
import { usePathname } from 'next/navigation';

interface RouteConfig {
  link: string;
  buttonText: string;
}
 

const ROUTE_CONFIG: Record<string, RouteConfig> = {
  '/students': {
    link: payment.studentRouteLink, // Add this to your payment data
    buttonText: 'Apply Now'
  },
  'default': {
    link: payment.paymentLink,
    buttonText: 'Apply Now'
  }
};


const Hero = () => {
    const pathname = usePathname();

      // Get route-specific configuration
  const getRouteConfig = (currentPath: string): RouteConfig => {
    return ROUTE_CONFIG[currentPath] || ROUTE_CONFIG.default;
  };

  const { link, buttonText } = getRouteConfig(pathname);


    return (
      <div className="mx-auto pb-12 md:pb-0 h-full" id="hero">
        {/* Gradient Background */}
        <div className="bg-gradient-to-r from-[#292929] via-[#323232] via-[#3d3d3d] to-[#4a4a4a] h-[780px] md:h-[400px] lg:h-[400px] px-4 sm:px-6"> 
          <div className="max-w-6xl mx-auto py-4 md:py-2"> {/* Reduced from max-w-7xl */}
            {/* Top Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-2 pt-6">
              <Badge variant="secondary" className="bg-gray-800 text-white text-md p-2   mb-0 md:mb-0 lg:mb-0">
              #RightJobKiGuarantee ✨
              </Badge>
            </div>
  
            {/* Main Content */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 lg:justify-between lg:items-center mt-2 md:-mt-4 lg:-mt-4">
              <div className="max-w-5xl"> {/* Reduced from max-w-2xl */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">
                DevOps Expert Program <span className="text-white">  With <br/>Guaranteed Career Switch / Salary Hike Opportunities</span>
                </h1>
                <h2 className="text-xl md:text-lg lg:text-md font-base text-white mb-4">
                 Get Upto 2x hike as SRE I / II / DevOps Engineer
                </h2>
  
                <Button variant="outline" className="rounded-full bg-transparent border-white text-white hover:bg-gray-700 text-sm sm:text-base">
                100% refund if not hired
                </Button>
              </div>
  
              {/* Right Side Image */}
              <div className="relative w-full lg:w-[55%]"> {/* Increased width */}
                <div className="aspect-[16/9] w-full md:w-[50px] lg:w-[50px] h-[200px] md:h-[300px] lg:h-[300px]"> {/* Increased height */}
                <Image 
  src="/assets/professionals.png"
  alt="Course illustration"
  fill
  className="object-contain rounded-tr-3xl rounded-bl-3xl "
  priority
  sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         55vw"
/>
                </div>
              </div>
            </div>
  
            {/* Bottom Info Card */}
            <div className="relative md:mt-6 lg:mt-2 ">
  <div className="relative left-0 right-0 md:top-[0px]">
    <div className="bg-white rounded-lg p-4 shadow-lg max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-4"> {/* Changed items-center to items-start */}
        {/* Info Sections Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {/* Online Section */}
          <div className="flex items-start gap-2 justify-start sm:justify-center lg:justify-center"> {/* Changed items-center to items-start */}
            <MdOnlinePrediction className="text-gray-700 text-3xl bg-gray-50 p-1 rounded-lg mt-1 md:mt-2 lg:mt-2" /> {/* Added mt-1 to align icon */}
            <div>
              <span className="text-black text-xs font-medium">ONLINE</span>
              <span className="font-bold text-xs block">3 months</span>
            </div>
          </div>

          {/* Admission Section */}
          <div className="flex items-start gap-2 justify-start sm:justify-center lg:justify-center"> {/* Changed items-center to items-start */}
            <BsCalendarCheck className="text-gray-700 text-3xl bg-gray-50 p-1 rounded-lg mt-1 md:mt-2 lg:mt-2" /> {/* Added mt-1 to align icon */}
            <div>
              <span className="text-black text-xs font-medium">ADMISSION CLOSES ON</span>
              <span className="font-bold text-xs block">22nd Jan</span>
              <Badge variant="outline" className="text-yellow-600 border-yellow-600 text-[10px] mt-0.5">
                Limited seats
              </Badge>
            </div>
          </div>

          {/* Course Fee Section */}
          <div className="flex items-start gap-2 justify-start sm:justify-center lg:justify-center">
  <FaMoneyBillWave className="text-gray-700 text-3xl bg-gray-50 p-1 rounded-lg mt-1 md:mt-2 lg:mt-2" />
  <div>
    {/* <span className="text-black text-xs font-medium">COURSE FEE</span> */}
    <span className="text-black text-xs font-medium">Course Fees</span>
    <div className="flex flex-col gap-1"> {/* Changed to flex-col for vertical stacking */}
      <div className="flex items-center gap-2"> {/* Price row */}
         <span className="font-bold text-xs flex-shrink-0">₹45,000 (+taxes)</span> 
        {/* <span className="font-bold text-xs flex-shrink-0">DevOps Engineer</span> */}
         <span className="line-through text-gray-400 text-xs">₹75,000</span>
        <span className="text-green-600 font-semibold border-green-600 text-[10px]">
          Save <br/> ₹30,000/-
        </span> 
      </div>
      <div> {/* Badge row */}
        {/* <Badge variant="outline" className="text-yellow-600 border-yellow-600 text-[10px]">
          Valid till 07 Jan
        </Badge> */}
      </div>
    </div>
  </div>
</div>

          {/* Guarantee Section */}
          <div className="flex items-start gap-2 justify-start sm:justify-center lg:justify-center"> {/* Changed items-center to items-start */}
            <TbCertificate className="text-gray-700 text-3xl bg-gray-50 p-1 rounded-lg mt-1 md:mt-2 lg:mt-2" /> {/* Added mt-1 to align icon */}
            <div>
              <span className="text-black text-xs font-medium">GUARANTEE</span>
              <div className="font-bold text-xs">100% refund if not hired</div>
            </div>
          </div>
        </div>

        {/* Vertical Divider and Button Section */}
        <div className="flex items-start gap-4 lg:border-l lg:pl-4 w-full lg:w-auto pl-8"> {/* Changed items-center to items-start */}
          <div className="flex flex-col items-start sm:items-center lg:items-center w-full lg:w-auto">
         <a href={link} target="blank">  <Button  className="bg-[#292929] md:mx-4 hover:bg-[#292929] hover:shadow-md hover:shadow-black w-full sm:w-auto text-sm py-6">
         {/* <a href="https://forms.gle/6r8Qa7UR9TNTXXZG9" target="blank">  <Button  className="bg-[#ff0000] md:mx-4 hover:bg-[#ff0000] hover:shadow-md hover:shadow-black w-full sm:w-auto text-sm py-6"> */}
            {buttonText}
            </Button>
         </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

              
            </div>
          </div>
        
        
        <div className="h-[80px]"></div> {/* Reduced spacer height */}
      </div>
    )
  }
  
  export default Hero