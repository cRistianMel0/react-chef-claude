import imgChef from '../assets/chef-claude-icon.png';

function Header(){
    return (
        <header>
            <img src={imgChef} alt="" />
            <h1>Chef Claude</h1>
        </header>
    );
}

export default Header;