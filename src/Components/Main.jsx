import React, { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import LanguageSelector from "./LanguageSelector";

function Main() {
	const [code, setCode] = useState("");
	const [lang, setLang] = useState("js");
	return (
		<>
			<div className=" text-center flex justify-center">
				<img src="/Logos/banner.jpeg" alt="banner" className=" h-48 " />
			</div>
			<div className="grid grid-cols-2 gap-4 px-9 py-7 font-poppins ">
				<div className=" text-sm text-justify p-5">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum.
				</div>
				<div>
					<LanguageSelector lang={lang} setLang={setLang} />
					<CodeEditor
						value={code}
						language={lang}
						placeholder={`Please enter your ${lang} code.`}
						onChange={(evn) => setCode(evn.target.value)}
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
							className="mr-3  font-medium rounded-lg text-sm px-5 py-2.5  focus:ring-gray-600 bg-gray-800  text-white hover:bg-gray-700 "
						>
							Run Code
						</button>
						<button
							type="button"
							className=" font-medium rounded-lg text-sm px-5 py-2.5  focus:ring-green-500 bg-green-500  text-white hover:bg-green-900 "
						>
							Submit
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Main;
