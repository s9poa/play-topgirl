import styles from '@/frontend/css/pages/index.module.css'
import MainUIFooter from "../components/main-ui/footer"
import MainUIHeader from '../components/main-ui/header'
import MainUIQuestDirection from '../components/main-ui/questDirection'

function Index () {
    return (
        <div className={`${styles.page} wrapper`}>
            <MainUIHeader />
            <div className={styles.mainContentContainer}>
                <div className={styles.bottomLeft}>
                    <MainUIQuestDirection />
                </div>
            </div>
            <MainUIFooter />
        </div>
    )
}

export default Index;