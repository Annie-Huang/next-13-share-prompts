// use @ instead of @/ because we change it in jsconfig.json
import '@styles/globals.css';
import Nav from '@components/Nav';

export const metadata = {
  title: 'Promptopia',
  description: 'Discover & Share AI Prompts',
};
const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div class='main'>
          <div class='gradient'></div>
        </div>
        <main class='app'>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
