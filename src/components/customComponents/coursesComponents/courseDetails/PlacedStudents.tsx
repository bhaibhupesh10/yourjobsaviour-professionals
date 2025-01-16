import React from "react";
import styles from '../../../../..../../../PlaceStudents.module.css';
import arpitJindal from "../../../../../public/assets/placed-students-photos/arpitjindal.png";
import akanshAgarwal from "../../../../../public/assets/placed-students-photos/akanshagarwal.png";
import mannansiddiqui from "../../../../../public/assets/placed-students-photos/mannansiddhiqui.png";
import unthinkable from "../../../../../public/assets/companyLogo/logo_unthinkable_dbd9877981.png";
import mercedes from "../../../../../public/assets/companyLogo/Mercedes-Benz_Logo_2010.svg.png";
import NPCI from "../../../../../public/assets/companyLogo/NPCI_logo.png";
import quantiphi from "../../../../../public/assets/companyLogo/quantfi.png";
import peerxp from "../../../../../public/assets/companyLogo/peerXp-Photoroom.png";
import paytm2 from "../../../../../public/assets/companyLogo/paytm.png"
import searce2 from "../../../../../public/assets/companyLogo/searce.png"
import redhat2 from "../../../../../public/assets/companyLogo/redhat.png"
import tcs2 from "../../../../../public/assets/companyLogo/tcs.png"



const PlacedStudents = () => {
  const employees = [
        {
          name: "Arpit Jindal",
          college: "VIT Vellore",
          designation: "DevOps Consultant",
          package: "12 LPA",
          companyLogo: mercedes.src.toString(),
          photo: arpitJindal.src.toString(), // Image path
          linkding:"https://www.linkedin.com/in/arpit-jindal-1b52831a3/"
        },
        {
          name: "Akansh Agarwal",
          college: "Shri Ram Murti Smarak College",
          designation: "Framework Engineer",
          package: "8.5 LPA",
          companyLogo: quantiphi.src.toString(),
          photo: akanshAgarwal.src.toString(), // Image path  
          linkding:"https://www.linkedin.com/in/akansh-agarwal/"
            },
        {
          name: "Mohit Vyas",
          college: "Madhyanchal Professional University Bhopal",
          designation: "Associate Software Engineer",
          package: "10 LPA",
          companyLogo: redhat2.src.toString(),
          photo: "https://media.licdn.com/dms/image/v2/D4D03AQFOm1Et-F6_Zg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696063474166?e=1738195200&v=beta&t=3jQQM1IkM4arj9WBwEAg3WlUKDVW3DIhNNxZk2SWMag",
          linkding:"https://www.linkedin.com/in/mohitvyas026/"
        },
        {
          name: "Mannan Siddiqui",
          college: "Gautam Buddha University Uttar Pradesh",
          designation: "Associate MLOPS Engineer",
          package: "9.4 LPA",
          companyLogo: NPCI.src.toString(),
          photo: mannansiddiqui.src.toString(),
          linkding:"https://www.linkedin.com/in/mannansiddiqui/" // Image path
        },
        {
                  name: "Sahil Gulghane",
                  college: "Shri Ramdeobaba College, Nagpur",
                  designation: "DevOps Engineer",
                  package: "7.5 LPA",
                  companyLogo: unthinkable.src.toString(),
                  photo: "https://media.licdn.com/dms/image/v2/D5603AQHCe2C0VAqF4w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1679854491156?e=1738195200&v=beta&t=Lx7_ESqT3nc8oHH1EXzjBf9_wK-NlrQn3w9s45mAsmM",
                  linkding:"https://www.linkedin.com/in/sahil-gulghane/"
                  
                },
                {
                  "name": "Akshit Saini",
                  "college": "Gautam Buddha University, UP",
                  "designation": "Associate MLOPS Engineer",
                  "package": "9 LPA",
                  "companyLogo": NPCI.src.toString(),
                  photo: "https://media.licdn.com/dms/image/v2/D4D03AQGpO7_jFVxiGA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1679605109003?e=1738195200&v=beta&t=nZBL6-aL-gPe7gg8jiT8iBeKIEW-NXhoSzKHyOBcE_Q",
                  linkding:"https://www.linkedin.com/in/saini-akshit/"
                },
                
                {
                  "name": "Aman Dev Verma",
                  "college": "IMS Engineering College, UP",
                  "designation": "Associate Technical Engineer",
                  "package": "9 LPA",
                  "companyLogo":redhat2.src.toString(),
                  photo: "https://media.licdn.com/dms/image/v2/C4E03AQG80zPrzb5DNA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1632662096352?e=1738195200&v=beta&t=nlQWrEjHRlYAobCUHM_pYxFr4nonJmY62N1kp4vY3D4",
                  linkding:"https://www.linkedin.com/in/aman-dev-verma-0378041b7/"
                },
                {
                  "name": "Rahul Kumar",
                  "college": "Revo University, Bangalore",
                  "designation": "DevSecOps Engineer",
                  "package": "10 LPA",
                  "companyLogo": paytm2.src.toString(),
                  photo: arpitJindal.src.toString(),
                  linkding:""
                },
                {
                  "name": "Kuldeep Kumawat",
                  "college": "BIT Mesra",
                  "designation": "Junior DevOps Engineer",
                  "package": "5 LPA",
                  "companyLogo": peerxp.src.toString(),
                  photo: "https://media.licdn.com/dms/image/v2/C5603AQEFEK6AZezq1w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1648188295791?e=1738195200&v=beta&t=QFSeJo0EGvNeyZ8S9zyqb-WPKVd7HK689wODXv-Mb1Q",
                  linkding:"https://www.linkedin.com/in/kumarkuldeepkumawat/"
                },
                {
                  "name": "Ishita Singhal",
                  "college": "UPES, Uttarakhand",
                  "designation": "Associate MLOPS Engineer",
                  "package": "8 LPA",
                  "companyLogo": NPCI.src.toString(),
                  photo: "https://media.licdn.com/dms/image/v2/D4D03AQHQEAr_DO0Hyg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1681472849074?e=1738195200&v=beta&t=xoZ1ojHtcQK9lnZff6lY0XoVJa2QW2DrFn_-6n-htF0",
                  linkding:"https://www.linkedin.com/in/ishita-singhal-1a955614a/"
                },
                {
                  "name": "Aditya Joshi",
                  "college": "Sandip Institute of Technolgy, Nashik",
                  "designation": "DevOps Engineer",
                  "package": "7.5 LPA",
                  "companyLogo": unthinkable.src.toString(),
                  photo: "https://media.licdn.com/dms/image/v2/D4D03AQE8qRxBEfFENg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1701884139593?e=1738195200&v=beta&t=_etKEvM3DQITy0hZn9ayEnQraN6-InqSQK_8kxWtWKU",
                  linkding:""
                },
                {
                  "name": "Mohak Gund",
                  "college": "Uttaranchal University, Dehradun",
                  "designation": "DevOps Engineer",
                  "package": "6 LPA",
                  "companyLogo": searce2.src.toString(),
                  photo: "https://media.licdn.com/dms/image/v2/D4D03AQEJreXf2bPQ2Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1700913649608?e=1738195200&v=beta&t=LVGismW4SsIq7RUkktttzQPmpYXk-HcfvZnhrU7sWGk",
                  linkding:""
                },
                {
                  "name": "Nischay Mehrotra",
                  "college": "LNCT University Bhopal",
                  "designation": "Associate MLOPS Engineer",
                  "package": "10.5 LPA",
                  "companyLogo": NPCI.src.toString(),
                  photo: "https://media.licdn.com/dms/image/v2/D5603AQH0C8r82a1VGw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724256924608?e=1738800000&v=beta&t=NBSrvNcmnYeDNNPAXmgjRoojA7gsIuGxaGo_ZKnnFzY",
                  linkding:"https://www.linkedin.com/in/nischay-mehrotra-265828142/"
                },
                {
                  "name": "Krushna",
                  "college": "KIIT University, Bhubaneswar, Odisha",
                  "designation": "Junior DevOps Engineer",
                  "package": "8 LPA",
                  "companyLogo": redhat2.src.toString(),
                  photo: "https://media.licdn.com/dms/image/v2/D5603AQFY_HUQibo-0Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708231242198?e=1738195200&v=beta&t=QabBi1UJbpFrq96QIDgYatSx7w7JoPp1V36JtSGAaqo",
                  linkding:""
                },
                {
                  "name": "Akshansh Kumar Singh",
                  "college": "Indian Inst. of info. tech, Ranchi",
                  "designation": "DevOps Engineer",
                  "package": "9 LPA",
                  "companyLogo": tcs2.src.toString(),
                  photo: "https://media.licdn.com/dms/image/v2/D5603AQHdz88Mb13AyQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1678216176636?e=1738195200&v=beta&t=zqzFzpfnTiT-8zJkx1EvfBfKtH5vCmiLIZoKYr5QjsU",
                  linkding:""
                } ,
               ];
               return (
                <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50" id="placements">
                  <div className="flex flex-col items-center py-4 md:py-4 px-2">
                    <h1 className="text-3xl md:text-3xl font-semibold text-black text-center">
                    Our learners got guaranteed placement.
                    <span className="text-[#ff0000]"> So can you!</span>
                    </h1>
                    <h1 className="text-sm sm:text-lg text-black font-semibold pt-2 mb-8">
                      Learn - Build - Lead with <span className="text-[#ff0000]">Mr Vimal Daga</span>
                    </h1>
            
                    <div className={styles.slider}>
                      <div className={styles['slide-track']}>
                        {[...employees, ...employees].map((employee, index) => (
                          <div key={index} className={styles.slide}>
                            <div className="border-2 rounded-lg shadow-lg bg-pink-100 h-[300px] flex flex-col items-center relative p-2">
                              <a href={employee.linkding} target="_blank" rel="noopener noreferrer" className="w-full h-full flex flex-col items-center">
                                <div className="absolute top-1 right-1 bg-white p-1 rounded-full shadow-md text-sm">📌</div>
                                
                                <div className="flex flex-col items-center w-full mt-2">
                                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#ff0000] flex-shrink-0">
                                    <img src={employee.photo} alt={employee.name} className="w-full h-full object-cover"/>
                                  </div>
                                  
                                  <div className="mt-2 text-center px-2 py-2 ">
                                    <h3 className="text-sm font-bold text-[#ff0000] break-words leading-tight">
                                      {employee.name}
                                    </h3>
                                    <p className="text-[10px] text-gray-600 break-words leading-tight mt-1">
                                      {employee.college}
                                    </p>
                                  </div>
                                </div>
            
                                <div className="mt-2 text-center text-gray-800 font-semibold px-2">
                                  <p className="text-xs">Got Selected as</p>
                                  <p className="text-xs text-[#ff0000] font-bold">{employee.designation}</p>
                                </div>
            
                                <div className="mt-2 bg-[#ff0000] text-white py-2 w-[90%] text-center">
                                  <span className="text-sm font-bold">{employee.package}</span>
                                </div>
            
                                <div className="mt-2 flex justify-center items-center h-12">
                                  <img 
                                    src={employee.companyLogo} 
                                    alt="Company Logo" 
                                    className="max-w-[100px] max-h-full object-contain"
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            };
            
            export default PlacedStudents;