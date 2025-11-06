import styles from '@/frontend/css/pages/index.module.css'
import MainUIFooter from "../components/main-ui/footer"
import MainUIHeader from '../components/main-ui/header'

function Index () {
    return (
        <div className={`${styles.page} wrapper`}>
            <MainUIHeader />
            <MainUIFooter />
        </div>
    )
}

export default Index;