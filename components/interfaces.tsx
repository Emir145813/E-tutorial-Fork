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