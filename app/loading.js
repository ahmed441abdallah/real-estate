import React from 'react'
import Styles from './loading.module.css'
const loading = () => {
  return (
    <div className='p-4 sm:p-32 m-auto flex justify-center items-center'>
      <span className={Styles.loader}></span>
    </div>
  )
}

export default loading;
