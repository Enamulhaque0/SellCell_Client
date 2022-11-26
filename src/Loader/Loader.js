import {  FidgetSpinner } from 'react-loader-spinner'

export default function Loader() {
  return (
    <div className="h-screen flex justify-center items-center backdrop-blur-[9xl]">
     <FidgetSpinner
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  ballColors={['#ff0000', '#00ff00', '#0000ff']}
  backgroundColor="#F4442E"
/>
    </div>
  )
}