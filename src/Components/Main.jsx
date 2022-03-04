import { Judge0Token } from '../Utils/Constants';
import { Languages } from '../Utils/Languages';
import MidasEditor from './MidasEditor';

function Main() {
	const title = 'Dummy Question Title';
	const question = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

## Lists
* [ ] todo
* [x] done

A table:

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text  |

Lift ($L$) can be determined by Lift Coefficient ($C_L$) like the following
equation.

$$
L = \\frac{1}{2} \\rho v^2 S C_L
$$

Lift ($L$) can be determined by Lift Coefficient ($C_L$) like the following
equation.

$$
L = \\frac{1}{2} \\rho v^2 S C_L
$$
Lift ($L$) can be determined by Lift Coefficient ($C_L$) like the following
equation.

$$
L = \\frac{1}{2} \\rho v^2 S C_L
$$

`;

	const submit = async (code, lang, inp) => {
		console.log('Creating Submission ...');
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
			return jsonGetSolution;
		}
	};

	return <MidasEditor title={title} question={question} submit={submit} />;
}

export default Main;
