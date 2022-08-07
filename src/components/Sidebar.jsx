import { UilEstate, UilClipboardNotes  } from '@iconscout/react-unicons'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const SideBar = styled.nav`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #000;
  padding: 1rem 2rem;
  justify-content: center;
  @media (max-width: 568px) {
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    background-color: transparent;
  }

`
const NavMenu = styled.div`

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
  }

  & ul li a{
    border-radius: .5rem;
    display: flex;
    gap: 1rem;
    padding: .75rem 2rem;
  }
  
  & ul li a:hover{
    background-color: #6366f1;
    transition: all .2s ease-in-out;
    

  }

  @media (max-width: 568px) {
    position: fixed;
    width: 100%;
    bottom: 1rem;
    left: 0;
    & ul {
      background-color: black;
      margin: 0 1rem;
      border-radius:.75rem;
      flex-direction: row;
      padding: 1rem 0;
      justify-content: center;
    }

    & ul li a{
      flex-direction: column;
      align-items: center;
      gap: 0;
      padding: 1rem;

    }

  }
`

const Sidebar = () => {

  const routes = [
    {
      path: '/',
      name: 'Home',
      icon: <UilEstate />
    },
    {
      path: '/tareas',
      name: 'Tareas',
      icon: <UilClipboardNotes />
    }

  ]

  return (
    <SideBar>
      <div className="nav__container">
        <div className="nav__logo">
        </div>
        <NavMenu className='nav__menu'>
          <ul>
            
          {routes.map(route => 
            <li key={route.name}>
              <NavLink to={route.path}>
                {route.icon}
                <span>{route.name}</span>
              </NavLink>
            </li>     
          )}
          </ul>
        </NavMenu>
      </div>
    </SideBar>
  )
}

export default Sidebar