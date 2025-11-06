import styles from '@/frontend/css/components/main-ui/footer.module.css'
import { Link } from 'react-router';

function MainUIFooter () {
    return (
        <div className={styles.footer}>
            <Link to="" aria-label="Street"><img src="icons/street-icon.webp" width="40" height="40" alt="" /></Link>
            <Link to="" aria-label="Artists"><img src="icons/artists-icon.webp" width="40" height="40" alt="" /></Link>
            <Link to="" aria-label="Studio"><img src="icons/studio-icon.webp" width="40" height="40" alt="" /></Link>
            <Link to="" aria-label="Tour"><img src="icons/tour-icon.webp" width="40" height="40" alt="" /></Link>
            <Link to="" aria-label="Group"><img src="icons/group-icon.webp" width="40" height="40" alt="" /></Link>
        </div>
    )
}

export default MainUIFooter;