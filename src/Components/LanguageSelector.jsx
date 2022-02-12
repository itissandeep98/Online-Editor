import React from "react";

function LanguageSelector({ lang, setLang }) {
	const data = [
		{
			name: "JavaScript",
			value: "js",
		},
		{
			name: "Python",
			value: "py",
		},
		{
			name: "Java",
			value: "java",
		},
		{
			name: "C++",
			value: "cpp",
		},
	];
	return (
		<div className=" mb-4 flex flex-row items-center justify-end">
			<label
				htmlFor="languages"
				className="text-sm font-medium text-gray-900 dark:text-gray-400  mr-3"
			>
				Select your Language
			</label>
			<select
				id="languages"
				value={lang}
				onChange={(evn) => setLang(evn.target.value)}
				className="bg-gray-50 shadow-2xl   text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			>
				{data.map((item) => (
					<option key={item.name} value={item.value}>
						{item.name}
					</option>
				))}
			</select>
		</div>
	);
}

export default LanguageSelector;
