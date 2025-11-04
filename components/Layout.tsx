import { IChildren } from './interfaces'
import NavBar from './navbar/NavBar'

function Layout({children}: IChildren) {
  return (
    <div>
      <NavBar/>
      {children}
    </div>
  )
}

export default Layout