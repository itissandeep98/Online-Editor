import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeMath from 'rehype-mathjax';
import { TemplateCode } from '../Utils/Constants';
import Editor from './Editor';
import Results from './Results';

function MidasEditor(props) {
	const { title, question, submit } = props;
	const [code, setCode] = useState(
		JSON.parse(localStorage.getItem('midas-code')) || TemplateCode
	);
	const [lang, setLang] = useState('cpp');
	const [results, setResults] = useState(null);
	const [inp, setInp] = useState('');

	useEffect(() => {
		localStorage.setItem('midas-code', JSON.stringify(code));
	}, [code]);

	const handleSubmit = async () => {
		setResults({ loading: true });
		setResults(await submit(code, lang, inp));
	};

	return (
		<>
			<div className="grid grid-cols-4 gap-4  font-poppins ">
				<div className="col-span-2 text-sm text-justify p-5 max-h-screen overflow-auto border-r-8">
					<div className=" text-center flex justify-center">
						<img src="/Logos/banner.jpeg" alt="banner" className=" h-24 " />
					</div>
					<h1 className="text-4xl my-2">{title}</h1>
					<hr />
					<br />
					<ReactMarkdown
						children={question}
						remarkPlugins={[remarkMath, remarkGfm]}
						rehypePlugins={[rehypeMath]}
					/>
				</div>
				<div className="col-span-2 py-4 max-h-screen overflow-auto">
					<Editor code={code} setCode={setCode} lang={lang} setLang={setLang} />
					<Results
						results={results}
						submit={handleSubmit}
						inp={inp}
						setInp={setInp}
					/>
				</div>
			</div>
		</>
	);
}

export default MidasEditor;
