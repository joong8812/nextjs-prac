// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const mockCategory = {
  id: 0,
  name: '프로그래밍',
}

const mockTags = [
  {
    id: 0,
    name: '평생소장'
  },
  {
    id: 1,
    name: 'AWS'
  },
  {
    id: 3,
    name: 'DevOps'
  },
]

const lecturesData = {
  lectureList: [
    {
      id: 0,
      category: mockCategory,
      title: "초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영",
      tags: mockTags,
      description: "개발/운영/아키텍트를 아우르는 AWS/DevOps 전 과정 마스터! 41가지 툴을",
      thumb: "/thumb.jpg",
      isHot: true,
      isNew: true,
    },
    {
      id: 1,
      category: mockCategory,
      title: "초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영",
      tags: mockTags,
      description: "개발/운영/아키텍트를 아우르는 AWS/DevOps 전 과정 마스터! 41가지 툴을",
      thumb: "/thumb.jpg",
      isHot: true,
      isNew: true,
    },
    {
      id: 2,
      category: mockCategory,
      title: "초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영",
      tags: mockTags,
      description: "개발/운영/아키텍트를 아우르는 AWS/DevOps 전 과정 마스터! 41가지 툴을",
      thumb: "/thumb.jpg",
      isHot: true,
      isNew: true,
    },
  ],
};

const lecturesDataDataScience = {
  lectureList: [
    {
      id: 0,
      category: mockCategory,
      title: "Data Science 초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영",
      tags: mockTags,
      description: "개발/운영/아키텍트를 아우르는 AWS/DevOps 전 과정 마스터! 41가지 툴을",
      thumb: "/thumb.jpg",
      isHot: true,
      isNew: true,
    }
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.categories === 'Programming') {
    res.status(200).json(lecturesData);
  }
  if (req.query.categories === 'DataScience') {
    res.status(200).json(lecturesDataDataScience);
  }
  
}
