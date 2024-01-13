import { Field } from "formik"
import { useState } from "react"

interface PasswordInputProps {
    handleChange: (e: React.ChangeEvent<any>) => void;
    handleBlur: (e: React.FocusEvent<any>) => void;
    value: any;
  }

  const PasswordInput: React.FC<PasswordInputProps> = ({ handleChange, handleBlur, value }) => {
    const [isShowPassword, setShowPassword] = useState(false)
  const [type, setType] = useState('password')

  const handleShowHidePassword = () => {
    if (type === 'password') {
      setType('text')
      setShowPassword(true)
    } else {
      setType('password')
      setShowPassword(false)
    }
  }
  return (
    <div className='password-box'>
    <Field
      type={type}
      name="password"
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
      placeholder="Enter password"
      className="form-control"
    />
    <span
      className={`show-hide-pass ${isShowPassword ? 'show-pass' : ''
        }`}
      onClick={handleShowHidePassword}
    ></span>
  </div>
  )
}

export default PasswordInput
