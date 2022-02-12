import { useEffect, useState } from 'react';
import { Judge0Token } from '../Utils/Constants';
import { Languages } from '../Utils/Languages';
import Editor from './Editor';
import Results from './Results';

function Main() {
	const [code, setCode] = useState(
		JSON.parse(localStorage.getItem('code')) || ''
	);
	const [lang, setLang] = useState('py');
	const [results, setResults] = useState(null);
	const [inp, setInp] = useState('');

	useEffect(() => {
		localStorage.setItem('code', JSON.stringify(code));
	}, [code]);

	const submit = async e => {
		e.preventDefault();
		console.log('Creating Submission ...');
		setResults({ loading: true });
		const data = {
			source_code: code[lang],
			stdin: inp,
			language_id: Languages[lang].id,
		};
		const response = await fetch(
			'https://judge0-ce.p.rapidapi.com/submissions',
			{
				method: 'POST',
				headers: {
					'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
					'x-rapidapi-key': Judge0Token,
					'content-type': 'application/json',
					accept: 'application/json',
				},
				body: JSON.stringify(data),
			}
		);
		const jsonResponse = await response.json();
		if (jsonResponse.token) {
			let url = `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`;
			const getSolution = await fetch(url, {
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
					'x-rapidapi-key': Judge0Token,
					'content-type': 'application/json',
				},
			});

			const jsonGetSolution = await getSolution.json();
			setResults(jsonGetSolution);
		}
	};

	return (
		<>
			<div className=" text-center flex justify-center">
				<img src="/Logos/banner.jpeg" alt="banner" className=" h-48 " />
			</div>
			<div className="grid grid-cols-4 gap-4 px-9 py-7  font-poppins ">
				<div className="col-span-3 text-sm text-justify p-5">
					<Editor
						code={code}
						setCode={setCode}
						lang={lang}
						setLang={setLang}
						submit={submit}
						inp={inp}
						setInp={setInp}
					/>
				</div>
				<div>
					<Results results={results} />
				</div>
			</div>
		</>
	);
}

export default Main;
