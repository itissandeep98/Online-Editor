import { Languages } from "../Utils/Languages";

function LanguageSelector({ lang, setLang, code, setCode }) {
	const data = Object.keys(Languages).map((language) => ({
		name: Languages[language].name,
		value: language,
	}));

	const handleChange = (evn) => {
		const file = evn.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				const ext = file.name.split(".").pop();
				const text = e.target.result;
				setLang(ext);
				setCode({ ...code, [ext]: text });
			};
			reader.readAsText(file);
		}
	};
	return (
		<div className=" mb-4 flex flex-row items-center justify-between">
			<div className="border bg-gray-700 rounded-2xl  px-3 py-2 hover:bg-slate-600 text-white cursor-pointer">
				<img
					src="/icons/upload.svg"
					className="h-5 inline mr-3 "
					alt="upload"
				/>
				<label
					className="text-xs font-medium cursor-pointer "
					htmlFor="user_avatar"
				>
					Upload as file
				</label>
				<input
					id="user_avatar"
					type="file"
					hidden
					accept=".js,.py,.java,.cpp"
					onChange={handleChange}
				/>
			</div>
			<div>
				<label
					htmlFor="languages"
					className="text-sm font-medium text-gray-400  mr-3"
				>
					Language
				</label>
				<select
					id="languages"
					value={lang}
					onChange={(evn) => setLang(evn.target.value)}
					className=" text-xs rounded-lg  px-3 py-2 bg-gray-700 text-white cursor-pointer "
				>
					{data.map((item) => (
						<option key={item.name} value={item.value}>
							{item.name}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}

export default LanguageSelector;
