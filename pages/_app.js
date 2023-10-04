import '../styles/globals.css';
import { FilterProvider } from '../context/filter';

function MyApp({ Component, pageProps }) {
  return (
    <FilterProvider>
      <Component {...pageProps} />
    </FilterProvider>
  )
}

export default MyApp
