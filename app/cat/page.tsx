'use client'
import { useDispatch } from "react-redux";
import { fechCancel, fetchCats } from "@/lib/features/cat/catSlice";

const CatPage = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(fetchCats())
    }

    const handleCancel = () => {
        dispatch(fechCancel())
    }

    return (
        <div>
            <button onClick={handleClick}>
                Click
            </button>

            <br />

            <button onClick={handleCancel}>Cancel</button>
        </div>
    )
}

export default CatPage;