import LanguageSelector from './LanguageSelector';
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';

function Editor1(props) {
	const { code, setCode, lang, setLang, submit, inp, setInp } = props;
	console.log(lang, code);

	return (
		<div>
			<LanguageSelector
				lang={lang}
				setLang={setLang}
				code={code}
				setCode={setCode}
			/>
			<Editor
				height="90vh"
				value={code[lang]}
				language={lang}
				onChange={evn => setCode({ ...code, [lang]: evn })}
				options={{
					selectOnLineNumbers: true,
					renderLineHighlight: 'none',
					minimap: { enabled: false },
					renderIndentGuides: true,
				}}
				className="bg-slate-500 rounded-2xl shadow-2xl"
			/>
			{/* <CodeEditor
				value={code[lang]}
				language={lang}
				placeholder={`Please enter your ${lang} code.`}
				onChange={evn => setCode({ ...code, [lang]: evn.target.value })}
				padding={15}
				className="bg-slate-500 rounded-2xl shadow-2xl"
				style={{
					fontSize: 12,
					backgroundColor: '#f5f5f5',
					minHeight: '400px',
				}}
			/> */}

			<textarea
				rows="4"
				className="block p-2.5 w-full text-sm mt-9  rounded-lg border  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
				placeholder="Enter Your Input"
				value={inp}
				onChange={evn => setInp(evn.target.value)}
			/>
			<div className="flex flex-row mt-4 justify-end ">
				<button
					type="button"
					className="mr-9 font-medium rounded-lg text-sm px-5 py-2.5 focus:ring-gray-600 bg-gray-800  text-white hover:bg-gray-700 "
				>
					Run Code
				</button>
				<button
					type="button"
					onClick={submit}
					className="font-medium rounded-lg text-sm px-5 py-2.5 focus:ring-green-500 bg-green-500  text-white hover:bg-green-900 "
				>
					Submit
				</button>
			</div>
		</div>
	);
}

export default Editor1;
