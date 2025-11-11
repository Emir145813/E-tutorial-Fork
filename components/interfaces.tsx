

export interface IChildren {
  children : React.ReactNode
}

export interface ICatItem {
    id : number,
    info : ICourceInfo[],
    appearance : ICourceAppearance[]

}

export interface ICourceInfo {
  id : number,
  title : string,
  mount : number
}

export interface ICourceAppearance {
  id : number,
  bg : string,
  accent : string,
  icon : string
}

export interface ICourseField {
  fieldName ?: string,
  bgColor ?: string,
  textColor ?: string
}

export interface ICourse {
  id ?: number,
  title ?: string,
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

export interface ICourseList {
  course : ICourse
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