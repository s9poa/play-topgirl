import { useEffect } from 'react';
import { useRef } from 'react';

import styles from '@/frontend/css/components/main-ui/header.module.css'
import ProfilePopUp from '../pop-ups/profile';

function MainUIHeader() {
    const blurRef = useRef<HTMLDivElement | null>(null)
    const contentRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const profileBtn = document.querySelector(`.${styles.profileBtn}`) as HTMLButtonElement

        profileBtn.addEventListener('click', () => {
            blurRef.current!.style.opacity = '1'
            contentRef.current!.style.transform = 'scale(1)'
            blurRef.current!.style.visibility = 'visible'
        })

        if(blurRef.current) {
            blurRef.current.addEventListener('click', (e) => {
                if(e.target === blurRef.current) {
                    blurRef.current!.style.opacity = '0'
                    contentRef.current!.style.transform = 'scale(0)'

                    setTimeout(() => {
                        blurRef.current!.style.visibility = 'hidden'
                    }, 175)
                }
            })
        }
    }, [])
        

    return (
        <div className={styles.ghostContainer}>
            <div className={styles.grid}>
                <button className={styles.profileBtn}><img src="/profile/profile-icon.webp" className="scale-effect" width="40" height="40" alt="" /></button>
                <div className={styles.profileStatContainer}>
                    <div className={styles.top}>
                    </div>
                    <div className={styles.bottom}>
                    </div>
                </div>
            </div>
            <ProfilePopUp ref={blurRef} contentRef={contentRef} />
        </div>
    )
}

export default MainUIHeader;