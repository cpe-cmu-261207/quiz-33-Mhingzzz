import React from "react";
import Reply from "./Reply";
import { useRouter } from "next/router";
import { comments } from "../libs/comments";
import { useState } from "react";
export default function Comment(props) {
	return (
		// <div>
		//   {/* Entire Comment div */}
		//   <div></div>

		//   {/*render Reply here... */}
		// </div>
		<div>
			{comments.map((comment, i) => (
				<div>
					<div className="d-flex gap-2 my-2" key={i}>
						<img
							src={comment.userImagePath}
							width="48"
							height="48"
							className="rounded-circle"
							style={{ objectFit: "cover" }}
						/>
						<div
							className="rounded rounded-3 p-2"
							style={{ backgroundColor: "#3A3B3C" }}
						>
							<span className="fw-semibold" style={{ color: "#E4E6EB" }}>
								{comment.username}
							</span>
							<br />
							<span style={{ color: "#E4E6EB" }}>{comment.commentText}</span>
							<div className="d-flex align-items-center gap-1">
								<img src="/like.svg" width={20}></img>
								<span style={{ color: "#B0B3B8" }}>{comment.likeNum}</span>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
