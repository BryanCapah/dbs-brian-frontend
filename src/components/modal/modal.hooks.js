import { useEffect, useRef } from "react"

export const useModal = ({ modal, modalHandler }) => {
    const modalRef = useRef(null)

    useEffect(() => {
        if (modal) {
            modalRef.current.style.visibility = 'visible'
            modalRef.current.style.opacity = 1
            document.body.style.overflow = 'unset'
        }
        else {
            modalRef.current.style.visibility = 'hidden'
            modalRef.current.style.opacity = 0
            document.body.style.overflow = 'scroll'
        }

        const element = modalRef.current;

        element.addEventListener('click', () => {
            modalHandler()
        })
        window.addEventListener('keydown', () => modalHandler())

        return () => {
            element.removeEventListener('click', () => modalHandler())
            window.addEventListener('keydown', () => modalHandler())
        };

    }, [modal, modalHandler])

    return {
        modalRef
    }
}