const Header = ({ title }) => { // destructuring props
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: "Default Title" // overwrite by parent props in App.js
}

export default Header