import React from "react";

export default function PostOwner(props) {
	return (
		<div className="vstack gap-3">
			<div className="d-flex align-items-center gap-3">
				<img
					src="/profileImages/shiba.jpg"
					width="48"
					height="48"
					className="rounded-circle"
					style={{ objectFit: "cover" }}
				/>
				<span className="fw-semibold fs-5 text-white">
					Nathaphong Phongsawaleesri 640610630
				</span>
			</div>
			<span className="text-white">Quiz อะไรกันครับเนี่ย #261207</span>
			<div className="d-flex align-items-center gap-1">
				<img src="/like.svg" width={20}></img>
				<span style={{ color: "#B0B3B8" }}>100 คน</span>
			</div>
			<hr className="m-0 border" />
		</div>
	);
}
