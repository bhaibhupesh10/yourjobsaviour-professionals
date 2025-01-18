// DevOpsJobRoles.tsx
"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const companies = [
  {
    logo: "/assets/meta-logo.png",
    name: "DevOps Engineer",
    icon: "Meta"
  },
  {
    logo: "/assets/amazon-logo.png",
    name: "Site Reliability Engineer (SRE)",
    icon: "Amazon"
  },
  {
    logo: "/assets/netflix-logo.png",
    name: "DevOps Architect",
    icon: "Netflix"
  },
  {
    logo: "/assets/google-logo.png",
    name: "Cloud Engineer",
    icon: "Google"
  },
  {
    logo: "/assets/microsoft-logo.png",
    name: "Platform Engineer",
    icon: "Microsoft"
  }
];

const skillCategories = [
  {
    skills: [
      { name: "AWS", icon: "/assets/aws.png" },
      { name: "Docker", icon: "/assets/docker.png" },
      { name: "Kubernetes", icon: "/assets/kubernetes.png" },
      { name: "Jenkins", icon: "/assets/jenkins.png" },
      { name: "Terraform", icon: "/assets/terraform.png" },
      { name: "Ansible", icon: "/assets/ansible.png" },
      { name: "Github", icon: "/assets/github.png" },
    ]
  },
  {
    skills: [
      { name: "Chef", icon: "/assets/chef.png" },
      { name: "Puppet", icon: "/assets/puppet.png" },
      { name: "GitOps", icon: "/assets/gitops.png" },
      { name: "Prometheus", icon: "/assets/prometheus.png" },
      { name: "Grafana", icon: "/assets/grafana.png" },
      { name: "ArgoCD", icon: "/assets/argocd.png" },
      { name: "Lambda", icon: "/assets/lambda.png" },
    ]
  },
  {
    skills: [
      { name: "Fargate", icon: "/assets/fargate.png" },
      { name: "SubNets", icon: "/assets/subnets.png" },
      { name: "CloudFront", icon: "/assets/cloudfront.png" },
      { name: "CI/CD", icon: "/assets/cicd.png" },
      { name: "Redshift", icon: "/assets/redshift.png" },
      { name: "Linux", icon: "/assets/linux.png" },
      { name: "SQL", icon: "/assets/sql.png" },
    ]
  }
];

export function DevOpsJobRoles() {
  return (
    <Card className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-sm">
      <div className="p-6">
        {/* LinkedIn Header */}
        <div className="flex items-center gap-3 mb-6">
          <Image
            src="/assets/linkedin-logo.png"
            alt="LinkedIn"
            width={36}
            height={36}
            className="rounded"
          />
          <Input 
            placeholder="DevOps Job Role"
            className="bg-gray-100 border-none"
          />
          <div className="w-8 h-8 rounded-full bg-gray-200"></div>
        </div>

        {/* Job Roles */}
        <div className="space-y-4 mb-8">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">{company.name}</h3>
                <p className="text-xs text-gray-500">{company.icon}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Required Skills */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Required skills</h2>
          <div className="space-y-4">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                    <span className="text-sm">{skill.name}</span>
                  </Badge>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}