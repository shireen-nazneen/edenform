import MainForm from './component';
import ThemeProvider from "./theme";
import '../src/component/style/mainediv.css';
import "@fontsource/inter";
function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <MainForm/>
      </ThemeProvider>
    </div>
  );
}

export default App;
