import './App.css';
import Input from './components/Input/Input';

function App() {
  const checkLength = (value: string) => value.trim().length > 3;
  const checkIfNumbers = (value: string) =>
    !isNaN(+value) && value.trim().length > 0;
  return (
    <>
      <Input fieldName="Name" value="Harry" />
      <Input fieldName="Surname" value="Potter" />
      <Input fieldName="Surname" value=">3" checkCondition={checkLength} />
      <Input
        fieldName="Numbers"
        value="numbers"
        checkCondition={checkIfNumbers}
      />
    </>
  );
}

export default App;
