import SpokeHero from './components/SpokeHero.tsx';

function App() {

	return (
		<>
			<SpokeHero wheelRadius={350} data={[
				{title: "Test", description: "this is a test"},
				{title: "Test2", description: "this is a 2nd test"},
				{title: "Test3", description: "this is a 3rd test"},
				{title: "Test4", description: "this is a 4th test"},
			]} spokeRadius={100} padding={40}/>
		</>
	)
}

export default App
