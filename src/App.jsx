import './App.css'
import Counter from './components/Counter'
import To_dos from './components/to-dos/To_dos'

function App() {
  return (
    <>
      <h1 className='text-3xl mt-10'>Trying Out Zustand</h1>
      {/* <Counter></Counter> */}
      <To_dos></To_dos>
    </>
  )
}

export default App
