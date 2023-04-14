import { memo } from "react";

const Body = memo(({ text }) => {
    return (
        <div className="modal-body">
            {text}
        </div>
    )
})

export default Body