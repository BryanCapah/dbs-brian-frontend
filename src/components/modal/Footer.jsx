import { memo } from "react"

const Footer = memo(({ text }) => {
    return (
        <div className="modal-footer component-padding border-top text-gray">
            {text}
        </div>
    )
})

export default Footer