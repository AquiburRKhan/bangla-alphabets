import { Perf } from "r3f-perf";
import { Center } from "@react-three/drei";
import Blackboard from "./components/Blackboard";

const App = () => {
  return (
    <>
      <Perf position="top-left" />

      <Center>
        <Blackboard />
      </Center>
    </>
  );
};

export default App;
