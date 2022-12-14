import {Link} from 'react-router-dom'

const Header = ()=>{
    return(
        <header className="Header">
        <div>
          <ul>
            <li>
              <Link className='category' to={'/'}>Home</Link>
            </li>
            <li>
              <Link className='category' to='/games'>모든 게임</Link>
            </li>
            <li>
              <Link className='category' to='/puzzel'>퍼즐 게임</Link>
            </li>
            <li>
              <Link className='category' to='/simulation'>시뮬레이션 게임</Link>
            </li>
            <li>
              <Link className='category' to='/survival'>생존 게임</Link>
            </li>

          </ul>
        </div>
        <div>
          <ul>
            <li><Link className='category' to='/cart'>장바구니</Link></li>
            <li>로그인</li>
          </ul>
        </div>
      </header>
    )
}
export default Header