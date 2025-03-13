import React, {useRef} from 'react';

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
            <form action={reqURI} method="POST">
                <input type="text" placeholder="유저 이름"/>
                <input type="text" placeholder="나이"/>
                <div>
                    <button type="submit">전송</button>
                    <button type="button">닫기</button>
                </div>
            </form>
        </dialog>
    );
};

export default PostForm;