
import React from "react";
import './Loader.css'
import { ThreeDots } from 'react-loader-spinner'
const CircleLoader = () => {
    return (
        <div className='d-flex justify-content-left align-items-center loading'>
            <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
}
export default CircleLoader;



export const Loader = () => {
    return (
        <>
            <ThreeDots
                height="20"
                width="50"
                radius="9"
                color="#ffff"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </>
    )
}
export const LoaderwithDot = ({uploading}) => {
    return (
        <>
            <button class="buttonload">
                <i class="fa fa-refresh fa-spin"></i>{uploading}
            </button>
        </>
    )

}