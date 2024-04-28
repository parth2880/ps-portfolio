import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <Header />
        <Footer />
      </div>
    </>
  )
}

export default App
