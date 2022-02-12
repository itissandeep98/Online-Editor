function LanguageSelector({ lang, setLang }) {
	const data = [
		{
			name: 'JavaScript',
			value: 'js',
		},
		{
			name: 'Python',
			value: 'py',
		},
		{
			name: 'Java',
			value: 'java',
		},
		{
			name: 'C++',
			value: 'cpp',
		},
	];
	return (
		<div className=" mb-4 flex flex-row items-center justify-end">
			<label
				htmlFor="languages"
				className="text-sm font-medium text-gray-400  mr-3"
			>
				Select your Language
			</label>
			<select
				id="languages"
				value={lang}
				onChange={evn => setLang(evn.target.value)}
				className=" shadow-2xl text-sm rounded-lg  p-2.5 bg-gray-700 text-white "
			>
				{data.map(item => (
					<option key={item.name} value={item.value}>
						{item.name}
					</option>
				))}
			</select>
		</div>
	);
}

export default LanguageSelector;
