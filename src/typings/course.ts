export type TLesson = {
  lesson_id: string;
  route_path: string;
  lesson_title: string;
  course_id: string;
  estimated_time: string;
  sort: number;
  quiz_id: string;
  viewform_url: string;
  is_finish: boolean;
  score_percent: number;
  en_title: string;
};

export type TCourse = {
  id?: string;
  title: string;
  route_path?: string;
  description: string;
  cover_img: string;
  tags: string[];
  share_url: string;
  user_cnt: number;
};
