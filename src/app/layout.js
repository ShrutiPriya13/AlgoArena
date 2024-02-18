import '@styles/globals.css';

const RootLayout = ({children}) => {
  return (
    <html>
        <body className='body'>
          <main>
              {children}
          </main>
        </body>
    </html>
  )
}

export default RootLayout