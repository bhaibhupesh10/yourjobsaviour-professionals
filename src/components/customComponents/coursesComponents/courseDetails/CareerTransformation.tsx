"use client"

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Linkedin, ArrowRight, GraduationCap, Briefcase } from "lucide-react";
import { profileData } from "@/data/profileData";
import { useEffect, useState } from "react";

export default function CareerTransformationV2() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-4">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold text-center mb-6">
          Career Transformations
        </h2>
        
        {/* Single Row - Moving Left */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex animate-scroll-left">
              {[...profileData, ...profileData].map((profile, index) => (
                <div key={index} className="flex-shrink-0 px-2">
                  <ProfileCard profile={profile} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Only the ProfileCard component needs to be modified, rest remains the same

function ProfileCard({ profile }: { profile: any }) {
  const { name, profilePicture, company, jobTitle, linkedinUrl, details, careerProgression } = profile;

  return (
    <Card className="w-[350px] h-[350px] p-4 flex flex-col justify-between bg-white border border-gray-200 shadow-lg">
      {/* Profile Header */}
      <div className="space-y-1">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0">
            <Image 
              src={profilePicture} 
              alt={name} 
              width={56} 
              height={56} 
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-1 flex-1">
            <h2 className="text-lg font-semibold line-clamp-1">{name}</h2>
            <Badge variant="secondary" className="font-normal text-xs">
              @ {company}
            </Badge>
            <p className="text-xs text-muted-foreground line-clamp-2">{jobTitle}</p>
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="w-full text-blue-600 hover:bg-blue-50 text-xs h-8"
        >
          <Linkedin className="w-3 h-3 mr-1" />
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">Connect</a>
        </Button>
      </div>

      {/* Details Section */}
      <div className="space-y-1 ">
        {details.map((detail: any, index: number) => (
          <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
            {detail.icon === "MapPin" && <MapPin className="w-3 h-3" />}
            {detail.icon === "GraduationCap" && <GraduationCap className="w-3 h-3" />}
            {detail.icon === "Briefcase" && <Briefcase className="w-3 h-3" />}
            <span className="line-clamp-1">{detail.text}</span>
            {detail.badge && (
              <Badge variant="secondary" className="font-normal text-xs">
                {detail.badge}
              </Badge>
            )}
          </div>
        ))}
      </div>

      {/* Career Progression */}
      <div className="pt-0 border-t">
        <div className="flex items-center justify-between">
          {/* Before */}
          <div className="text-center space-y-1.5 flex-1">
            <div className="text-xs text-muted-foreground">Before</div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                <Image
                  src={careerProgression.before.companyLogo}
                  alt="Previous Company"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="font-medium mt-0 text-xs line-clamp-1 max-w-[120px]">
                {careerProgression.before.companyName}
              </div>
              <div className="text-[10px] text-muted-foreground line-clamp-1 max-w-[120px]">
                {careerProgression.before.designation}
              </div>
            </div>
          </div>

          <ArrowRight className="w-4 h-4 text-muted-foreground mx-2 flex-shrink-0" />

          {/* After */}
          <div className="text-center space-y-1.5 flex-1">
            <div className="text-xs text-muted-foreground">After</div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                <Image
                  src={careerProgression.after.companyLogo}
                  alt="Current Company"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="font-medium mt-1 text-xs line-clamp-1 max-w-[120px]">
                {careerProgression.after.companyName}
              </div>
              <div className="text-[10px] text-muted-foreground line-clamp-1 max-w-[120px]">
                {careerProgression.after.designation}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}