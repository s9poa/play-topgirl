import styles from '@/frontend/css/components/main-ui/questDirection.module.css'

function MainUIQuestDirection () {
    return (
        <button className={styles.btn}>
            <img src="/icons/quest-icon.webp" width="30" height="30" alt="" />
            <span>Join group rallies.</span>
            <span className={styles.progressTxt}>3/100</span>
        </button>
    )
}

export default MainUIQuestDirection;