import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { setPage } from "../store"

const Pagination = ()=>{
    let page = useSelector(state => state.page)
    let total = useSelector(state => state.total)
    let limit = useSelector(state => state.limit)
    const dispatch = useDispatch()

    const numPages = Math.ceil(total / limit)
    return(
            <nav className="Pagination">
                <button onClick={()=>{dispatch(setPage(-1))}} disabled={page === 1}>
                    &lt;
                </button>
                {Array(numPages).fill().map((_, i)=>{
                    return (
                        <button key={i + 1}
                        onClick={()=>{ dispatch(setPage(i + 1)) }}
                        aria-current={page === i + 1 ? "page" : null}>
                            {i + 1}
                        </button>
                    )
                })}
                
                <button onClick={()=>{
                    dispatch(setPage(+1))
                }}
                disabled={page === numPages}>
                    &gt;
                </button>
            </nav>
    )
}
export default React.memo(Pagination);