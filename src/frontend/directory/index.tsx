import styles from '@/frontend/css/pages/index.module.css'
import MainUIFooter from "../components/main-ui/footer"

function Index () {
    return (
        <div className={`${styles.page} wrapper`}>
            <MainUIFooter />
        </div>
    )
}

export default Index;