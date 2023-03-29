function Footer(props) {
  return (
    <footer className={'footer ' + (props.loggedIn ? 'footer_shown' : '')}>
        <p className="footer__copyright">© {new Date().getFullYear()} Mesto Russia</p>
      </footer>
  )
}
export default Footer;