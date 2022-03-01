import classNames from 'classnames';
import { useState } from 'react';

function Results({ results, submit, setInp, inp }) {
	const [active, setActive] = useState(false);

	return (
		<div className="pr-3">
			<ul className="flex flex-wrap border-b border-gray-200 dark:border-gray-700 mt-4">
				<li className="mr-2">
					<a
						onClick={() => setActive(false)}
						className={classNames(
							'inline-block py-4 px-4 text-sm font-medium text-center  rounded-t-lg active cursor-pointer ',
							{ 'text-blue-600 bg-gray-100': !active }
						)}
					>
						Run
					</a>
				</li>
				<li className="mr-2">
					<a
						onClick={() => setActive(true)}
						className={classNames(
							'inline-block py-4 px-4 text-sm font-medium text-center rounded-t-lg cursor-pointer ',
							{ 'text-blue-600 bg-gray-100': active }
						)}
					>
						Output
					</a>
				</li>
			</ul>
			{!active && (
				<textarea
					rows="4"
					className="block p-2.5 w-full text-sm mt-9  rounded-lg border  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
					placeholder="Enter Your Input"
					value={inp}
					onChange={evn => setInp(evn.target.value)}
				/>
			)}

			<div className=" mt-4 ">
				{!active ? (
					<div className="flex flex-row mt-4 justify-end">
						<button
							type="button"
							onClick={() => {
								submit();
								setActive(true);
							}}
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
				) : (
					<div className="p-5 ">
						{!results && (
							<div className="text-left">Your Output will appear here</div>
						)}
						{results?.loading && (
							<p>
								<svg
									role="status"
									className="inline mr-2 w-6 h-6 text-gray-600 animate-spin  fill-blue-600"
									viewBox="0 0 100 101"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
										fill="currentColor"
									/>
									<path
										d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
										fill="currentFill"
									/>
								</svg>
								Getting Resuts
							</p>
						)}
						{results?.stdout && (
							<>
								<div
									id="alert-additional-content-1"
									className="p-4 mb-4 bg-blue-100 rounded-lg "
									role="alert"
								>
									<div className="flex items-center">
										<svg
											className="mr-2 w-5 h-5 text-blue-700 "
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
												clipRule="evenodd"
											></path>
										</svg>
										<h3 className="text-lg font-medium text-blue-700 ">
											Code Ran Successfully
										</h3>
									</div>
									<div className="mt-2 mb-4 text-sm text-blue-700  break-words">
										<p>Execution time: {results?.time} Secs</p>
										<p>Memory used: {results?.memory} bytes</p>
										<p>Output: {atob(results.stdout)}</p>
									</div>
								</div>
							</>
						)}
						{results?.stderr && (
							<div
								id="alert-2"
								className="flex p-4 mb-4 bg-red-100 rounded-lg "
								role="alert"
							>
								<svg
									className="flex-shrink-0 w-5 h-5 text-red-700 "
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
										clipRule="evenodd"
									></path>
								</svg>
								<div className="ml-3 text-sm font-medium text-red-700 ">
									Error: {atob(results.stderr)}
								</div>
							</div>
						)}
						{results?.compile_output && (
							<div
								id="alert-2"
								className="flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200"
								role="alert"
							>
								<svg
									className="flex-shrink-0 w-5 h-5 text-red-700 "
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
										clipRule="evenodd"
									></path>
								</svg>
								<div className="ml-3 text-sm font-medium text-red-700 ">
									Compilation Error: {atob(results.compile_output)}
								</div>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
}

export default Results;
