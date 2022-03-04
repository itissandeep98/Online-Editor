import Editor from '@monaco-editor/react';
import LanguageSelector from './LanguageSelector';

function IDE(props) {
	const { code, setCode, lang, setLang } = props;

	return (
		<div className="pr-3 ">
			<LanguageSelector
				lang={lang}
				setLang={setLang}
				code={code}
				setCode={setCode}
			/>
			<Editor
				height="70vh"
				value={code[lang]}
				// theme="vs-dark"
				language={lang}
				onChange={evn => setCode({ ...code, [lang]: evn })}
				options={{
					selectOnLineNumbers: true,
					renderLineHighlight: 'none',
					minimap: { enabled: false },
					renderIndentGuides: true,
					scrollBeyondLastLine: false,
				}}
			/>
			<hr />
		</div>
	);
}

export default IDE;
