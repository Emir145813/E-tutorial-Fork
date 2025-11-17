export interface IChildren {
  children : React.ReactNode
}

export interface ICategoryList{
  course : ICourse
}
export interface ICourseList {
  course : ICourse
}

export interface ICourse {
  _id : string,
  title : string,
  mount : number,
  bg : string,
  accent : string,
  icon ?: string,
  category ?: string,
  prise ?: number,
  discount ?: number,
  thumbnail ?: string,
  raiating ?: string,
  students ?: number
  level ?: string,
  courseTime ?: number,
  teacher : string,
  veiwerMount : number
}

export type IDiscountCalculator = {
  prise : number | undefined ;
  discount : number | undefined ;
}

export interface IInstructor {
  id : number,
  thumbnail : string
  name : string,
  skill : string,
  raiting : number,
  studends : number
}

export interface IInstructorList {
  instructor : IInstructor
}

export interface ICompany {
  id : number,
  img : string
}