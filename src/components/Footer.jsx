import { getYear } from '../utilities/getDates';

const Footer = ({ copyright }) => (
	<footer>
        <figure>
            <img src="../src/media/logo-curtaindrop.svg" alt="" />
        </figure>
        <p>&copy; {copyright} Kaleb/Haw Tan/Gustavo</p>
        <p>For education purpose only.</p>
    </footer>
);

Footer.defaultProps = {
    copyright: getYear()
}

export default Footer;