import {FallingLines} from 'react-loader-spinner'

export default function Loader() {
  return (
    <div className="h-screen flex justify-center items-center backdrop-blur-[9xl]">
   <FallingLines
  color="#4fa94d"
  width="100"
  visible={true}
  ariaLabel='falling-lines-loading'
/>
    </div>
  )
}