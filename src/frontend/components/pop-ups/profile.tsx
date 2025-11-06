import styles from '@/frontend/css/components/pop-ups/profile.module.css'
import { forwardRef } from 'react';

type ProfilePopUpProps = {
    contentRef: React.Ref<HTMLDivElement>;
}

const ProfilePopUp = forwardRef<HTMLDivElement, ProfilePopUpProps>(({contentRef}, blurRef) => {
    return (
    <div ref={blurRef} className={styles.blur}>
        <div ref={contentRef} className={styles.contentContainer}>
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
                        <span className={styles.level}>LV.1</span>
                        <div>
                            <span className={styles.name}>username</span>
                            <button className={styles.rename}><img src="/icons/rename-icon.webp" width="40" height="40" alt="" /></button>
                        </div>
                    </div>
                </div>
                <div className={styles.gridRow}></div>
            </div>
        </div>
    </div>
    )
})

export default ProfilePopUp;