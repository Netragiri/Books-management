import { toast } from "react-toastify"

export const successToast = (msg:string) =>{
    toast.success(msg,{
        autoClose:1500,
        bodyClassName:"fw-bold",
    })
}

export const errorToast = (msg:string) =>{
    toast.error(msg,{
        autoClose:1500,
        bodyClassName:"fw-bold",
    })
}
