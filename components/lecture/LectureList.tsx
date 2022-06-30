import React from "react";
import LectureItem from "./LectureItem";
import { Lecture } from "interface/lecture";
import useLectures from "hooks/useLectures";

const LectureList = (): JSX.Element => {
  const { isLoading, data } = useLectures("DataScience");

  if (isLoading) {
    return <div>Loading ...</div>
  }

  const lectureItems = data.lectureList.map((lecture: Lecture) => {
    return (<LectureItem key={lecture.id} lecture={lecture} />)
  })

  return (
    <div>
      { lectureItems }
    </div>
  );
};

export default LectureList;
