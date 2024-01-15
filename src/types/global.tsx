export interface FormValues {
    email: string;
    password: string;
    confirm_password?:string
  }

export interface DropDownValues {
  value: number,
  label: string
}

export interface BookAddValues {
  author: string,
  name: string,
  price:string,
  id?:string
}

export interface UserProfile {
  email:string,
  password:string
}