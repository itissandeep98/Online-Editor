import React, { useState } from "react";
import LanguageSelector from "./LanguageSelector";
import CodeEditor from "@uiw/react-textarea-code-editor";

function Editor() {
	const [code, setCode] = useState(
		JSON.parse(localStorage.getItem("code")) || ""
	);
	useEffect(() => {
		localStorage.setItem("code", JSON.stringify(code));
	}, [code]);

	const [lang, setLang] = useState("py");
	return (
		<div>
			<LanguageSelector lang={lang} setLang={setLang} />
			<CodeEditor
				value={code[lang]}
				language={lang}
				placeholder={`Please enter your ${lang} code.`}
				onChange={(evn) => setCode({ ...code, [lang]: evn.target.value })}
				padding={15}
				className="bg-slate-500 rounded-2xl shadow-2xl"
				style={{
					fontSize: 12,
					backgroundColor: "#f5f5f5",
					minHeight: "400px",
				}}
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
					className="font-medium rounded-lg text-sm px-5 py-2.5 focus:ring-green-500 bg-green-500  text-white hover:bg-green-900 "
				>
					Submit
				</button>
			</div>
		</div>
	);
}

export default Editor;
