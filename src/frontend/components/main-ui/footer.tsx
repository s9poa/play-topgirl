import styles from '@/frontend/css/components/main-ui/footer.module.css'
import { Link } from 'react-router';

function MainUIFooter () {
    return (
        <div className={styles.footer}>
            <Link to="" aria-label="Street"><img src="/public/icons/street-icon.webp" width="40" height="40" alt="" /></Link>
            <Link to="" aria-label="Artists"><img src="/public/icons/artists-icon.webp" width="40" height="40" alt="" /></Link>
            <Link to="" aria-label="Studio"><img src="/public/icons/studio-icon.webp" width="40" height="40" alt="" /></Link>
            <Link to="" aria-label="Tour"><img src="/public/icons/tour-icon.webp" width="40" height="40" alt="" /></Link>
            <Link to="" aria-label="Group"><img src="/public/icons/group-icon.webp" width="40" height="40" alt="" /></Link>
        </div>
    )
}

export default MainUIFooter;