import Editor from '@monaco-editor/react';
import LanguageSelector from './LanguageSelector';

function Editor1(props) {
	const { code, setCode, lang, setLang } = props;

	return (
		<div>
			<LanguageSelector
				lang={lang}
				setLang={setLang}
				code={code}
				setCode={setCode}
			/>
			<Editor
				height="70vh"
				value={code[lang]}
				theme="vs-dark"
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
		</div>
	);
}

export default Editor1;
