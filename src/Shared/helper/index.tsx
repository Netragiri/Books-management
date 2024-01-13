import { toast } from "react-toastify"

export const successToast = (msg:string) =>{
    toast.success(msg,{
        autoClose:2000,
        bodyClassName:"fw-bold",
    })
}

export const errorToast = (msg:string) =>{
    toast.error(msg,{
        autoClose:2000,
        bodyClassName:"fw-bold",
    })
}