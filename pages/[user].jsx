import React from "react";
import { useRouter } from "next/router";
export default function user() {
	const router = useRouter();
	const user = router.query;
	return;
}
