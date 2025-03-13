import React, {useRef} from 'react';
import styles from "../../css/compnent/component.module.scss";

const PostForm = ({isOpen, reqURI, onClose}) => {
    const dialogRef = useRef(null);

    // 다이얼로그가 열릴 때 자동으로 showModal() 실행
    React.useEffect(() => {
        if (isOpen) {
            dialogRef.current.showModal();
        } else {
            dialogRef.current.close();
        }
    }, [isOpen]);
    return (
        <dialog ref={dialogRef} onClose={onClose}>
            <form className={styles.container} action={reqURI} method="POST">
                <input type="text" placeholder="유저 이름"/>
                <input type="text" placeholder="나이"/>
                <div className={styles.buttonContainer}>
                    <button type="submit">전송</button>
                    <button type="button" onClick={onClose}>닫기</button>
                </div>
            </form>
        </dialog>
    );
};

export default PostForm;