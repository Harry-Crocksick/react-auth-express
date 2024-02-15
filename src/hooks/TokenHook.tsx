import { useState } from "react";
import { TokenProp } from "../App";

export default function useToken() {
	const [token, setUserToken] = useState(getToken());

	function getToken() {
		const rawToken = localStorage.getItem('token');
		if (rawToken) {
			const userToken = JSON.parse(rawToken) as TokenProp;
			return userToken?.token;
		}
	}

	function setToken(userToken: TokenProp) {
		localStorage.setItem('token', JSON.stringify(userToken));
		setUserToken(userToken?.token);
	}

	return [token, setToken] as const;
}