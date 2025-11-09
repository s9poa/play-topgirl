import styles from '@/frontend/css/components/pop-ups/profile.module.css'
import { forwardRef } from 'react';

type ProfilePopUpProps = {
    contentRef: React.Ref<HTMLDivElement>;
    closingBtnRef: React.Ref<HTMLButtonElement>;
}

const ProfilePopUp = forwardRef<HTMLDivElement, ProfilePopUpProps>(({contentRef, closingBtnRef}, blurRef) => {
    return (
    <div ref={blurRef} className={styles.blur}>
        <div ref={contentRef} className={styles.contentContainer}>
            <div className={styles.contentContainerOverflow}>
            <div className={styles.closingHeader}>
                <button ref={closingBtnRef} className={`${styles.closeProfilePopUpBtn} btnScalingEffect`}><span className={`txtOpacityEffect`}>Close Profile Details</span></button>
            </div>
            <div className={styles.header}>
                <div className={styles.infoTab}>
                    <span>Information</span>
                    <span>UTC: 2025/12/31 | 18:00</span>
                    <span>CEO</span>
                </div>
                <div className={styles.grid}>
                    <div>
                        <button><img src="/profile/profile-icon.webp" width="40" height="40" alt="" /></button>
                        <div className={styles.apContainer}>
                            <div className={styles.apBar}>
                                <img src="/icons/ap-icon.webp" width="20" height="20" alt="" />
                                <img src="/icons/info-icon.webp" width="20" height="20" alt="" />
                            </div>
                            <span className={styles.apAmount}>0/2000</span>
                        </div>
                    </div>
                    <div>
                        <span className={styles.level}>LV.76</span>
                        <div>
                            <span className={styles.name}>username</span>
                            <button className={styles.rename}><img src="/icons/rename-icon.webp" width="40" height="40" alt="" /></button>
                        </div>
                    </div>
                </div>
                <div className={styles.gridRow}>
                    <div>
                        <div className={styles.tab}>
                            <span>Max Employees</span>
                            <img src="/icons/info-icon.webp" width="20" height="20" alt="" />
                        </div>
                        <div className={styles.tabContent}>
                            <span>1,820</span>
                            <span>Next +30</span>
                        </div>
                    </div>
                    <div>
                        <div className={styles.tab}>
                            <span>Available Single Levels</span>
                            <img src="/icons/info-icon.webp" width="20" height="20" alt="" />
                        </div>
                        <div className={styles.tabContent}>
                            <span>16</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.mainContainer}>
                <span className={styles.title}>Capital Strategist 6</span>
                <div className={styles.griddenPattern}>
                    <div>
                        <div className={styles.labelContainer}>
                            <img src='/icons/total-sales-icon.webp' width="20" height="20" alt="" />
                            <span>Total Sales</span>
                        </div>
                        <div className={styles.progressContainer}>
                            <div className={styles.progressBar}><span>4,482.76T/5000T</span></div>
                            <img src='/icons/plus-icon.webp' className={styles.plusIcon} width="30" height="30" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className={styles.labelContainer}>
                            <img src='/icons/spark-cash-icon.webp' width="20" height="20" alt="" />
                            <span>Total Finance</span>
                        </div>
                        <div className={styles.progressContainer}>
                            <div className={styles.pbtf}><span>17.96B/6.40B</span></div>
                            <img src='/icons/check-icon.webp' width="30" height="30" alt="" />
                        </div>
                    </div>
                </div>
                <div className={styles.actionContainer}>
                    <div className={`normalScalingEffect`}>
                        <img src="/icons/daily-news-icon.webp" width="30" height="30" alt="" />
                        <span>Daily News</span>
                    </div>
                    <button>Advance</button>
                </div>
            </div>
            <div className={styles.footer}>
                <div>
                    <img src="/icons/rankings-icon.webp" width="40" height="40" alt="" />
                    <span>Rankings</span>
                </div>
                <div>
                    <img src="/icons/business-card-icon.webp" width="40" height="40" alt="" />
                    <span>Business Card</span>
                </div>
                <div>
                    <img src="/icons/settings-icon.webp" width="40" height="40" alt="" />
                    <span>Settings</span>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
})

export default ProfilePopUp;