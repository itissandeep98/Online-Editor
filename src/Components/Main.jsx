import Editor from './Editor';

function Main() {
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
					<Editor />
				</div>
			</div>
		</>
	);
}

export default Main;
